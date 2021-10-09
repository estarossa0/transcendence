import { Box } from '@chakra-ui/react';
import Title from './title';
import Background from './background';

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
        overflow="hidden"
      >
        <Title />
        <Background />
      </Box>
    </main>
  );
}
