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

type TypeSelectedState = {
  [key: string]: 'CONFIRM' | 'DENIED';
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
      attendance: 'No dije nada',
      style: 'text-orange',
    };
  }
  if (attendance === 'DENIED') {
    return {
      attendance: 'Dije "no voy"',
      style: 'text-red',
    };
  }
  if (attendance === 'CONFIRM') {
    return {
      attendance: 'Dije "voy"',
      style: 'text-green',
    };
  }
};

const ConfirmPage = () => {
  const [selected, setSelected] = useState<TypeSelectedState>({});
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

  const handleSubmit = async (id: string) => {
    await trpc.user.setConfirmation.mutate({
      attendance: selected[id],
      id,
    });
  };

  console.log(selected);

  return (
    <>
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
          <div
            key={index}
            className='w-1/3 h-15 flex flex-row justify-center items-center m-2'
          >
            <form
              onSubmit={() => handleSubmit(u.id)}
              className='w-full h-max flex flex-row items-center justify-center'
            >
              <div className='w-80 montserratFont flex flex-row text-center'>
                <p className='mr-10 min-w-36'>{u.name}</p>
                <p
                  className={`${verifyAttendance(u.attendance)?.style} min-w-24`}
                >
                  {verifyAttendance(u.attendance)?.attendance}
                </p>
              </div>
              <select
                value={selected[u.id] || 'DEFAULT'}
                onChange={(e) => {
                  if (
                    e.target.value === 'CONFIRM' ||
                    e.target.value === 'DENIED'
                  ) {
                    setSelected({ ...selected, [u.id]: e.target.value });
                  }
                }}
                className='montserratFont w-28 h-8 text-center bg-white rounded-md m-2'
              >
                <option value='DEFAULT'>-</option>
                <option value='CONFIRM'>Voy</option>
                <option value='DENIED'>No voy</option>
              </select>
              <UIButton
                tailwindStyle='h-8 w-24 rounded-md montserratFont text-sm border-2 font-thin ml-6 transition-transform ease-in-out duration-300 hover:bg-grey'
                buttonText='Confirmar'
                type={selected[u.id] ? 'submit' : 'button'}
                handleClick={() =>
                  selected[u.id]
                    ? alert(
                        selected[u.id] === 'CONFIRM'
                          ? 'Gracias por acompañaros'
                          : 'Lamentamos que no puedas acompañarnos, pero no pasa nada... Aún asi te queremos',
                      )
                    : alert('Tenés que decir si vas o no vas')
                }
              />
            </form>
          </div>
        ))}
      <div className='mt-6'>
        <input
          className='bg-dark-black border-2 border-dark-white montserratFont rounded-md focus:border-dark-white mt-2 mb-2 h-10 p-2'
          name='name'
          placeholder='Nombre y apellido'
          onChange={handleInputChange}
          value={name}
        />
        <UIButton
          tailwindStyle='h-10 w-32 rounded-md montserratFont border-2 font-semibold mt-4 ml-6 dtransition-transform ease-in-out duration-300 hover:bg-grey'
          buttonText='Buscar'
          handleClick={handleSearchButton}
        />
      </div>
      <div className='w-1/3 h-32 mt-10 md:mb-2 lg:mb-14 md:mr-8 lg:mr-18 xl:mr-24 lg:mt-16'>
        <div
          id={styles.websiteDecoration}
          className='w-full h-full transform scale-y-[-1] scale-x-[-1]'
        ></div>
      </div>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ConfirmPage;
