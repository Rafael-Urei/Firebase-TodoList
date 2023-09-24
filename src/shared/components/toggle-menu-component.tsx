import { useAppMenuContext } from "../contexts/MenuContext/menu-context";
import { Menu } from "lucide-react";

export const ToggleMenu = () => {
  const { isOpen, toggleMenu } = useAppMenuContext();
  return (
    <>
      {!isOpen ? (
        <button onClick={toggleMenu}>
          <Menu className="h-5 w-5" />
        </button>
      ) : null}
    </>
  );
};
