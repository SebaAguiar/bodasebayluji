/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import PageLayout from '@/layouts/PageLayout';
import Link from 'next/link';
import React from 'react';
import { IoTrailSignOutline } from 'react-icons/io5';
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

const UbicationPage = () => {
  return (
    <>
      <div className='w-80 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24'>
        <div id={styles.websiteDecoration} className='w-full h-full'></div>
      </div>
      <div className='w-full text-lg text-center flex montserratFont px-10 flex-col justify-center items-center'>
        <h1
          className={`${palmatonFont.className} text-color-2 text-5xl md:text-6xl text-center mb-8`}
        >
          Ubicación y hora
        </h1>
        <p>
          La ceremonia y la fiesta son <strong>en el mismo lugar</strong>, así
          que <strong>no hay forma de que te pierdas en el camino</strong>😂🤭
        </p>
        <h2 className='montserratFont mt-1 text-lg text-color-2'>
          ¡No hay excusas para llegar tarde!
        </h2>
      </div>
      <div className='w-full flex flex-col text-center text-lg mt-4 justify-center items-center'>
        <ul className='flex flex-col  montserratFont px-8 items-center justify-center list-disc m-4'>
          <li>
            Ceremonia: 18:00hs <strong>PUNTUAL</strong>
          </li>
          <li>Fiesta: 19:30hs</li>
          <li>Lugar: Capilla Ntra. Señora de Luján - Talita</li>
        </ul>
        <Link
          className='text-color-2 montserratFont text-xl mb-6'
          href="https://www.google.com/maps/place/32%C2%B032'08.9%22S+58%C2%B018'14.6%22W/@-32.5358124,-58.3040619,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-32.5358124!4d-58.3040619?entry=ttu"
        >
          Ver Ubicacion
        </Link>
      </div>
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

export default UbicationPage;
