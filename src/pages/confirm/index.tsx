/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import UIButton from '@/components/UI-Button';
import PageLayout from '@/layouts/PageLayout';
import { trpc } from '@/utils/trpc';
import { TypeUser } from '@/utils/types';
import React, { useState } from 'react';
import styles from '@/styles/landingStyles.module.css';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

type TypeConfirmationStateProps = {
  state: string;
};

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const verifyAttendance = (attendance: string | undefined) => {
  if (!attendance) {
    return null;
  }
  if (attendance !== 'DENIED' && attendance !== 'CONFIRM') {
    return {
      attendance: 'Pendiente',
      style: 'text-orange',
    };
  }
  if (attendance === 'DENIED') {
    return {
      attendance: 'No',
      style: 'text-red',
    };
  }
  if (attendance === 'CONFIRM') {
    return {
      attendance: 'Si',
      style: 'text-green',
    };
  }
};

const ConfirmationState: React.FC<TypeConfirmationStateProps> = ({ state }) => {
  if (state !== 'DENIED' && state !== 'CONFIRM') {
    return <p className='text-orange'>Pendiente</p>;
  }
  if (state === 'DENIED') {
    return <p className='text-red'>No</p>;
  }
  if (state === 'CONFIRM') {
    return <p className='text-green'>Si</p>;
  }
};

const ConfirmPage = () => {
  const [selected, setSelected] = useState('CONFIRM');
  const [user, setUser] = useState<TypeUser[]>([]);
  const [name, setName] = useState('');

  const handleInputChange = (e: any) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
  };

  const handleSelectChange = () => {};

  const handleSearchButton = async () => {
    const fetchedUser = await trpc.user.getUser.query({ name: name });
    setUser(fetchedUser ?? []);
  };

  const handleConfirmButton = async () => {
    await trpc.user.setConfirmation.mutate({
      attendance: selected,
      id: user[0].id ?? '',
    });
  };

  return (
    <PageLayout>
      <div className='w-1/3 h-32 mt-10 md:mb-2 lg:mb-10 md:ml-8 lg:ml-18 xl:ml-24 lg:mt-16'>
        <div id={styles.websiteDecoration} className='w-full h-full'></div>
      </div>
      <h1 className='text-color-2 text-6xl text-center mb-2 palmatonFont'>
        ¿Nos acompañas o te lo perdés?
      </h1>
      <h2 className='montserratFont text-xl mb-8'>
        Buscate poniendo tu nombre y apellido
      </h2>
      {user &&
        user.map((u, index) => (
          <div key={index}>
            <div className='w-60 montserratFont flex flex-row mb-6'>
              {/* <p className='mr-4'>{u.name}</p>
              <ConfirmationState state={u.attendance ?? ''} /> */}
              <table>
                <thead>
                  <tr>Nombre y apellido</tr>
                  <tr>confirmacion</tr>
                </thead>
                <tbody>
                  <tr>{u.name}</tr>
                  <tr className={`${verifyAttendance(u.attendance)?.style}`}>
                    {verifyAttendance(u.attendance)?.attendance}
                  </tr>
                </tbody>
              </table>
            </div>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className='montserratFont'
            >
              <option value='CONFIRM'>Voy</option>
              <option value='DENIED'>No voy</option>
            </select>
            <UIButton
              buttonText='Confirmar'
              handleClick={handleConfirmButton}
            />
          </div>
        ))}
      <div className='mt-6'>
        <input
          className='bg-dark-black border-2 border-dark-white montserratFont rounded-md focus:border-dark-white mt-2 mb-2 h-9 p-2'
          name='name'
          placeholder='Nombre y apellido'
          onChange={handleInputChange}
          value={name}
        />
        <UIButton buttonText='Buscar' handleClick={handleSearchButton} />
      </div>
      <div className='w-1/3 h-32 mt-10 md:mb-2 lg:mb-14 md:mr-8 lg:mr-18 xl:mr-24 lg:mt-16'>
        <div
          id={styles.websiteDecoration}
          className='w-full h-full transform scale-y-[-1] scale-x-[-1]'
        ></div>
      </div>
    </PageLayout>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ConfirmPage;
