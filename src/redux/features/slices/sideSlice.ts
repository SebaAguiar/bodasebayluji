/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { createSlice } from '@reduxjs/toolkit';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

type TypeSliceInitialState = {
  active: boolean;
};

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const initialState: TypeSliceInitialState = {
  active: false,
};

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export const sideSlice = createSlice({
  name: 'sideSlice',
  initialState,
  reducers: {
    toggleSide: (state) => {
      state.active = !state.active;
    },
  },
});

export const { toggleSide } = sideSlice.actions;
export default sideSlice.reducer;
