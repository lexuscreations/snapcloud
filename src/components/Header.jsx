import { FaFolderTree } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <h1 className="flex items-center gap-2.5">
        File Explorer <FaFolderTree />
      </h1>
    </header>
  );
};

export default Header;
