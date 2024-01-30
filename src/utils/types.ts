/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/


/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export type TypeAttendance = 'PENDING' | 'CONFIRMED' | 'DENIED' 

export type TypeGender = 'MALE' | 'FEMALE'

export type TypeAge = 'BABY' | 'CHILD' | 'ADULT'

export type TypeUser = {
  id: string
  name?: string;
  attendance?: TypeAttendance;
  email?: string
  phone?: string
  direction?: string
  gender?: TypeGender
  age?: TypeAge  
  xata: {
    createdAt: string
    updatedAt: string
    version: number
  }
};
