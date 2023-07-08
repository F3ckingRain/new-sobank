import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState, { ViewportType } from '@/store/reducers/ConfigSlice/data';

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setViewport(state, { payload }: PayloadAction<ViewportType>) {
      state.viewport = payload;
    },
  },
});

export const { setViewport } = configSlice.actions;
export default configSlice.reducer;
