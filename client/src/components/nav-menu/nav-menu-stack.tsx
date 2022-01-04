import { MotionStack } from "components/motion/motionComponent";
import NavLink from "./nav-link";

interface NavLinksStackProps {
  isPhone: boolean;
  isOpen: boolean;
}

function NavLinksStack(props: NavLinksStackProps) {
  const { isPhone, isOpen } = props;

  const navPages = ["Home", "Game", "Profile", "About"];

  return (
    <MotionStack
      spacing="0"
      w="fit-content"
      pos="absolute"
      top={isPhone || isOpen ? "50px" : "0px"}
      left={isPhone || isOpen ? "15px" : "unset"}
      right={isPhone || isOpen ? "unset" : "15px"}
    >
      {navPages.map((page) => {
        return (
          <NavLink key={page} page={page} isOpen={isOpen} isPhone={isPhone} />
        );
      })}
    </MotionStack>
  );
}

export default NavLinksStack;
export type { NavLinksStackProps };
