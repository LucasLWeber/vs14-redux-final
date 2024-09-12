import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export function Total() {
  const subtotal = useSelector((state: RootState) => state.cart.total);
  const frete = useSelector((state: RootState) => state.freteValor.valor);
  const total = frete !== null ? subtotal + frete : subtotal;

  return (
    <p className="text-custom-black text-lg">
      Total: <strong>R$ {total.toFixed(2)}</strong>
    </p>
  );
}