import player1 from '../../../../public/player1.png';
import player2 from '../../../../public/player2.png';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import Ball from './ball';

function PongGameBackground() {
  const playersSize = '460px';

  return (
    <Box>
      <Box
        pos="absolute"
        bottom="-5%"
        left="10%"
        width={playersSize}
        height={playersSize}
      >
        <Image layout="responsive" src={player1} />
      </Box>
      <Box
        pos="absolute"
        top="35%"
        right="10%"
        width={playersSize}
        height={playersSize}
      >
        <Image layout="responsive" src={player2} />
      </Box>
      <Ball w="100px" pos="absolute" top="50%" left="50%" />
    </Box>
  );
}

export default PongGameBackground;
