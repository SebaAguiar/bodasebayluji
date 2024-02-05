/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import React from 'react';
import NavBar from '../components/UI-NavBar';
import UIFooter from '@/components/UI-Footer';
import NavButton from '@/components/NavButton';
import localFont from 'next/font/local';
import PagesMain from '@/components/transitions/PagesMain';

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
    href: '/contact',
    text: 'CONTACTANOS',
  },
  {
    href: '/ubication',
    text: 'UBICACIÓN',
  },
];

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const palmatonFont = localFont({
  src: '../../public/Palmaton.ttf',
});

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ******************************************************************************** ********************************************************************/
const PageLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
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
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default PageLayout;
