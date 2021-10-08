import { Box } from '@chakra-ui/react';
import Title from './title';

export default function Main() {
  return (
    <main>
      <Box
        zIndex={-1}
        pos="absolute"
        className="main-container"
        w="100vw"
        h="100vh"
        bgColor="#081120"
      >
        <Title />
      </Box>
    </main>
  );
}
