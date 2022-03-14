import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

function PlayButton() {
  return (
    <Box>
      <Link href="/api/auth/login">
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
      </Link>
    </Box>
  );
}

export default PlayButton;
