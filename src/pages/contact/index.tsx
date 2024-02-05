'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import PageLayout from '@/layouts/PageLayout';
import { trpc } from '@/utils/trpc';
import React, { useState } from 'react';
import styles from '@/styles/landingStyles.module.css';
import localFont from 'next/font/local';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const palmatonFont = localFont({
  src: '../../../public/Palmaton.ttf',
});

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const ContactPage = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e: any) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'fullname') {
      setFullname(e.target.value);
    }
    if (e.target.name === 'subject') {
      setSubject(e.target.value);
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = async () => {
    const messageTosend = {
      email,
      subject,
      fullname,
      message,
    };
    if (!messageTosend.email) {
    }
    await trpc.contact.saveClientMessage.mutate(messageTosend);
  };

  return (
    <>
      <div className='w-80 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24'>
        <div id={styles.websiteDecoration} className='w-full h-full'></div>
      </div>
      <div className='w-full px-10 md:w-1/2 montserratFont text-lg flex flex-col justify-center items-center mb-6'>
        <h1
          className={`${palmatonFont.className} text-5xl md:text-6xl text-color-2 font-regula mb-5`}
        >
          ¿Alguna duda?
        </h1>
        <p className='text-center'>
          Si tenés cualquier pregunta para nosotros o nos querés comentar algo,
          ¡mandanos un mensajito!
        </p>
        <div className='bg-color-3 w-80 md:w-96 h-[1px] mt-8'></div>
      </div>
      <form
        className='w-full md:w-7/12 text-dark-white montserratFont font-light flex flex-col justify-center items-center'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col-reverse w-2/3'>
          <input
            className='bg-dark-black border-2 border-dark-white rounded-md focus:border-dark-white mt-2 mb-2 h-9 p-2'
            name='fullname'
            placeholder='Tu nombre'
            type='text'
            onChange={handleInputChange}
            value={fullname}
            required
          />
          <label htmlFor='fullname'>Nombre:</label>
        </div>
        <div className='flex flex-col-reverse w-2/3'>
          <input
            className='bg-dark-black border-2 border-dark-white rounded-md focus:border-dark-white mt-2 mb-2 h-9 p-2'
            name='email'
            type='email'
            placeholder='tuemail@email.com'
            onChange={handleInputChange}
            value={email}
            required
          />
          <label htmlFor='email'>Mail:</label>
        </div>
        <div className='flex flex-col-reverse w-2/3'>
          <input
            className='bg-dark-black border-2 border-dark-white rounded-md focus:border-dark-white mt-2 mb-2 h-9 p-2'
            name='subject'
            type='text'
            placeholder='Asunto'
            onChange={handleInputChange}
            value={subject}
            required
          />
          <label htmlFor='subject'>Asunto:</label>
        </div>
        <div className='flex flex-col-reverse w-2/3'>
          <textarea
            className='bg-dark-black min-h-60 border-2 border-dark-white rounded-md focus:border-dark-white mt-2 mb-2 p-2'
            style={{ resize: 'vertical', maxHeight: '150px' }}
            name='message'
            placeholder='Tu mensaje'
            onChange={handleInputChange}
            value={message}
            required
          />
          <label htmlFor='message'>Mensaje:</label>
        </div>
        <button
          className='h-10 w-32 rounded-md bg-dark-black border-2 border-dark-white font-semibold text-dark-white mt-4 duration-300 hover:bg-grey'
          type='submit'
          onClick={() => alert('Gracias por tu mensaje')}
        >
          Enviar
        </button>
      </form>
      <div className='w-80 h-32 md:h-32 mb-10 mt-10 md:mb-2 lg:mb-8 md:mr-8 lg:mr-18 xl:mr-24'>
        <div
          id={styles.websiteDecoration}
          className='w-full h-full transform scale-y-[-1] scale-x-[-1]'
        ></div>
      </div>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ContactPage;
