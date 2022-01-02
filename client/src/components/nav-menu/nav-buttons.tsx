import { MotionBox, MotionButton } from 'components/motion/motionComponent';

interface NavButtonProps {
  isOpen: boolean;
  isShowing: boolean;
  setIsOpen: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
}

function NavButton(props: NavButtonProps) {
  const { isOpen, isShowing, setIsOpen } = props;

  const buttonSizeProps = {
    borderRadius: '8px',
    w: '60px',
    h: '20px',
    top: '20px',
    right: '15px',
  };

  const buttonAnimatedBgProps = {
    bg: 'white',
    initial: { transformOrigin: isOpen ? 'bottom' : 'top' },
    animate: {
      transformOrigin: isOpen ? 'top' : 'bottom',
      scaleY: isOpen ? 0 : 1,
    },
  };

  const buttonTextProps = {
    fontFamily: 'inter, sans-serif',
    fontWeight: '400',
    textColor: isOpen ? 'white' : 'black',
  };

  return (
    <MotionBox
      sx={{ WebkitTapHighlightColor: 'transparent' }}
      display={isShowing || isOpen ? 'initial' : 'none'}
      onMouseEnter={() => setIsOpen.on()}
      onTap={() => setIsOpen.toggle()}
    >
      <MotionBox
        pos="absolute"
        {...buttonSizeProps}
        borderRadius="9px"
        bg="Black"
      />
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
