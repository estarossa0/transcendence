import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import Ball from './ball';

function PongGameBackground() {
  const playersSize = { base: '150px', sm: '170px', md: '300px', lg: '460px' };

  return (
    <Box>
      <Box
        pos="absolute"
        bottom={{ base: '18%', sm: '15%', md: '-5%' }}
        left={{ base: '-5%', sm: '15%', md: '10%' }}
        width={playersSize}
        height={playersSize}
      >
        <Image width="1920" height="1080" src="/player1.png" />
      </Box>
      <Box
        pos="absolute"
        top={{ base: '47%', sm: '40%', md: '35%' }}
        right={{ base: '-5%', sm: '10%', md: '10%' }}
        width={playersSize}
        height={playersSize}
      >
        <Image width="1920" height="1080" src="/player2.png" />
      </Box>
      <Ball
        w={{ base: '40px', md: '60px', lg: '75px' }}
        pos="absolute"
        top="55%"
        left="45%"
      />
    </Box>
  );
}

export default PongGameBackground;
