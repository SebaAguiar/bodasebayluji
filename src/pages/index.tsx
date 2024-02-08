/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import Image from 'next/image';
import PageLayout from '@/layouts/PageLayout';
import Link from 'next/link';
import styles from '@/styles/landingStyles.module.css';
import { notices } from '@/other/notices';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default function Home() {
  return (
    <>
      <header
        id={styles.landingHeader}
        className='w-full h-152 flex justify-center items-center bg-no-repeat'
      >
        {/* <Image src={headerImage} alt="alt" width={0} height={0} className='' /> */}
        <h1 className='text-5xl md:text-6xl palmatonFont text-[#fff]'>
          Seba & Luji
        </h1>
      </header>
      <section className='w-full flex flex-col text-center px-4 justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='w-80 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24'>
            <div id={styles.websiteDecoration} className='w-full h-full'></div>
          </div>
          <div className='w-full h-max md:w-2/3 md:h-60 palmatonFont flex flex-col justify-center items-center mt-16 mb-16'>
            <h3 className='text-4xl md:text-6xl mb-20'>¡Nos casamos!</h3>
            <h1 className='text-3xl md:text-5xl montserratFont font-bold'>
              16 MARZO 2024
            </h1>
            <h3 className='text-4xl md:text-5xl mt-20'>
              Concepción del Uruguay, Entre Ríos
            </h3>
          </div>
          <div className='w-80 h-32 mt-5 md:mb-2 lg:mb-8 md:mr-8 lg:mr-18 xl:mr-24'>
            <div
              id={styles.websiteDecoration}
              className='w-full h-full transform scale-y-[-1] scale-x-[-1]'
            ></div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center text-center mb-28'>
          <h2 className='text-color-2 text-5xl md:text-6xl font-medium mt-24 mb-8 palmatonFont'>
            ¡Bienvenid@s a nuestra boda!
          </h2>
          <div className='text-xl montserratFont w-full px-10 md:w-2/3'>
            {/* <p className='my-5'>¡Nos casamos y estamos súper felices!</p> */}
            <p className='my-5'>
              Es tanta la alegría que queremos compartir con vos todo nuestro
              amor. Por eso estamos preparando un momento hermoso para que lo
              disfrutes junto a nosotros.
            </p>
            {/* <p className='my-5'>
              Mientras llega el gran día creamos esta web con varias secciones
              para que estés al día de todo y para compartir nuestra historia de
              amor.
            </p>
            <p className='my-5'>
              <strong className='font-extrabold text-color-2'>
                ¡Importante!
              </strong>{' '}
              En la sección{' '}
              <strong className='font-extrabold text-color-2'>
                asistencia
              </strong>{' '}
              podés confirmar si vas al casamiento o no. <br />
              Porfa, confirmanos lo antes posible, así organizarlo nos será
              mucho más fácil.
            </p> */}
          </div>
        </div>
      </section>
      <footer
        id={styles.landingFooter}
        className='w-full h-72 lg:h-100 flex justify-center items-center bg-no-repeat'
      >
        {/* <Image src={headerImage} alt="alt" width={0} height={0} className='' /> */}
        {/* <h1 className='text-3xl'>SEBA Y LUJI</h1> */}
      </footer>
    </>
  );
}
