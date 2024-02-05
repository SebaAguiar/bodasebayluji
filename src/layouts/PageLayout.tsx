/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import React from 'react';
import NavBar from '../components/UI-NavBar';
import UIFooter from '@/components/UI-Footer';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleSide } from '@/redux/features/slices/sideSlice';
import { MdMenu, MdOutlineClose } from 'react-icons/md';
import NavButton from '@/components/NavButton';

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

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ******************************************************************************** ********************************************************************/
const PageLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <NavButton />
      <NavBar title='S&L' links={navBarLinks} />
      <main className='w-full min-h-screen flex flex-col justify-center items-center'>
        {children}
      </main>
      <UIFooter />
    </div>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default PageLayout;
