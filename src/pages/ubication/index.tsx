/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import PageLayout from '@/layouts/PageLayout';
import Link from 'next/link';
import React from 'react'
import { IoTrailSignOutline } from "react-icons/io5";
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

const UbicationPage = () => {
  return (
    <PageLayout>
            <div className="w-1/3 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24">
        <div id={styles.websiteDecoration} className="w-full h-full"></div>
        </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-color-2 text-3xl text-center mb-8'>Ubicación</h1>
        <p>No queremos que te pierdas el casamiento por nada del mundo. Acá vas a poder consultar siempre la dirección de la ceremonia y de la fiesta.</p>
        <p>¡No hay excusas para llegar tarde!</p>
        <div className='bg-color-3 w-4/5 h-[1px] mt-8'></div>
      </div>
      <div className='w-full flex flex-row justify-center items-center'>
        <div className='w-1/3 flex flex-col justify-center items-center text-center'>
          <h2 className='text-color-2 text-3xl'>CEREMONIA Y FIESTA</h2>
          <p>Concepcion del Uruguay, Entre Rios</p>
          <p>3261 Talita, Entre Rios</p>
        </div>
        <div className='w-1/3 text-6xl flex flex-col justify-center items-center text-center'>
          <IoTrailSignOutline />
        </div>
        <div className='w-1/3 flex flex-col justify-center items-center text-center'>
          <p>HORARIO: <strong>18hs</strong></p>
          <p>La ceremonia y la fiesta son <strong>en el mismo lugar</strong>, así que <strong>no hay forma de que te pierdas en el camino</strong>😂🤭</p>
          <Link className='text-color-2 text-3xl' href="https://www.google.com/maps/place/32%C2%B032'08.9%22S+58%C2%B018'14.6%22W/@-32.5358124,-58.3040619,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-32.5358124!4d-58.3040619?entry=ttu">UBICACIÓN</Link>
        </div>
      </div>
      <div className="w-1/3 h-32 md:mr-8 lg:mr-18 xl:mr-24">
        <div id={styles.websiteDecoration} className="w-full h-full transform scale-y-[-1] scale-x-[-1]"></div>
        </div>
    </PageLayout>
  )
}

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default UbicationPage
