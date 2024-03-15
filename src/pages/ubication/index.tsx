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
      {/* <div className='w-full text-lg text-center flex montserratFont px-10 flex-col justify-center items-center'>
        <h1
          className={`${palmatonFont.className} text-color-2 text-5xl md:text-6xl text-center mb-8`}
        >
          Ubicación y hora
        </h1>
      </div> */}
      <div className='w-full h-max flex flex-col justify-between items-center'>
        <div className='w-full flex flex-col text-center text-lg mt-4 justify-center items-center'>
          <h1
            className={`${palmatonFont.className} text-color-2 text-5xl md:text-6xl text-center mb-8`}
          >
            Ceremonia
          </h1>
          <ul className='flex flex-col  montserratFont px-8 items-center justify-center list-disc m-4'>
            <li>
              Hora: 18:00hs <strong>PUNTUAL</strong>
            </li>
            <li>Ubicacion: Parroquia María Auxiliadora, Sarmiento 1775</li>
          </ul>
          <Link
            className='text-color-2 montserratFont text-xl mb-6'
            href='https://www.google.com/maps/place/Parroquia+Mar%C3%ADa+Auxiliadora/@-32.4906594,-58.2509655,20.5z/data=!4m15!1m8!3m7!1s0x95afdbb3e89bd273:0xbf6918c6f9d4b159!2sSarmiento+1775,+Concepci%C3%B3n+del+Uruguay,+Entre+R%C3%ADos!3b1!8m2!3d-32.4906067!4d-58.2508673!16s%2Fg%2F11k0spf2hd!3m5!1s0x95afdb0044b7bffb:0x81066630f8162594!8m2!3d-32.490588!4d-58.2507736!16s%2Fg%2F11c1rv4smm?entry=ttu'
          >
            Ver Ubicacion
          </Link>
        </div>
        <div className='bg-color-3  w-80 md:w-110 h-[1px] my-8'></div>
        <div className='w-full flex flex-col text-center text-lg mt-4 justify-center items-center'>
          <h1
            className={`${palmatonFont.className} text-color-2 text-5xl md:text-6xl text-center mb-8`}
          >
            Fiesta
          </h1>
          <ul className='flex flex-col  montserratFont px-8 items-center justify-center list-disc m-4'>
            <li>Hora: 19:30hs.</li>
            <li>Ubicacion: 21 de noviembre 460</li>
          </ul>
          <Link
            className='text-color-2 montserratFont text-xl mb-6'
            href='https://www.google.com/maps/place/21+de+Noviembre+460,+Concepci%C3%B3n+del+Uruguay,+Entre+R%C3%ADos/@-32.4917924,-58.234249,21z/data=!4m5!3m4!1s0x95afdb08066b9ea7:0x91f92ddf00bd672b!8m2!3d-32.4917617!4d-58.2341754?entry=ttu'
          >
            Ver Ubicacion
          </Link>
        </div>
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
