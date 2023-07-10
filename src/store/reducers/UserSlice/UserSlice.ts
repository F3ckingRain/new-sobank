import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import initialState from '@/store/reducers/UserSlice/data';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state) {
      state.isAuth = true;
    },
    logOut(state) {
      Cookies.remove('Bearer');
      state.isAuth = false;
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
    setChangingPhone(state, { payload }: PayloadAction<boolean>) {
      state.changingPhone = payload;
    },
    setAutologinToken(state, { payload }: PayloadAction<string>) {
      state.autologinToken = payload;
    },
  },
});

export const {
  setCode,
  setPhoneNumber,
  setAutologinToken,
  logOut,
  logIn,
  setChangingPhone,
  setSendingSms,
} = userSlice.actions;
export default userSlice.reducer;
