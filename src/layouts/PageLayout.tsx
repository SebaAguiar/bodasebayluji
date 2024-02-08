/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import React from 'react';
import NavBar from '../components/UI-NavBar';
import UIFooter from '@/components/UI-Footer';
import NavButton from '@/components/NavButton';
import localFont from 'next/font/local';
import PagesMain from '@/components/transitions/PagesMain';
import Head from 'next/head';
import { useRouter } from 'next/router';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type LandingLayoutProps = {
  children: React.ReactNode;
};

const navBarLinks = [
  {
    href: '/',
    text: '¡BIENVENIDOS!',
  },
  {
    href: '/important',
    text: '¡IMPORTANTE!',
  },
  {
    href: '/confirm',
    text: 'CONFIRMAR ASISTENCIA',
  },
  {
    href: '/ubication',
    text: 'UBICACIÓN Y HORA',
  },
  {
    href: '/contact',
    text: 'CONTACTANOS',
  },
];

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const palmatonFont = localFont({
  src: '../../public/Palmaton.ttf',
});

const cases = [
  {
    href: '/',
    title: 'Bienvenidos',
  },
  {
    href: '/important',
    title: 'Importante',
  },
  {
    href: '/confirm',
    title: 'Confirmar Asistencia',
  },
  {
    href: '/contact',
    title: 'Contactanos',
  },
  {
    href: '/ubication',
    title: 'Ubicacion y hora',
  },
];

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ******************************************************************************** ********************************************************************/
const PageLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {cases.map((c, index) => {
            if (router.pathname === c.href) {
              return `S&L - ${c.title}`;
            }
          })}
        </title>
      </Head>
      <div
        className={`${palmatonFont.className} w-screen h-screen flex flex-col`}
      >
        <NavButton />
        <NavBar title='S&L' links={navBarLinks} />
        <PagesMain
          style={`${palmatonFont.className} w-full min-h-screen flex flex-col justify-center items-center`}
        >
          {children}
        </PagesMain>
        <UIFooter />
      </div>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default PageLayout;
