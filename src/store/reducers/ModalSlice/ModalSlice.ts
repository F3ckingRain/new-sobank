import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState, { ModalType } from '@/store/reducers/ModalSlice/data';

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal(state, { payload }: PayloadAction<ModalType>) {
      state.name = payload.name;
      state.opened = payload.opened;
    },
    closeModal(state) {
      state.opened = false;
    },
    setShowcaseModal(state, { payload }: PayloadAction<boolean>) {
      state.showcase = payload;
    },
  },
});

export const { setModal, closeModal, setShowcaseModal } = modalSlice.actions;

export default modalSlice.reducer;
