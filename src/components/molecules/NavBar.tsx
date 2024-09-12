import { Icon } from "../atoms/Icon";
import { CartCounter } from "../atoms/CartCounter";
import { useState } from "react";
import { CheckoutModal } from "../organisms/CheckoutModal"; 

export function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false); 

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <nav>
      <ul className="flex items-center justify-center gap-x-8">
        <div className="relative">
          <button onClick={toggleModal}>
            <Icon url="/assets/Cart.svg" alt="Carrinho de compras" heigth="29" width="29" />
            <CartCounter />
          </button>
        </div>
      </ul>

      <CheckoutModal isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
}
