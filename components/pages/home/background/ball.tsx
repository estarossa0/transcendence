import ball from '../../../../public/ball.svg';
import Image from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

function Ball(props: BoxProps) {
  return (
    <Box {...props}>
      <Image layout="responsive" src={ball} />
    </Box>
  );
}

export default Ball;
