import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FretePayload, FreteResponse } from '../utils/interfaces';


interface FreteState {
  dados: FreteResponse[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export const calcularFrete = createAsyncThunk<FreteResponse[], FretePayload>(
  'frete/calcularFrete',
  async (payload, { rejectWithValue }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { postal_code: '96020360' }, 
        to: payload.to,
        package: { height: 4, width: 12, length: 17, weight: 0.3 }, 
      }),
    };

    try {
      const response = await fetch('https://backend-pet-shop-kappa.vercel.app/calculate-shipment', options);
      if (!response.ok) {
        throw new Error('Erro ao calcular o frete');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Ocorreu um erro');
    }
  }
);

const freteSlice = createSlice({
  name: 'frete',
  initialState: {
    dados: null,
    status: 'idle',
    error: null,
  } as FreteState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(calcularFrete.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(calcularFrete.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dados = action.payload;
      })
      .addCase(calcularFrete.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string || 'Ocorreu um erro';
      });
  },
});

export default freteSlice.reducer;
