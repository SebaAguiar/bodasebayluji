/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import Link from 'next/link';
import React from 'react'

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

type TypeFooterLink = {
  href: string
  text: string
}

type TypeFooterProps = {
  links?: TypeFooterLink[]
  title?: string
  image?: string
}

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const UIFooter: React.FC<TypeFooterProps> = () => {
  return (
    <>
      <footer className='w-full h-30 flex flex-col justify-center items-center bg-background2 '>
        <h5 className='text-2xl m-8'>Seba & Luji</h5>
      </footer>
    </>
  )
}

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default UIFooter
