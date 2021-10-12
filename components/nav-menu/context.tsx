import { useBoolean } from "@chakra-ui/hooks";
import React from "react";

export const NavContext = React.createContext({
  isOpen: false,
  setIsOpen: {
    on: () => {},
    off: () => {},
    toggle: () => {}
  }
});

export const NavProvider: React.FC = (props) => {
  const [isOpen, setIsOpen] = useBoolean();

  const value = React.useMemo(
    () => ({
      isOpen,
      setIsOpen
    }),
    [isOpen, setIsOpen]
  );

  return (
    <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
  );
};

export const useNavStore = () => React.useContext(NavContext);
