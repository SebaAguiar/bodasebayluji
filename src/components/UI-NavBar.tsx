/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { toggleSide } from '@/redux/features/slices/sideSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

type TypeNavBarLink = {
  href: string;
  text: string;
};

type TypeNavBarProps = {
  links: TypeNavBarLink[];
  title?: string;
  image?: string;
};

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const UINavBar: React.FC<TypeNavBarProps> = ({ title, image, links }) => {
  const router = useRouter();
  const active = useAppSelector((state) => state.side.active);
  const dispatch = useAppDispatch();

  return (
    <nav
      className={`${active ? '-translate-x-0' : '-translate-x-full'} w-2/3 fixed transition-all duration-500 ease-in-out h-full md:w-full md:translate-x-0 md:h-30 flex flex-col md:justify-center md:items-center bg-background2 z-10 md:sticky md:top-0`}
    >
      <div className='w-full h-20 flex items-center justify-end md:justify-center border-b border-b-color-1 md:border-b-0'>
        <h5 className='text-4xl w-max h-max font-medium palmatonFont m-5'>
          {title}
        </h5>
      </div>
      <div className='w-full flex flex-col md:flex-row text-left md:items-center justify-center md:sticky'>
        {links.map((link, index) => (
          <Link
            className={`ml-5 py-3 text-sm md:m-0 w-2/3 montserratFont md:text-center font-light hover:underline underline-offset-8 ${router.pathname === link.href ? 'underline' : ''}`}
            key={index}
            href={link.href}
            onClick={() => active && dispatch(toggleSide())}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default UINavBar;
