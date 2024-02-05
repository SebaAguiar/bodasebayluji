'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import PageLayout from '@/layouts/PageLayout';
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
  return (
    <section className='w-full px-10 md:w-1/2 flex montserratFont text-lg flex-col justify-center items-center'>
      <div className='w-80 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24'>
        <div id={styles.websiteDecoration} className='w-full h-full'></div>
      </div>
      <div className='w-4/5 h-80 md:h-60 flex flex-col justify-between items-center text-center mb-8'>
        <div>
          <div className='h-20'></div>
          <h1
            className={`${palmatonFont.className} text-color-2 palmatonFont text-5xl md:text-6xl mb-4`}
          >
            ¡Importante!
          </h1>
          <p className='mt-2'>
            Te dejamos algunos datos{' '}
            <strong className='font-extrabold text-color-2'>
              fundamentales
            </strong>{' '}
            para el gran día:
          </p>
        </div>
        <div className='bg-color-3 w-80 md:w-130 h-[1px] mb-10'></div>
      </div>

      {/*
       **AVISOS
       */}

      <div className='w-full flex flex-col justify-center items-center text-center mt-8'>
        <h2
          className={`${palmatonFont.className} text-color-2 palmatonFont text-5xl mb-4`}
        >
          Vestimenta
        </h2>
        <div className='m-2'>
          <p>
            Sé libre de ponerte{' '}
            <strong className='font-extrabold text-color-2'>
              ¡LO QUE QUIERAS!
            </strong>{' '}
            No hay un código de vestimenta estricto para nuestra boda.
          </p>
          <p>
            Si te gusta un atuendo formal, vamos a estar felices de verte
            elegante, pero si estás más cómodo con algo estilo elegante-sport,
            ¡estaremos igualmente felices de verte!
          </p>
          <p>
            <strong className='font-extrabold text-color-2'>
              Lo más importante es compartir este momento juntos. ¡Esperamos
              verte el día de la boda con tu estilo único!
            </strong>
          </p>
        </div>
        <div className='bg-color-3 w-64 md:w-96 h-[1px] mt-8'></div>
      </div>
      <div className='w-full flex flex-col justify-center items-center text-center mt-8'>
        <h2
          className={`${palmatonFont.className} text-color-2 palmatonFont text-5xl mb-4`}
        >
          Bebida a la Canasta
        </h2>
        <div className='m-2'>
          <p>
            Te pedimos que{' '}
            <strong className='font-extrabold text-color-2'>
              traigas tu propia bebida
            </strong>{' '}
            (podés llevar conservadora; igualmente nosotros te vamos a ofrecer
            hielo)
          </p>
        </div>
        <div className='bg-color-3  w-80 md:w-110 h-[1px] mt-8'></div>
      </div>
      <div className='w-full flex flex-col justify-center items-center text-center mt-8'>
        <h2
          className={`${palmatonFont.className} text-color-2 palmatonFont text-5xl mb-4`}
        >
          Fecha y Hora
        </h2>
        <div className='m-2'>
          <p>
            No queremos que te pierdas nuestro gran día, así que te recordamos
            estos datos importantísimos:
          </p>
          <ul>
            <li>Fecha: 16 de marzo</li>
            <li>
              Hora: 18:00hs{' '}
              <strong className='font-extrabold text-color-2'>puntual</strong>
            </li>
            <li>Lugar: Capilla Nuestra Señora de Luján, Talita</li>
          </ul>
        </div>
        <div className='bg-color-3 w-60 md:w-96 h-[1px] mt-8'></div>
      </div>
      <div className='w-full flex flex-col justify-center items-center text-center mt-8'>
        <h2
          className={`${palmatonFont.className} text-color-2 palmatonFont text-5xl mb-4`}
        >
          Regalo
        </h2>
        <div className='m-2'>
          <p>
            <strong className='font-extrabold text-color-2'>
              ¡El mejor regalo que podés darnos es tu presencia!
            </strong>
          </p>
          <p>
            Pero si querés colaborar con nuestra luna de miel, podés hacerlo:
          </p>{' '}
          <p>
            <strong className='font-extrabold text-color-2'>ALIAS: </strong>
            alias
          </p>
          <p>O el día de la boda en la urna que estará presente.</p>
        </div>
      </div>
      <div className='w-80 h-32 md:h-32 mb-10 mt-10 md:mb-2 lg:mb-8 md:mr-8 lg:mr-18 xl:mr-24'>
        <div
          id={styles.websiteDecoration}
          className='w-full h-full transform scale-y-[-1] scale-x-[-1]'
        ></div>
      </div>
    </section>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ContactPage;
