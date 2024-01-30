/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { createTRPCRouter } from '@/server/trpc';
import { saveClientMessage } from './mutation';


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
export const contactRouter = createTRPCRouter({
  saveClientMessage
})
