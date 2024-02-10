/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { TypeUser } from './types';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

type TypeTotalConfirmations = {
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

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export const dateFormater = (date: string, lang: string, options: object) => {
  const locales = lang === 'en' ? 'en-US' : 'es-ES';
  const dateParts = date.split('T')[0].split('-');
  const newDate = new Date(
    Number(dateParts[0]),
    Number(dateParts[1]) - 1,
    Number(dateParts[2]),
  );
  const birth = newDate.toLocaleDateString(locales, options);
  return birth;
};

export const totalConfirmations = (confirmations: TypeUser[]) => {
  if (!confirmations.length) {
    return [];
  }
  let status: TypeTotalConfirmations = {
    total: 0,
    confirmed: 0,
    pending: 0,
    denied: 0,
  };
  status.total = confirmations.length;
  confirmations.map((c) => {
    if (c.CONFIRMADO) {
      if (c.CONFIRMADO === 'PENDIENTE') {
        status.pending += 1;
      }
      if (c.CONFIRMADO === 'CONFIRM' || c.CONFIRMADO === 'CONFIRMADO') {
        status.confirmed += 1;
      }
      if (c.CONFIRMADO === 'DENIED') {
        status.denied += 1;
      }
    }
  });

  return status;
};
