import sphere from '../../../../public/sphere.svg';
import Image from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

function Sphere(props: BoxProps) {
  return (
    <Box {...props}>
      <Image layout="responsive" src={sphere} />
    </Box>
  );
}

export default Sphere;
