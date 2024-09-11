import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Usuario } from '../utils/interfaces';

const initialState: Usuario = {
  name: '',
  email: '',
  picture: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Usuario>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.picture = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
