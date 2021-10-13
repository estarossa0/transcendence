import { Text, VStack } from '@chakra-ui/react';
import PlayButton from '../play-button';
import SubTitle from './sub-title';

function Title() {
  const TitleStackProps = {
    spacing: '0px',
    fontSize: {
      base: '40px',
      sm: '60px',
      md: '80px',
      lg: '100px',
      xl: '130px',
    },
    fontFamily: 'inter, sans-serif',
    textColor: 'white',
    lineHeight: '1',
    top: { base: '30%', md: '45%' },
    left: '50%',
    transform: 'translate(-50%, -50%)',
    w: 'fit-content',
  };

  return (
    <VStack {...TitleStackProps} pos="absolute">
      <Text pb="0.2em">Bringing</Text>
      <Text
        fontSize={{ base: '25px', sm: '40px', md: '55px', lg: '70px' }}
        fontFamily="'Press Start 2P'"
      >
        PONG
      </Text>
      <Text>back to life</Text>
      <SubTitle />
      <PlayButton />
    </VStack>
  );
}

export default Title;
