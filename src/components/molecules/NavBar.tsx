import { Icon } from "../atoms/Icon";
import { CartCounter } from "../atoms/CartCounter";
import { useState } from "react";
import { CheckoutModal } from "../organisms/CheckoutModal"; 

export function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false); 
  const [counter, setCounter] = useState<number>(0);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <nav className="flex itens-center">
      <ul className="flex items-center justify-center gap-x-8">
        <div className="relative">
          <button onClick={toggleModal}>
            <Icon url="/assets/Cart.svg" alt="Carrinho de compras" heigth="29" width="29" />
            <CartCounter counter={counter} />
          </button>
        </div>
      </ul>

      <CheckoutModal isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
}
