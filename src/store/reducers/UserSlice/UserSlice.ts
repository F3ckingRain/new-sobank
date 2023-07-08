import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import initialState from '@/store/reducers/UserSlice/data';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload;
    },
    setPhoneNumber(state, { payload }: PayloadAction<string>) {
      state.phoneNumber = payload;
    },
    setCode(state, { payload }: PayloadAction<string>) {
      state.code = payload;
    },
    setSendingSms(state, { payload }: PayloadAction<boolean>) {
      state.sendingSmsCode = payload;
    },
  },
});

export const { setCode, setPhoneNumber, setIsAuth, setSendingSms } = userSlice.actions;
export default userSlice.reducer;
