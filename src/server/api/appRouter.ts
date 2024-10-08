/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { createTRPCRouter } from '../trpc';
import { contactRouter } from './routers/contact';
import { userRouter } from './routers/users';

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
export const appRouter = createTRPCRouter({
  user: userRouter,
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;
