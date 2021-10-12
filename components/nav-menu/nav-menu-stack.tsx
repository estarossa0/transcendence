import { MotionStack } from "../motion/motionComponent";
import { useNavStore } from "./context";
import NavLink from "./nav-link";

interface NavLinksStackProps {}

function NavLinksStack(props: NavLinksStackProps) {
  const { isOpen } = useNavStore();

  const navPages = ["Home", "Game", "Profile", "About"];

  return (
    <MotionStack
      spacing="0"
      w="fit-content"
      pos="absolute"
      top={isOpen ? "50px" : ["50px", "0px"]}
      left={isOpen ? "15px" : ["15px", "unset"]}
      right={isOpen ? "unset" : ["unset", "15px"]}
    >
      {navPages.map((page) => {
        return <NavLink key={page} page={page} />;
      })}
    </MotionStack>
  );
}

export default NavLinksStack;
export type { NavLinksStackProps };
