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

export const verifyAttendance = (attendance: string | undefined) => {
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
      attendance: '"No voy"',
      style: 'text-red',
    };
  }
  if (attendance === 'CONFIRM') {
    return {
      attendance: '"Si, voy"',
      style: 'text-green',
    };
  }
};

const ConfirmPage = () => {
  const [selected, setSelected] = useState<TypeSelectedState>({});
  const [user, setUser] = useState<TypeUser[]>([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userLength, setUserLength] = useState(0);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: any) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'lastName') {
      setLastName(e.target.value);
    }
  };

  const handleKeyPress = async (e: any) => {
    const userToSearch = {
      name,
      lastName,
    };
    if (e.key === 'Enter') {
      const fetchedUser = await trpc.user.getUser.query(userToSearch);
      setUser(fetchedUser ?? []);
      if (fetchedUser) {
        setUserLength(fetchedUser.length);
      } else {
        setUserLength(0);
      }
    }
  };

  const handleSearchButton = async () => {
    const userToSearch = {
      name,
      lastName,
    };
    const fetchedUser = await trpc.user.getUser.query(userToSearch);
    setUser(fetchedUser ?? []);
    if (fetchedUser) {
      setUserLength(fetchedUser.length);
    } else {
      setUserLength(0);
    }
  };

  const handleSubmit = async (id: string) => {
    await trpc.user.setConfirmation.mutate({
      attendance: selected[id],
      id,
    });
  };

  return (
    <>
      <div className='w-80 h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24'>
        <div id={styles.websiteDecoration} className='w-full h-full'></div>
      </div>
      <h1 className='text-color-2 text-5xl md:text-6xl text-center mb-2 palmatonFont'>
        ¿Nos acompañas o te lo perdés?
      </h1>
      <p className='w-2/3 px-10 py-2 montserratFont text-xl text-center'>
        Porfa, confirmanos lo antes posible, así organizarlo nos será mucho más
        fácil
      </p>
      <h2 className='montserratFont text-lg md:text-xl mt-4 mb-8'>
        Buscate poniendo tu nombre y apellido
      </h2>
      {user &&
        user.map((u, index) => (
          <div
            key={index}
            className='w-full md:w-1/2  h-30 md:h-15 flex flex-col justify-center items-center m-2'
          >
            <form
              onSubmit={() => handleSubmit(u.id)}
              className='w-full h-max flex flex-row flex-wrap items-center justify-around'
            >
              <div className='md:w-80 montserratFont flex flex-row text-center'>
                <p className='mr-10 min-w-20 md:min-w-52'>
                  {u.NOMBRE} {u.APELLIDOS}
                </p>
                <p
                  className={`${verifyAttendance(u.CONFIRMADO)?.style} min-w-24 md:min-w-24`}
                >
                  {verifyAttendance(u.CONFIRMADO)?.attendance}
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
                type={'button'}
                handleClick={() =>
                  // selected[u.id]
                  //   ? alert(
                  //       selected[u.id] === 'CONFIRM'
                  //         ? 'Gracias por acompañaros'
                  //         : 'Lamentamos que no puedas acompañarnos, pero no pasa nada... Aún asi te queremos',
                  //     )
                  //   : alert('Tenés que decir si vas o no vas')

                  alert(
                    'Lo sentimos pero ya se acabo el tiempo para confirmar la asistencia',
                  )
                }
              />
            </form>
          </div>
        ))}
      {message && (
        <div className='w-full text-center h-32 mt-10 md:mb-2 lg:mb-8 md:ml-8 lg:ml-18 xl:ml-24'>
          <p className='mr-10 min-w-20 md:min-w-52 montserratFont'>{message}</p>
        </div>
      )}
      <p className='montserratFont text-sm mt-6'>Ojo con las tildes</p>
      <div className='flex flex-col justify-center items-center mt-1'>
        <input
          className='border-2 montserratFont rounded-md mt-2 mb-2 h-10 p-2'
          name='name'
          placeholder='Nombres'
          onChange={handleInputChange}
          value={name}
          onKeyDown={handleKeyPress}
        />
        <input
          className='border-2 montserratFont rounded-md mt-2 mb-2 h-10 p-2'
          name='lastName'
          placeholder='Apellidos'
          onChange={handleInputChange}
          value={lastName}
          onKeyDown={handleKeyPress}
        />
        <p className='montserratFont m-2'>
          Hay tiempo hasta el dia 29 de febrero
        </p>
        <UIButton
          tailwindStyle='h-10 w-32 rounded-md montserratFont border-2 font-semibold dtransition-transform ease-in-out duration-300 hover:bg-grey'
          buttonText='Buscar'
          handleClick={handleSearchButton}
        />
      </div>
      <div className='w-80 h-32 mb-10 mt-10 md:mb-2 lg:mb-8 md:mr-8 lg:mr-18 xl:mr-24'>
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
