import {
  HStack,
  Link,
  Text,
  Flex,
  Button,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react';

const NavLinks = () => {
  const links = ['Home', 'Game', 'Profile', 'About'];

  return (
    <Stack
      direction="row"
      justify="center"
      w="75%"
      alignItems="center"
      fontSize="14px"
      fontWeight="600"
      fontFamily="alliance, sans-serif"
      spacing="55px"
    >
      {links.map((link) => {
        return <Link href={link.toLocaleLowerCase()}>{link}</Link>;
      })}
    </Stack>
  );
};

const NavButtons = () => {
  const buttonsProps = {
    colorScheme: 'none',
    _active: {
      transform: 'scale(0.9)',
    },
    _focus: {
      outline: 'none',
    },
    w: '80px',
    h: '32px',
    size: 'sm',
    borderRadius: '12px',
  };

  return (
    <ButtonGroup w="25%" justifyContent="flex-end" isAttached>
      <Button {...buttonsProps} bgColor="black" textColor="white">
        Sign up
      </Button>
      <Button {...buttonsProps} bgColor="white" textColor="black">
        Log in
      </Button>
    </ButtonGroup>
  );
};

const HeaderLogo = () => {
  return (
    <Flex alignItems="center" w="25%" fontSize="20px">
      <Text>Transcendence</Text>
    </Flex>
  );
};
const HeaderNav = () => {
  return (
    <Stack bgColor="inherit" w="75%" direction="row">
      <NavLinks />
      <NavButtons />
    </Stack>
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
        <HeaderLogo />
        <HeaderNav />
      </Flex>
    </>
  );
};

export default Header;
