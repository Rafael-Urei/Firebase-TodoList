import { useAppMenuContext } from "../../contexts/MenuContext/MenuContext";
import { Menu } from "lucide-react";

export const ToggleMenu = () => {
  const { isOpen, toggleMenu } = useAppMenuContext();
  return (
    <>
      {!isOpen ? (
        <button onClick={toggleMenu} className="absolute top-6 left-4">
          <Menu />
        </button>
      ) : null}
    </>
  );
};
