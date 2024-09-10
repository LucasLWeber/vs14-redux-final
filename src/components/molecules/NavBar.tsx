import { Link } from "react-router-dom";
import { Icon } from "../atoms/Icon";
import { CartCounter } from "../atoms/CartCounter";
import { useState } from "react";
import { UserImage } from "../atoms/User/UserImage";
import { UserName } from "../atoms/User/UserName";
import { CheckoutModal } from "../organisms/CheckoutModal"; 

export function Navbar() {
  const [counter, setCounter] = useState(0);
  const [isAuth, setIsAuth] = useState(true);
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
            <CartCounter counter={counter} />
          </button>
        </div>
        <Link to={"/"}>
          {!isAuth ? (
            <Icon url="/assets/Profile.svg" alt="Perfil" heigth="34" width="34" />
          ) : (
            <div className="flex flex-col items-center gap-y-1">
              <UserImage />
              <UserName />
            </div>
          )}
        </Link>
      </ul>

      <CheckoutModal isOpen={isModalOpen} onClose={toggleModal} />
    </nav>
  );
}
