/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import Image from "next/image";
import { Inter } from "next/font/google";
import PageLayout from '@/layouts/PageLayout';
import Link from 'next/link';
import styles from '@/styles/landingStyles.module.css'
import UIFooter from '@/components/UI-Footer';
import { notices } from '@/other/notices';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const inter = Inter({ subsets: ["latin"] });

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const footerLinks = [
  {
    href: '/contact',
    text: 'Contactanos'
  },
  {
    href: '/confirm',
    text: 'Confirmar'
  },
  {
    href: '/ubication',
    text: 'Ubicacion'
  }
]

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default function Home() {
  return (
    <PageLayout>
      <header id={styles.landingHeader} className='w-full h-152 flex justify-center items-center bg-no-repeat'>
        {/* <Image src={headerImage} alt="alt" width={0} height={0} className='' /> */}
        {/* <h1 className='text-3xl'>SEBA Y LUJI</h1> */}
      </header>
      <section className='w-full flex flex-col justify-center items-center'>
        <div className="w-1/3 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24">
        <div id={styles.websiteDecoration} className="w-full h-full"></div>
        </div>
        <div className='w-2/3 h-60 flex flex-col justify-center items-center mt-16 mb-16'>
          <h3 className='text-3xl customFont mb-20'>¡Nos casamos!</h3>
          <h1 className='text-6xl customFont font-bold'>16 MARZO 2024</h1>
          <h3 className='text-3xl customFont mt-20'>Concepción del Uruguay, Entre Rios</h3>
        </div>
        <div className="w-1/3 h-32 mt-10 md:mb-2 lg:mb-8 md:mr-8 lg:mr-18 xl:mr-24">
        <div id={styles.websiteDecoration} className="w-full h-full transform scale-y-[-1] scale-x-[-1]"></div>
        </div>
        
        <div className='w-full flex flex-col justify-center items-center text-center'>
          <h2 className='text-color-2 text-3xl mt-24 mb-8'>¡Bienvenid@s a nuestra boda!</h2>
          <div className='text-lg mx-36 px-48'>
            <p className="my-5">¡Nos casamos y estamos súper felices!</p>
            <p className="my-5">Es tanta la alegría que queremos compartir con vos todo nuestro amor. Por eso estamos preparando un momento hermoso para que lo disfrutes junto a nosotros.</p>
            <p className="my-5">Mientras llega el gran día creamos esta web con varias secciones para que estés al día de todo y para compartir nuestra historia de amor.</p>
            <p className="my-5"><strong>¡Importante!</strong> En la sección <strong>asistencia</strong> podés confirmar si vas al casamiento o no. Porfa, confirmanos lo antes posible, así organizarlo nos será mucho más fácil.</p>
          </div>
        </div>
      </section>
      <section className='w-full flex flex-col justify-center items-center'>
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
      </section>
      <footer id={styles.landingFooter} className='w-full h-96 flex justify-center items-center bg-no-repeat'>
        {/* <Image src={headerImage} alt="alt" width={0} height={0} className='' /> */}
        {/* <h1 className='text-3xl'>SEBA Y LUJI</h1> */}
      </footer>
      <UIFooter title='S&L' links={footerLinks} />
    </PageLayout>
  );
}
