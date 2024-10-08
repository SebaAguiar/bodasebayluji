/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { configureStore } from '@reduxjs/toolkit';
import sideReducer from './features/slices/sideSlice';
import guestsSlice from './features/slices/guestsSlice';
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
export const store = configureStore({
  reducer: {
    side: sideReducer,
    guests: guestsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
