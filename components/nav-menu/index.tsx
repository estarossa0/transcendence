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
    initial: false,
    animate: {
      opacity: isOpen ? 1 : 0,
      scale: isOpen ? 1 : 0.6,
      originY: 0.1,
      originX: 0.6,
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
    <Box as="nav" pos="fixed" {...navContainerProps}>
      <MotionBox
        pos="absolute"
        {...navBgProps}
        transition={{ duration: 0.2, delay: !isOpen ? 0.2 : undefined }}
      />
      <NavLinksStack isPhone={isPhone} isOpen={isOpen} />
      <NavButton isOpen={isOpen} isShowing={isPhone} setIsOpen={setIsOpen} />
    </Box>
  );
}

export default NavMenu;
export type { NavMenuProps };
