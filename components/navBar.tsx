import { useRouter } from 'next/router';
import Link from 'next/link';
import { MotionBox, MotionButton, MotionStack } from './motion/motionComponent';
import { useBreakpointValue, Box, Text, useBoolean } from '@chakra-ui/react';

const useIsCurrentPage = (page: string): boolean => {
  const href = useRouter().asPath;
  if (page === 'Home') page = '';
  return `/${page.toLowerCase()}` === href;
};

function NavLink({
  page,
  isOpen,
  isPhone,
}: {
  page: string;
  isOpen: boolean;
  isPhone: boolean;
}) {
  const isCurrentPage = useIsCurrentPage(page);
  const [hovering, setHovering] = useBoolean();

  const linkBoxProps = {
    onMouseEnter: () => setHovering.toggle(),
    onMouseLeave: () => setHovering.toggle(),
    initial: { transformOrigin: 'bottom' },
    animate: {
      transformOrigin: 'bottom',
      scaleY: isOpen || !isPhone ? 1 : [0.9, 0.1, 0],
    },
  };

  const linkTextProps = {
    fontFamily: 'alata, sans-serif',
    fontWeight: '400',
    cursor: isCurrentPage ? 'unset' : 'pointer',
    fontSize: '18px',
    textColor: isOpen || isPhone ? 'black' : 'white',
  };

  const linkUnderlineProps = {
    h: '1px',
    bg: isOpen || isPhone ? 'black' : 'white',
    initial: { transformOrigin: hovering ? 'right' : 'left' },
    animate: {
      transformOrigin: hovering ? 'right' : 'left',
      scaleX: hovering || isCurrentPage ? 1 : 0,
    },
  };

  return (
    <MotionBox key={page} {...linkBoxProps}>
      <Link href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}>
        <Text {...linkTextProps}>{page}</Text>
      </Link>
      <MotionBox {...linkUnderlineProps} />
    </MotionBox>
  );
}

function NavLinksStack({
  isPhone,
  isOpen,
}: {
  isPhone: boolean;
  isOpen: boolean;
}) {
  const navPages = ['Home', 'Game', 'Profile', 'About'];

  return (
    <MotionStack
      spacing="0"
      w="fit-content"
      pos="absolute"
      top={isPhone || isOpen ? '50px' : '0px'}
      left={isPhone || isOpen ? '15px' : 'unset'}
      right={isPhone || isOpen ? 'unset' : '15px'}
    >
      {navPages.map((page) => {
        return <NavLink page={page} isOpen={isOpen} isPhone={isPhone} />;
      })}
    </MotionStack>
  );
}

function NavButton({
  isOpen,
  isShowing,
  setIsOpen,
}: {
  isOpen: boolean;
  isShowing: boolean;
  setIsOpen: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
}) {
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
    fontFamily: 'IBM Plex Sans Devanagari, sans-serif',
    mt: '2px',
    fontWeight: '400',
    onMouseEnter: () => setIsOpen.on(),
    onTap: () => setIsOpen.toggle(),
    textColor: isOpen ? 'white' : 'black',
  };

  return (
    <MotionBox display={isShowing || isOpen ? 'initial' : 'none'}>
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

function NavBar() {
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

export default NavBar;
