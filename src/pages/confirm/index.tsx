/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import UIButton from '@/components/UI-Button';
import LandingLayout from '@/layouts/LandingLayout';
import { trpc } from '@/utils/trpc';
import { TypeUser } from '@/utils/types';
import React, { useState } from 'react'

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

type TypeConfirmationStateProps = {
  state: string
}

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const ConfirmationState: React.FC<TypeConfirmationStateProps> = ({ state }) => {
  if (state !== 'DENIED' && state !== 'CONFIRM') {
    return <p className='text-orange'>Pendiente</p>
  }
  if (state === 'DENIED') {
    return <p className='text-red'>No</p>
  }
  if (state === 'CONFIRM') {
    return <p className='text-green'>Si</p>
  }
}


const ConfirmPage = () => {
  const [selected, setSelected] = useState('CONFIRM')
  const [user, setUser] = useState<TypeUser[]>([])
  const [name, setName] = useState('')

  const handleInputChange = (e: any) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    }
  }

  const handleSelectChange = () => {}

  const handleSearchButton = async() => {
    const fetchedUser = await trpc.user.getUser.query({ name: name })
    setUser(fetchedUser)
  }

  const handleConfirmButton = async() => {
    await trpc.user.setConfirmation.mutate({ attendance: selected, id: user[0].id ?? '' })
  }

  return (
    <LandingLayout>
      <h1 className='text-color-2 text-3xl text-center mb-8'>Buscate poniendo tu nombre</h1>
      {
        user && user.map((u, index) => (
          <div key={index}>
            <div className='w-60 flex flex-row mb-6'>
              <p className='mr-4'>{u.name}</p>
              <ConfirmationState state={u.attendance ?? ''} />
            </div>
            <select value={selected} onChange={(e) => setSelected(e.target.value)}>
              <option value='CONFIRM' >Voy</option>
              <option value='DENIED'>No voy</option>
            </select>
            <UIButton buttonText='Confirmar' handleClick={handleConfirmButton} tailwindStyle='border rounded-md ml-4' />
          </div>
        ))
      }
      <div className='mt-6'>
        <input className='border rounded-md' name='name' onChange={handleInputChange} value={name} />
        <UIButton buttonText='Buscar' handleClick={handleSearchButton} tailwindStyle='border rounded-md ml-4' />
      </div>
    </LandingLayout>
  )
}

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ConfirmPage
