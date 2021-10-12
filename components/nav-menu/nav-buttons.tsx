import { MotionBox, MotionButton } from "../motion/motionComponent";
import { useNavStore } from "./context";

interface NavButtonProps {}

function NavButton(props: NavButtonProps) {
  const { isOpen, setIsOpen } = useNavStore();

  const buttonSizeProps = {
    borderRadius: "8px",
    w: "60px",
    h: "20px",
    top: "20px",
    right: "15px"
  };

  const buttonAnimatedBgProps = {
    bg: "white",
    initial: { transformOrigin: isOpen ? "bottom" : "top" },
    animate: {
      transformOrigin: isOpen ? "top" : "bottom",
      scaleY: isOpen ? 0 : 1
    }
  };

  const buttonTextProps = {
    fontFamily: "IBM Plex Sans Devanagari, sans-serif",
    mt: "2px",
    fontWeight: "400",
    onMouseEnter: () => setIsOpen.on(),
    onTap: () => setIsOpen.toggle(),
    textColor: isOpen ? "white" : "black"
  };

  return (
    <MotionBox display={isOpen ? "initial" : ["initial", "none"]}>
      <MotionBox pos="absolute" {...buttonSizeProps} bg="Black" />
      <MotionBox
        pos="absolute"
        {...buttonSizeProps}
        {...buttonAnimatedBgProps}
      />
      <MotionButton {...buttonSizeProps} {...buttonTextProps} pos="absolute">
        MENU
      </MotionButton>
    </MotionBox>
  );
}

export default NavButton;
export type { NavButtonProps };
