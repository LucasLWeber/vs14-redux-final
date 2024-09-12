import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useTranslation } from "react-i18next";

export function Total() {
  const subtotal = useSelector((state: RootState) => state.cart.total);
  const frete = useSelector((state: RootState) => state.freteValor.valor);
  const total = frete !== null ? subtotal + frete : subtotal;
  const { t } = useTranslation();

  return (
    <p className="text-custom-black text-lg">
      {t('finalizar.total')}: <strong>R$ {total.toFixed(2)}</strong>
    </p>
  );
}