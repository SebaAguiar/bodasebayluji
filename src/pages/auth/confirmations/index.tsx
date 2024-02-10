/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { getGuests } from '@/redux/features/thunks/confirmationThunk';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { totalConfirmations } from '@/utils/functions';
import React, { useEffect, useState } from 'react';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

type TypeStatus = {
  fullfilled: boolean;
  total: number;
  confirmed: number;
  pending: number;
  denied: number;
};

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const ConfirmationsPage = () => {
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<TypeStatus>({
    fullfilled: false,
    total: 0,
    confirmed: 0,
    pending: 0,
    denied: 0,
  });
  const { guests } = useAppSelector((state: RootState) => state.guests);

  useEffect(() => {
    if (!guests.length) {
      dispatch(getGuests());
    }
    if (!status.fullfilled) {
      const total = totalConfirmations(guests);
      if (Array.isArray(total)) {
        // Manejar el caso en el que 'total' es un array
      } else {
        setStatus((prevStat) => ({
          ...prevStat,
          fullfilled: true,
          total: total.total,
          confirmed: total.confirmed,
          pending: total.pending,
          denied: total.denied,
        }));
      }
    }
  }, [dispatch, guests, status]);

  return (
    <>
      <div className='montserratFont overflow-x-auto text-[#000]'>
        <table className='table bg-background mb-10'>
          <thead>
            <tr>
              <th>Total</th>
              <th>Confirmados</th>
              <th>Pendientes</th>
              <th>No van</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{status.total}</td>
              <td>{status.confirmed}</td>
              <td>{status.pending}</td>
              <td>{status.denied}</td>
            </tr>
          </tbody>
        </table>
        <table className='table bg-background'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Confirmado</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((g, index) => (
              <tr key={index}>
                <td>{g.NOMBRE}</td>
                <td>{g.APELLIDOS}</td>
                <td>{g.CONFIRMADO}</td>
                <td>{g.EDAD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default ConfirmationsPage;
