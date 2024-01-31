'use client'
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import PageLayout from '@/layouts/PageLayout';
import React, { useState } from 'react';
import styles from '@/styles/landingStyles.module.css'

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const ContactPage = () => {

  return (
    <PageLayout>
      <section className='w-full flex flex-col justify-center items-center'>
      <div className="w-1/3 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24">
        <div id={styles.websiteDecoration} className="w-full h-full"></div>
        </div>
        <div className='w-4/5 h-60 flex flex-col justify-between items-center text-center'>
          <div>
            <div className='h-20'></div>
            <h1 className='text-color-2 text-3xl'>¡IMPORTANTE!</h1>
            <p className='text-lg mt-2'>Te dejamos algunos datos fundamentales para el gran día:</p>
          </div>
          <div className='bg-color-3 w-2/3 h-[1px]'></div>
        </div>
        <div className='flex flex-col justify-center items-center text-center mt-8'>
          <h2 className='text-color-2 text-2xl'>VESTIMENTA</h2>
          <div className='text-lg m-2'>
            <p>Sé libre de ponerte <strong>¡LO QUE QUIERAS!</strong> No hay un código de vestimenta estricto para nuestra boda.</p> 
            <p>Si te gusta un atuendo formal, vamos a estar felices de verte elegante, pero si estás más cómodo con algo estilo elegante-sport, ¡estaremos igualmente felices de verte!</p> 
            <p><strong>Lo más importante es compartir este momento juntos. ¡Esperamos verte el día de la boda con tu estilo único!</strong></p>
          </div>
        <div className='bg-color-3 w-4/5 h-[1px] mt-8'></div>
      </div>
        <div className='flex flex-col justify-center items-center text-center mt-8'>
          <h2 className='text-color-2 text-2xl'>BEBIDA A LA CANASTA</h2>
          <div className='text-lg m-2'>
            <p>Te pedimos que <strong>traigas tu propia bebida</strong> (podés llevar conservadora; igualmente nosotros te vamos a ofrecer hielo)</p>
          </div>
        <div className='bg-color-3 w-4/5 h-[1px] mt-8'></div>
      </div>
        <div className='flex flex-col justify-center items-center text-center mt-8'>
          <h2 className='text-color-2 text-2xl'>FECHA Y HORA</h2>
          <div className='text-lg m-2'>
            <p>No queremos que te pierdas nuestro gran día, así que te recordamos estos datos importantísimos:</p> 
            <ul>
              <li>Fecha: 16 de marzo</li> 
              <li>Hora: 18:00hs <strong>puntual</strong></li> 
              <li>Lugar: Capilla Nuestra Señora de Luján, Talita</li>
            </ul>
          </div>
        <div className='bg-color-3 w-4/5 h-[1px] mt-8'></div>
      </div>
        <div className='flex flex-col justify-center items-center text-center mt-8'>
          <h2 className='text-color-2 text-2xl'>REGALO</h2>
          <div className='text-lg m-2'>
            <p><strong>¡El mejor regalo que podés darnos es tu presencia!</strong></p> 
            <p>Pero si querés colaborar con nuestra luna de miel, podés hacerlo:</p> <p><strong>ALIAS:</strong>alias</p>
            <p>O el día de la boda en la urna que estará presente.</p>
          </div>
      </div>
      <div className="w-1/3 h-32 mt-10 md:mb-2 lg:mb-8 md:mr-8 lg:mr-18 xl:mr-24">
        <div id={styles.websiteDecoration} className="w-full h-full transform scale-y-[-1] scale-x-[-1]"></div>
        </div>
      </section>
</PageLayout>
  )
}

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ContactPage