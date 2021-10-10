import { Box, Button } from '@chakra-ui/react';

function PlayButton() {
  return (
    <Box>
      <Button
        mt={{ base: '10px', md: '20px', lg: '30' }}
        textColor="black"
        bg="white"
        fontSize={{ base: 'sm', md: 'lg', lg: 'x-large' }}
        fontWeight="500"
        fontFamily="inter, sans-serif"
        w="4em"
        h="2em"
      >
        PLAY
      </Button>
    </Box>
  );
}

export default PlayButton;
