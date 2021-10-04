import {
  Text,
  Flex,
  Button,
  ButtonGroup,
  Stack,
  StyleProps,
  Box,
  IconButton,
  Fade,
  useDisclosure,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import Link from 'next/link';

const useIsCurrentPage = (page: string, href: string): boolean => {
  if (page === 'Home') page = '';
  return `/${page.toLowerCase()}` === href;
};

const NavLinks = () => {
  const links = ['Home', 'Game', 'Profile', 'About'];
  const router = useRouter();

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      justify="center"
      w="75%"
      alignItems="center"
      fontSize={{ base: '20px', lg: '16px' }}
      fontWeight="600"
      fontFamily="alliance, sans-serif"
      spacing="45px"
      h={{ base: '50%', lg: null }}
    >
      {links.map((link) => {
        const isCurrentPage = useIsCurrentPage(link, router.pathname);
        return (
          <Link key={link} href={link === 'Home' ? '/' : link.toLowerCase()}>
            <Text
              bgClip={isCurrentPage ? 'text' : undefined}
              bgGradient={
                isCurrentPage ? 'linear(to-b, #60E3E7, white)' : undefined
              }
              cursor="pointer"
              borderBottom="1px solid transparent"
              _hover={{ borderBottom: '1px solid white' }}
            >
              {link}
            </Text>
          </Link>
        );
      })}
    </Stack>
  );
};

const NavButtons = () => {
  const buttonsProps = {
    _active: {
      transform: 'scale(0.9)',
    },
    w: '80px',
    h: '32px',
    size: 'sm',
    borderRadius: '12px',
  };

  return (
    <ButtonGroup w={{ lg: '25%' }} justifyContent="flex-end" isAttached>
      <Button {...buttonsProps} bgColor="black" textColor="white">
        Sign up
      </Button>
      <Button {...buttonsProps} bgColor="white" textColor="black">
        Log in
      </Button>
    </ButtonGroup>
  );
};

const HeaderLogo = (props: StyleProps) => {
  return (
    <Flex alignItems="center" {...props}>
      <Text>Transcendence</Text>
    </Flex>
  );
};

const NavMenuButton = ({ menuToggle, isOpen }) => {
  return (
    <Box
      right="2%"
      top="13px"
      position="fixed"
      bgColor="transparent"
      onClick={menuToggle}
      display={{ base: 'block', lg: 'none' }}
    >
      <Fade in={!isOpen}>
        <IconButton
          position="fixed"
          aria-label="open-menu"
          icon={<GiHamburgerMenu size={20} />}
        ></IconButton>
      </Fade>
      <Fade in={isOpen}>
        <IconButton
          aria-label="close-menu"
          icon={<VscChromeClose size={20} />}
        ></IconButton>
      </Fade>
    </Box>
  );
};

const HeaderNav = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        p="0"
        overflow="auto"
        borderLeft={{ md: 'solid 1px white', lg: 'none' }}
        bgColor="inherit"
        w={{ base: 'full', md: '25%', lg: '75%' }}
        h={{ base: 'full', lg: 'inherit' }}
        position={{ base: 'fixed', lg: 'unset' }}
        right={{ base: '0', lg: 'unset' }}
        transform={{ base: !isOpen && 'translate3d(100%,0,0)', lg: 'none' }}
        transition={{
          base: 'transform 1s cubic-bezier(.16,1,.3,1)',
          lg: undefined,
        }}
        justifyContent="center"
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          pb={{ base: '15px', lg: 0 }}
          spacing={50}
          w="full"
        >
          <HeaderLogo
            w="full"
            fontSize="20px"
            position="relative"
            display={{ base: 'flex', lg: 'none' }}
            h="70px"
            pl="10px"
            borderBottom="solid 1px white"
          />

          <NavLinks />
          <NavButtons />
        </Stack>
      </Flex>
      <NavMenuButton isOpen={isOpen} menuToggle={onToggle} />
    </>
  );
};

const Header = () => {
  return (
    <>
      <Flex
        position="fixed"
        width="100vw"
        bgColor="#1D1D1D"
        textColor="white"
        h="70px"
        px="3%"
      >
        <HeaderLogo w="25%" fontSize="20px" />
        <HeaderNav />
      </Flex>
    </>
  );
};

export default Header;
