import { createSlice } from '@reduxjs/toolkit';

import initialState from '@/store/reducers/ModalSlice/data';

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
});

export default modalSlice.reducer;
