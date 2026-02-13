import { useState, type FormEvent } from 'react';
import type { SectionProps } from '../types/SectionProps';

export const ContactForm = ({id} : SectionProps) => {
  const [errors, setErrors] = useState<{[key:string]:string}>({});
  const [response, setResponse] = useState<String>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Reusable sanitize function
  const sanitizeInput = (value: string, type: 'text' | 'email' | 'subject' | 'message') => {
    switch (type) {
      case 'text':
        return value.replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑäëïöüÄËÏÖÜ\s]/g, '');
      case 'email':
        return value.replace(/[^a-zA-Z0-9@._-]/g, '');
      case 'subject':
        return value.replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑäëïöüÄËÏÖÜ0-9\s\-_]/g, '');
      case 'message':
        return value.replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑäëïöüÄËÏÖÜ0-9\s.,!?;:()\-\[\]]/g, '');
      default:
        return value;
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setName(sanitizeInput(e.target.value, 'text'));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setEmail(sanitizeInput(e.target.value, 'email'));
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleSubjectBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setSubject(sanitizeInput(e.target.value, 'subject'));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleMessageBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setMessage(sanitizeInput(e.target.value, 'message'));
  };
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Sanitize fields before submitting
    const sanitizedName = sanitizeInput(name, 'text');
    const sanitizedEmail = sanitizeInput(email, 'email');
    const sanitizedSubject = sanitizeInput(subject, 'subject');
    const sanitizedMessage = sanitizeInput(message, 'message');
    setName(sanitizedName);
    setEmail(sanitizedEmail);
    setSubject(sanitizedSubject);
    setMessage(sanitizedMessage);
    const fields = {
      general: sanitizedName,
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage
    };
    const isValid = validateFields(fields);
    
    if (isValid) {
      try {
        console.log('📤 Enviando formulario...');
        const apiResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            general: fields.name,
            name: fields.name,
            email: fields.email,
            subject: fields.subject,
            message: fields.message,
          }),
        });

        console.log('📨 Respuesta recibida:', apiResponse.status);
        
        let data;
        try {
          data = await apiResponse.json();
          console.log('📦 Datos parseados:', data);
        } catch (parseError) {
          console.error('❌ Error al parsear JSON:', parseError);
          setResponse('Error al procesar la respuesta del servidor.');
          return;
        }

        if (apiResponse.ok) {
          console.log('✅ Email enviado exitosamente');
          setResponse('Correo enviado exitosamente. Pronto me pondré en contacto contigo.');
          // Reset form states
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setErrors({});
          setTimeout(() => setResponse(''), 5000);
        } else {
          const errorMessage = data.details || data.error || 'Error al enviar el correo. Intenta de nuevo.';
          console.error('❌ Error del servidor:', data);
          setResponse(`Error: ${errorMessage}`);
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        console.error('❌ Error de conexión:', errorMsg);
        setResponse(`Error al conectar: ${errorMsg}`);
      }
    }
  }

  const validateFields = (fields : {
    general : string,
    name : string,
    email : string,
    subject: string,
    message : string
  }) =>{ 
    if(!fields.name && !fields.email && !fields.subject && !fields.message){
      setErrors({general : "Por favor ingresa todos los campos"});
      return false;
    }
    if (fields.name.trim() === "" || fields.name.length < 3) {
      setErrors({name : "El nombre debe tener al menos 3 caracteres"});
      return false;
    }
    if (!fields.email || fields.email.trim() === "") {
      setErrors({email : "Por favor ingresa tu email"});
      return false;
    }
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))) {
      setErrors({email : "El formato del correo es incorrecto"});
      return false;
    }
    if (fields.subject.trim() === "" || fields.subject.length < 5) {
      setErrors({subject : "El asunto debe tener al menos 5 caracteres"});
      return false;
    }
    if (fields.message.trim() === "" || fields.message.length < 10) {
      setErrors({message : "El mensaje debe tener al menos 10 caracteres"});
      return false;
    }
    setErrors({});
    return true;
  }

  return (
    <section id = {id}>
        <h2 className="mt-10 mb-4 text-2xl font-semibold flex items-center gap-3 justify-center">
          <span className="text-lg text-pink-500 font-bold">05. ¿Quieres contactarme?</span> 
        </h2>
        <h1 className='text-center text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4'>
          Ponte en contacto
        </h1>
        <form className='mt-5 w-full md:w-3/4 lg:max-w-2xl mx-auto' onSubmit={handleSubmit} noValidate autoComplete='off'>
          <span className='text-center block text-gray-300 mb-6'>
            Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible por responderte.
          </span>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name" className='text-blue-300 font-medium'>Nombre</label>
              <input className='ml-2.5 bg-gray-900/50 border border-blue-500/30 rounded px-3 py-2 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors' id='name' name='name' type="text" placeholder='Tu nombre' value={name} onChange={handleNameChange} onBlur={handleNameBlur} autoComplete="off"/>
              {errors.name && <span className='text-pink-400 text-sm ml-2.5 font-bold'>{errors.name}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='text-blue-300 font-medium'>Correo</label>
              <input className='ml-2.5 bg-gray-900/50 border border-blue-500/30 rounded px-3 py-2 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors' id='email' name='email' type="email" placeholder='tu@email.com' value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} autoComplete="off"/>
              {errors.email && <span className='text-pink-400 text-sm ml-2.5 font-bold'>{errors.email}</span>}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="subject" className='block text-purple-300 font-medium'>Asunto</label>
            <input className='ml-2.5 bg-gray-900/50 border border-purple-500/30 rounded px-3 py-2 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors' id='subject' name='subject' type="text" placeholder='Asunto del mensaje' value={subject} onChange={handleSubjectChange} onBlur={handleSubjectBlur} autoComplete="off"/>
            {errors.subject && <span className='text-pink-400 text-sm ml-2.5 font-bold'>{errors.subject}</span>}
            <label htmlFor="message" className='block text-purple-300 font-medium'>Mensaje</label>
            <textarea className='block ml-2.5 bg-gray-900/50 border border-purple-500/30 rounded px-3 py-2 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors' name='message' id='message' rows={4} placeholder='Tu mensaje...' value={message} onChange={handleMessageChange} onBlur={handleMessageBlur} autoComplete="off"></textarea>
            {errors.message && <span className='text-pink-400 text-sm ml-2.5 font-bold'>{errors.message}</span>}
          </div>
          {errors.general && <div className="text-pink-400 text-sm ml-2.5 text-center mt-4 font-bold">{errors.general}</div>}
          <div className='flex justify-center'>
            <button type='submit' className="btn-animated mt-4 px-4 py-2 text-sm text-center cursor-pointer font-medium text-white bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-[length:200%_100%] rounded-lg shadow-md hover:shadow-[0_0_15px_3px_rgba(236,72,153,0.5)] transition-all duration-300 animate-gradient-x" title='Enviar Mensaje'>Enviar Mensaje</button> 
          </div>
          {response && <div className="text-cyan-400 text-sm ml-2.5 text-center mt-4 font-bold">{response}</div>}
        </form>
    </section>
  )
}