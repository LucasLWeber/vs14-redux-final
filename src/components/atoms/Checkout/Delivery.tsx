import { useDispatch, useSelector } from 'react-redux';
import { calcularFrete } from '../../../slice/freteSlice';
import { RootState, AppDispatch } from '../../../store/store';
import { useEffect, useState } from 'react';
import { setFreteValor } from '../../../slice/freteValorSlice';

export function Delivery() {
  const dispatch = useDispatch<AppDispatch>();
  const { dados, status, error } = useSelector((state: RootState) => state.frete);
  const [cep, setCep] = useState('');

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleCalculateFrete = () => {
    const payload = {
      from: { postal_code: '96020360' },
      to: { postal_code: cep },
      package: { height: 4, width: 12, length: 17, weight: 0.3 },
    };
    dispatch(calcularFrete(payload));
  };

  useEffect(() => {
    if (status === 'succeeded' && dados && dados.length > 0) {
      dispatch(setFreteValor(Number(dados[0].price)));
    }

    if (status === 'failed') {
      console.error(error);
    }
  }, [status, dados, dispatch, error]);

  return (
    <div>
		<form onSubmit={(e) => { e.preventDefault(); handleCalculateFrete(); }}>
			<div className="flex gap-x-4 items-center">
				<input
				type="text"
				value={cep}
				onChange={handleCepChange}
				placeholder="Digite seu CEP"
				className="border rounded-sm max-w-1/4"
				/>
				<button
					type="submit"
					className="bg-custom-green text-white px-2 py-1 rounded-sm text-sm hover:bg-hover-green shadow"
				>
				Calcular Frete
				</button>
			</div>
		</form>

      {status === 'loading' && <p>Carregando...</p>}
      {status === 'failed' && <p>Erro: {error}</p>}

      {dados && status === 'succeeded' && dados.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center border p-2 rounded mb-2">
            <span>{dados[0].company.name}</span>
            <span>R$ {Number(dados[0].price).toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}