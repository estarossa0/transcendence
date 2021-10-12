import { Box, BoxProps, useBreakpointValue } from "@chakra-ui/react";
import { MotionBox } from "../motion/motionComponent";
import { useNavStore } from "./context";
import NavButton from "./nav-buttons";
import NavLinksStack from "./nav-menu-stack";

export const useIsPhone = () => useBreakpointValue({ base: true, md: false });

interface NavMenuProps {}

function NavMenu() {
  const { isOpen, setIsOpen } = useNavStore();

  const navContainerProps: BoxProps = {
    onMouseLeave: () => setIsOpen.off(),
    w: ["100px", "150px"],
    h: "180px",
    top: "30px",
    right: "20px"
  };

  const navBgProps: React.ComponentProps<typeof MotionBox> = {
    animate: {
      opacity: isOpen ? 1 : 0,
      scale: isOpen ? 1 : [0.9, 0.8, 0.7, 0.6]
    },
    layout: true,
    top: "0",
    w: "100%",
    h: "100%",
    bg: "white",
    borderRadius: "20px",
    display: isOpen ? "initial" : ["initial", "none"]
  };

  return (
    <nav>
      <Box pos="fixed" {...navContainerProps}>
        <MotionBox pos="absolute" {...navBgProps}></MotionBox>
        <NavLinksStack />
        <NavButton />
      </Box>
    </nav>
  );
}

export default NavMenu;
export type { NavMenuProps };
