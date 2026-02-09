import { useState, type FormEvent } from 'react';
import type { SectionProps } from '../types/SectionProps';

export const ContactForm = ({id} : SectionProps) => {
  const [errors, setErrors] = useState<{[key:string]:string}>({});
  const [response, setResponse] = useState<String>('');
  const getFields = (formElement: HTMLFormElement) => {
    const form = new FormData(formElement)
    return {
      name    : form.get("name") as string,
      email   : form.get("email") as string,
      subject : form.get("subject") as string,
      message : form.get("message") as string
    }
  }
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = getFields(event.currentTarget);
    const isValid = validateFields(fields);
    
    if (isValid) {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: fields.name,
            email: fields.email,
            subject: fields.subject,
            message: fields.message,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setResponse('Correo enviado exitosamente. Pronto me pondré en contacto contigo.');
          event.currentTarget.reset();
          setErrors({});
          setTimeout(() => setResponse(''), 5000);
        } else {
          setResponse('Error al enviar el correo. Intenta de nuevo.');
        }
      } catch (error) {
        console.error('Error:', error);
        setResponse('Error al conectar. Intenta de nuevo.');
      }
    }
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fields = getFields(event.currentTarget.closest("form") as HTMLFormElement);
    validateFields(fields);
  }
  
  const validateFields = (fields : {
    name : string,
    email : string,
    subject: string,
    message : string
  }) =>{ 
    if (!fields.name || fields.name.trim() === "") {
      setErrors({name : "Por favor ingresa tu nombre"});
      return false;
    }
    if (fields.name.length < 3) {
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
    if (!fields.subject || fields.subject.trim() === "") {
      setErrors({subject : "Por favor ingresa el asunto"});
      return false;
    }
    if (fields.subject.length < 5) {
      setErrors({subject : "El asunto debe tener al menos 5 caracteres"});
      return false;
    }
    if (!fields.message || fields.message.trim() === "") {
      setErrors({message : "Por favor ingresa el mensaje"});
      return false;
    }
    if (fields.message.length < 10) {
      setErrors({message : "El mensaje debe tener al menos 10 caracteres"});
      return false;
    }

    setErrors({});
    return true
  }

  return (
    <section id = {id}>
        <h2 className="mt-10 mb-4 text-2xl font-semibold flex items-center gap-3 justify-center">
          <span className="text-lg text-pink-500 font-bold">05. ¿Quieres contactarme?</span> 
        </h2>
        <h1 className='text-center text-3xl font-bold'>
          Ponte en contacto
        </h1>
        <form className='mt-5 w-full md:w-3/4 lg:max-w-2xl mx-auto' onSubmit={handleSubmit} noValidate>
          <span className='text-center'>
            Actualmente estoy buscando nuevas oportunidades. Ya sea que tengas una pregunta o simplemente quieras saludar, haré todo lo posible por responderte.
          </span>
          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name">Nombre</label>
              <input className='ml-2.5' id='name' name='name' type="text" placeholder='Tu nombre' onChange={handleOnChange}/>
              {errors.name && <span className='text-red-500 text-sm ml-2.5 font-bold'>{errors.name}</span>}
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="email">Correo</label>
              <input className='ml-2.5' id='email' name='email' type="email" placeholder='tu@email.com' onChange={handleOnChange}/>
              {errors.email && <span className='text-red-500 text-sm ml-2.5 font-bold'>{errors.email}</span>}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="subject" className='block'>Asunto</label>
            <input className='ml-2.5' id='subject' name='subject' type="text" placeholder='Asunto del mensaje' onChange={handleOnChange}/>
            {errors.subject && <span className='text-red-500 text-sm ml-2.5 font-bold'>{errors.subject}</span>}
            <label htmlFor="message" className='block'>Mensaje</label>
            <textarea className='block ml-2.5' name='message' id='message' rows={4} placeholder='Tu mensaje...' onChange={handleOnChange}></textarea>
            {errors.message && <span className='text-red-500 text-sm ml-2.5 font-bold'>{errors.message}</span>}
          </div>
          <div className='flex justify-center'>
            <button type='submit' className="btn btn-primary btn-glow-hover mt-4 text-center w-1/3 cursor-pointer" title='Enviar Mensaje'>Enviar Mensaje</button> 
          </div>
          {response && <div className="text-green-500 text-sm ml-2.5 text-center mt-4 font-bold">{response}</div>}
        </form>
    </section>
  )
}