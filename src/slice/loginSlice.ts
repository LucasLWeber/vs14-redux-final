import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Usuario, UsuarioState } from '../utils/interfaces';
import axios from 'axios';
import { setToken } from '../utils/functions';


const initialState: UsuarioState = {
  usuario: {
    name: '',
    email: '',
    picture: '',
  },
  loading: false,
  status: 'idle', 
  error: ''
};


export const fetchLogin = createAsyncThunk(
  'users/login',
  async ({ username, password }: { username: string; password: string }) => {
 
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      });
      const data = response.data;
      setToken(data.token)
    } catch (error) {
     
      throw new Error('Erro ao realizar login');
    }
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Usuario>) => {
      state.usuario = action.payload;
    },
    clearUser: (state) => {
      state.usuario = { name: '', email: '', picture: '' };
      state.status = 'idle';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchLogin.fulfilled, (state) => {
        state.status = 'succeeded';
        state.loading = false;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message || 'Erro desconhecido';
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
