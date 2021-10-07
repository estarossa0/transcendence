import { Box, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MotionBox, MotionButton, MotionStack } from './motion/motionComponent';
import { useDisclosure } from '@chakra-ui/hooks';
import { useBreakpointValue } from '@chakra-ui/react';

const useIsCurrentPage = (page: string): boolean => {
  const href = useRouter().asPath;
  if (page === 'Home') page = '';
  return `/${page.toLowerCase()}` === href;
};

const NavLinks = ({
  isPhone,
  isOpen,
}: {
  isPhone: boolean;
  isOpen: boolean;
}) => {
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
        const isCurrentPage = useIsCurrentPage(page);
        const { isOpen: isHovering, onToggle } = useDisclosure();
        return (
          <MotionBox
            onMouseEnter={() => onToggle()}
            onMouseLeave={() => onToggle()}
            initial={{ transformOrigin: 'bottom' }}
            animate={{
              transformOrigin: 'bottom',
              scaleY: isOpen || !isPhone ? 1 : [0.9, 0.1, 0],
            }}
            key={page}
          >
            <Link href={page === 'Home' ? '/' : `/${page.toLowerCase()}`}>
              <Text
                fontFamily="alata, sans-serif"
                fontWeight="400"
                cursor={isCurrentPage ? 'unset' : 'pointer'}
                fontSize="18px"
                textColor={isOpen || isPhone ? 'black' : 'white'}
              >
                {page}
              </Text>
            </Link>
            <MotionBox
              h="1px"
              bg={isOpen || isPhone ? 'black' : 'white'}
              initial={{ transformOrigin: isHovering ? 'right' : 'left' }}
              animate={{
                transformOrigin: isHovering ? 'right' : 'left',
                scaleX: isHovering || isCurrentPage ? 1 : 0,
              }}
            />
          </MotionBox>
        );
      })}
    </MotionStack>
  );
};

const NavButton = ({
  onOpen,
  onToggle,
  isOpen,
  isShowing,
}: {
  onOpen: () => void;
  onToggle: () => void;
  isOpen: boolean;
  isShowing: boolean;
}) => {
  const buttonSizeProps = {
    borderRadius: '8px',
    w: '60px',
    h: '20px',
    top: '20px',
    right: '15px',
  };

  return (
    <MotionBox display={isShowing || isOpen ? 'initial' : 'none'}>
      <MotionBox pos="absolute" {...buttonSizeProps} bg="Black" />
      <MotionBox
        pos="absolute"
        {...buttonSizeProps}
        bg="white"
        initial={{ transformOrigin: isOpen ? 'bottom' : 'top' }}
        animate={{
          transformOrigin: isOpen ? 'top' : 'bottom',
          scaleY: isOpen ? 0 : 1,
        }}
      />
      <MotionButton
        fontFamily="IBM Plex Sans Devanagari, sans-serif"
        mt="2px"
        fontWeight="400"
        onMouseEnter={() => onOpen()}
        onTap={() => onToggle()}
        pos="absolute"
        {...buttonSizeProps}
        textColor={isOpen ? 'white' : 'black'}
      >
        MENU
      </MotionButton>
    </MotionBox>
  );
};

const NavBar = () => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const isPhone = useBreakpointValue({ base: true, md: false });

  return (
    <nav>
      <Box
        onMouseLeave={() => onClose()}
        w={isPhone ? '100px' : '150px'}
        h="180px"
        top="30px"
        right="20px"
        position="fixed"
      >
        <MotionBox
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : [0.9, 0.8, 0.7, 0.6],
          }}
          layout
          pos="absolute"
          top="0"
          w="100%"
          h="100%"
          bg="white"
          borderRadius="20px"
          display={isPhone || isOpen ? 'initial' : 'none'}
        ></MotionBox>
        <NavLinks isPhone={isPhone} isOpen={isOpen} />
        <NavButton
          isShowing={isPhone}
          onOpen={onOpen}
          onToggle={onToggle}
          isOpen={isOpen}
        />
      </Box>
    </nav>
  );
};

export default NavBar;
