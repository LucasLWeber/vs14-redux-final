import { useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MdLogout } from "react-icons/md";
import { removeToken } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  title: string;
  src: string;
  gap?: boolean;
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const usuario = useSelector((state: RootState) => state.user.usuario);
  const [open, setOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>(usuario?.name);
  const [email, setEmail] = useState<string>(usuario?.email);
  const [selectedImage, setSelectedImage] = useState<string | null>(usuario?.picture);

  const Menus: MenuItem[] = [
    { title: "Accounts", src: "user", gap: true },
  ];
  const handleLogout =  () => {
    removeToken();
    navigate("/login")
    
  }
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex fixed left-0 top-0">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-custom-black h-screen p-3 pt-8 relative duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-custom-black border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          alt="Control"
        />

        <div className="flex gap-x-4 items-center">
          {selectedImage ? (
            <img
              src={selectedImage}
              className="w-12 h-12 rounded-full object-fit inline-block "
              alt="User"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-400"></div>
          )}
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {name}
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-hover-green text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              }`}
              onClick={() => {
                if (Menu.title === "Accounts") {
                  setIsEditing(true);
                }
              }}
            >
              <img src={`/assets/${Menu.src}.png`} alt={Menu.title} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))
          }

          <li onClick={handleLogout}  className="flex rounded-md p-2 cursor-pointer hover:bg-hover-green text-gray-300 text-sm items-center gap-x-4">
              <MdLogout  color="" style={{
                color: "#C7C7C7"
              }} size={28}/>
              <span className={`${!open && "hidden"} origin-left duration-200`} >Sair</span>
          </li>
        </ul>
      </div>

      {isEditing && (
        <div className="flex flex-col p-6 bg-white w-full h-screen">
          <h2 className="text-2xl font-bold mb-4">Editar Perfil</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Imagem:</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

          {selectedImage && (
            <div className="mb-4">
              <img src={selectedImage} alt="Selected" className="w-32 h-32 rounded-full" />
            </div>
          )}

          <div className="flex space-x-4">
            <button
              onClick={handleSaveChanges}
              className="bg-custom-green text-white px-4 py-2 rounded"
            >
              Salvar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
