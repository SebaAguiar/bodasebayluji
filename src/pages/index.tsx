/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import Image from "next/image";
import { Inter } from "next/font/google";
import PageLayout from '@/layouts/PageLayout';
import Link from 'next/link';
import styles from '@/styles/landingStyles.module.css'
import UIFooter from '@/components/UI-Footer';
import UINotices from '@/components/UI-Notices';
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
      <header id={styles.landingHeader} className='w-full h-60 flex justify-center items-center bg-no-repeat'>
        {/* <Image src={headerImage} alt="alt" width={0} height={0} className='' /> */}
        {/* <h1 className='text-3xl'>SEBA Y LUJI</h1> */}
      </header>
      <section className='w-full flex flex-col justify-center items-center'>
        <div className='w-2/3 h-60 flex flex-col justify-center items-center'>
          <h3>¡Nos casamos!</h3>
          <h2>16 MARZO 2024</h2>
          <h3 className='text-center'>Concepción del Uruguay, Entre Rios</h3>
        </div>
        <div className='w-full flex flex-col justify-center items-center text-center'>
          <h2 className='text-color-2 text-3xl'>¡Bienvenid@s a nuestra boda!</h2>
          <div className='text-lg m-2'>
            <p>Nos casamos y estamos súper felices!</p>
            <p>Es tanta la alegría que queremos compartir con vos todo nuestro amor. Por eso estamos preparando un momento hermoso para que lo disfrutes junto a nosotros.</p>
            <p>Mientras llega el gran día creamos esta web con varias secciones para que estés al día de todo y para compartir nuestra historia de amor.</p>
            <p><strong>¡Una cosa importante!</strong> en la sección <strong>asistencia</strong> podés confirmar si vas al casamiento o no. Porfa, confirmanos lo antes posible, así organizarlo nos será mucho más fácil.</p>
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
        <UINotices notices={notices} />
      </section>
      <UIFooter title='S&L' links={footerLinks} />
    </PageLayout>
  );
}
