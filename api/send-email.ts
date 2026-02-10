import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';

// Validar que la API key exista
if (!process.env.RESEND_API_KEY) {
  console.error('❌ RESEND_API_KEY no está configurada en las variables de entorno');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Función para validar email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validar campos
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Campos requeridos faltantes' });
    }

    // Validar formato de email
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    // Validar que los campos no sean solo espacios
    if (name.trim().length === 0 || subject.trim().length === 0 || message.trim().length === 0) {
      return res.status(400).json({ error: 'Los campos no pueden estar vacíos' });
    }

    console.log('📧 Intentando enviar email desde:', email);

    const result = await resend.emails.send({
      from: 'noreply@resend.dev', // Cambiar a tu dominio verificado en Resend
      to: 'barbara.arias.salvo@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de ${name}: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>De:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      console.error('❌ Error de Resend:', result.error);
      return res.status(400).json({ 
        error: 'Error al enviar el correo',
        details: result.error?.message || 'Error desconocido'
      });
    }

    console.log('✅ Email enviado exitosamente:', result.data?.id);
    return res.status(200).json({ success: true, data: result.data });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ Error en send-email:', errorMessage);
    return res.status(500).json({ 
      error: 'Error al enviar el correo',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });
  }
};
