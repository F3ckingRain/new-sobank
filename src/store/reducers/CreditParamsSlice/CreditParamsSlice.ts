import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from '@/store/reducers/CreditParamsSlice/data';
import { CreditParams } from '@/types/form';

export const creditParamsSlice = createSlice({
  name: 'creditParams',
  initialState,
  reducers: {
    setCreditTarget(state, { payload }: PayloadAction<CreditParams.CreditTargetType>) {
      state.creditTarget = payload;
    },
  },
});

export const { setCreditTarget } = creditParamsSlice.actions;
export default creditParamsSlice.reducer;
