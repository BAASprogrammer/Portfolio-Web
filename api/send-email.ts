import { VercelRequest, VercelResponse } from '@vercel/node';

// Validar que el Formspree ID exista
if (!process.env.FORMSPREE_ID) {
  console.error('❌ FORMSPREE_ID no está configurada en las variables de entorno');
}

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

    const formspreeId = process.env.FORMSPREE_ID;
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: `Portafolio: ${subject}`,
        message: `Asunto: ${subject}\n\n${message}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Error de Formspree:', data);
      return res.status(400).json({ 
        error: 'Error al enviar el correo',
        details: data.error || 'Error desconocido'
      });
    }

    console.log('✅ Email enviado exitosamente a través de Formspree');
    return res.status(200).json({ success: true, data });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ Error en send-email:', errorMessage);
    return res.status(500).json({ 
      error: 'Error al enviar el correo',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });
  }
};
