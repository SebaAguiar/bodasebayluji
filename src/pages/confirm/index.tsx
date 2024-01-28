/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

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


/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

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
    await trpc.user.setConfirmation.mutate({attendance: selected, id: user[0].id ?? ''  })
  }

  return (
    <LandingLayout>
      <h1 className='text-color-2 text-3xl text-center'>Buscate poniendo tu nombre</h1>
      {
        user && user.map((u, index) => (
          <div key={index}>
            <p>{u.name}</p>
            <select value={selected} onChange={(e) => setSelected(e.target.value)}>
              <option value='CONFIRM'>Voy</option>
              <option value='DENIED'>No voy</option>
            </select>
            <button onClick={handleConfirmButton}>Confirmar</button>
          </div>
        ))
      }
      <div>
        <input className='border rounded-md' name='name' onChange={handleInputChange} value={name} />
        <button onClick={handleSearchButton} type='button' className='border rounded-md ml-4'>Buscar</button>
      </div>
    </LandingLayout>
  )
}

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ConfirmPage
