import { Text } from '@chakra-ui/layout';

const Logo = () => {
  return (
    <Text
      position="fixed"
      textColor="white"
      fontFamily="pridi, serif"
      top={{ base: '10px', md: '15px' }}
      left={{ base: '12px', md: '24px' }}
      fontSize={{ base: '17px', md: '20px', lg: '25px' }}
    >
      Transcendence
    </Text>
  );
};

export default Logo;
