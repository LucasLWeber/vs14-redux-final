import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FreteValorState {
  valor: number | null;
}

const initialState: FreteValorState = {
  valor: null,
};

const freteValorSlice = createSlice({
  name: 'freteValor',
  initialState,
  reducers: {
    setFreteValor: (state, action: PayloadAction<number>) => {
      state.valor = action.payload;
    },
    resetFreteValor: (state) => {
      state.valor = null;
    },
  },
});

export const { setFreteValor, resetFreteValor } = freteValorSlice.actions;
export default freteValorSlice.reducer;
