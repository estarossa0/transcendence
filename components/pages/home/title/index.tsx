import { Text, VStack } from '@chakra-ui/react';
import SubTitle from './sub-title';

function Title() {
  const TitleStackProps = {
    spacing: '0px',
    fontSize: { base: '40px', md: '70px' },
    fontFamily: 'alata, sans-serif',
    textColor: 'white',
    lineHeight: '1',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    w: 'fit-content',
  };

  return (
    <VStack {...TitleStackProps} pos="absolute">
      <Text pb={{ base: '15px', md: '20px' }}>Bringing</Text>
      <Text
        fontSize={{ base: '30px', md: '50px' }}
        fontFamily="'Press Start 2P'"
      >
        PONG
      </Text>
      <Text>back to life</Text>
      <SubTitle />
    </VStack>
  );
}

export default Title;
