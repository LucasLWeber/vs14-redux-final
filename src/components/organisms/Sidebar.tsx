import { useState } from "react";

interface MenuItem {
  title: string;
  src: string;
  gap?: boolean;
}

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState<string>("Usuario");
  const [email, setEmail] = useState<string>("usuario@example.com");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const Menus: MenuItem[] = [
    { title: "Accounts", src: "user", gap: true },
    { title: "Setting", src: "setting" },
  ];

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
    <div className="flex fixed left-0 top-[92px]">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-custom-black h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="../../../public/assets/control.png"
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
              <img src={`../../../public/assets/${Menu.src}.png`} alt={Menu.title} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
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
