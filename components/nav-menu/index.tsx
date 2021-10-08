import { Box, useBoolean, useBreakpointValue } from '@chakra-ui/react';
import { MotionBox } from '../motion/motionComponent';
import NavButton from './nav-buttons';
import NavLinksStack from './nav-menu-stack';

interface NavMenuProps {}

function NavMenu() {
  const [isOpen, setIsOpen] = useBoolean();
  const isPhone = useBreakpointValue({ base: true, md: false });

  const navContainerProps = {
    onMouseLeave: () => setIsOpen.off(),
    w: isPhone ? '100px' : '150px',
    h: '180px',
    top: '30px',
    right: '20px',
  };

  const navBgProps = {
    animate: {
      opacity: isOpen ? 1 : 0,
      scale: isOpen ? 1 : [0.9, 0.8, 0.7, 0.6],
    },
    layout: true,
    top: '0',
    w: '100%',
    h: '100%',
    bg: 'white',
    borderRadius: '20px',
    display: isPhone || isOpen ? 'initial' : 'none',
  };

  return (
    <nav>
      <Box pos="fixed" {...navContainerProps}>
        <MotionBox pos="absolute" {...navBgProps}></MotionBox>
        <NavLinksStack isPhone={isPhone} isOpen={isOpen} />
        <NavButton isOpen={isOpen} isShowing={isPhone} setIsOpen={setIsOpen} />
      </Box>
    </nav>
  );
}

export default NavMenu;
export type { NavMenuProps };
