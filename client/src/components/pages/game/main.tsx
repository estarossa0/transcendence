import { Box, BoxProps, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
export const MotionBox = motion<BoxProps>(Box);

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
        <Text
          textColor="white"
          fontSize="40px"
          pos="absolute"
          top="50%"
          right="50%"
        >
          GAME
        </Text>
      </Box>
    </main>
  );
}
