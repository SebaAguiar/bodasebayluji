/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

type TypeFooterLink = {
  href: string;
  text: string;
};

type TypeFooterProps = {
  links?: TypeFooterLink[];
  title?: string;
  image?: string;
};

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const sebaMedia = [
  {
    name: 'whatsapp',
    icon: <FaWhatsapp />,
    href: `https://api.whatsapp.com/send?phone=+543442536874&text=Hola,%20seba%20quiero%20preguntarte...`,
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/sebaaguiar._/',
  },
];

const lujiMedia = [
  {
    name: 'whatsapp',
    icon: <FaWhatsapp />,
    href: `https://api.whatsapp.com/send?phone=+543442673939&text=Hola,%20luji20quiero%20preguntarte...`,
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/lujiamar/',
  },
];

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const UIFooter: React.FC<TypeFooterProps> = () => {
  return (
    <>
      <footer className='w-full h-30 flex flex-row justify-center items-center bg-background2 '>
        <div className='h-10 w-20 flex flex-row text-[#000] text-2xl justify-center items-center'>
          {sebaMedia.map((m, index) => (
            <Link className='m-1' key={index} href={m.href}>
              {m.icon}
            </Link>
          ))}
        </div>
        <h5 className='text-4xl font-medium palmatonFont m-8'>Seba & Luji</h5>
        <div className='h-10 w-20 flex flex-row text-[#000] text-2xl justify-center items-center'>
          {lujiMedia.map((m, index) => (
            <Link className='m-1' key={index} href={m.href}>
              {m.icon}
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default UIFooter;
