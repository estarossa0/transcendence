import { useUser } from "@auth0/nextjs-auth0";
import { Box, useBoolean, useBreakpointValue } from "@chakra-ui/react";
import { MotionBox } from "components/motion/motionComponent";
import NavButton from "./nav-buttons";
import NavLink from "./nav-link";
import NavLinksStack from "./nav-menu-stack";

interface NavMenuLinksProps {
  isOpen: boolean;
  isPhone: boolean;
  setIsOpen: {
    readonly on: () => void;
    readonly off: () => void;
    readonly toggle: () => void;
  };
}

const NavMenuLinks = ({ isOpen, isPhone, setIsOpen }: NavMenuLinksProps) => {
  const { user, isLoading } = useUser();
  const navBgProps = {
    initial: false,
    animate: {
      opacity: isOpen ? 1 : 0,
      scale: isOpen ? 1 : 0.6,
      originY: 0.1,
      originX: 0.6,
    },
    layout: true,
    top: "0",
    w: "100%",
    h: "100%",
    bg: "white",
    borderRadius: "20px",
    display: isPhone || isOpen ? "initial" : "none",
  };

  if (isLoading) return null;

  if (!user)
    return (
      <Box w="fit-content" pos="absolute" right="15px">
        <NavLink isOpen={true} isPhone={true} page="login" />
      </Box>
    );

  return (
    <>
      <MotionBox
        pos="absolute"
        {...navBgProps}
        transition={{ duration: 0.2, delay: !isOpen ? 0.2 : undefined }}
      />
      <NavLinksStack isPhone={isPhone} isOpen={isOpen} />
      <NavButton isOpen={isOpen} isShowing={isPhone} setIsOpen={setIsOpen} />
    </>
  );
};

function NavMenu() {
  const [isOpen, setIsOpen] = useBoolean();
  const isPhone = useBreakpointValue({ base: true, md: false }, "md");

  const navContainerProps = {
    onMouseLeave: () => setIsOpen.off(),
    w: isPhone ? "100px" : "150px",
    h: "180px",
    top: "30px",
    right: "20px",
  };

  return (
    <Box as="nav" pos="fixed" {...navContainerProps}>
      <NavMenuLinks
        isOpen={isOpen}
        isPhone={isPhone ?? false}
        setIsOpen={setIsOpen}
      />
    </Box>
  );
}

export default NavMenu;
