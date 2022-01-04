import { Box, Button } from "@chakra-ui/react";

function PlayButton() {
  return (
    <Box>
      <Button
        textColor="black"
        bg="white"
        fontSize={{ base: "sm", md: "lg", lg: "x-large" }}
        fontWeight="500"
        fontFamily="inter, sans-serif"
        w="4.2em"
        h="1.9em"
      >
        PLAY
      </Button>
    </Box>
  );
}

export default PlayButton;
