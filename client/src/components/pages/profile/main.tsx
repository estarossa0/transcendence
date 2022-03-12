import { Box, Text } from "@chakra-ui/react";
import { MotionContainer } from "components/motion/motionComponent";
import Profile from ".";
import SpheresBackground from "../home/background/spheres-background";

const ProfileContainer = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <MotionContainer
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      h={{ base: "full", md: "80%" }}
      pos="relative"
      mt={{ base: "90px", md: "50px" }}
      bgColor="white"
      maxW={{
        base: "full",
        md: "534px",
        lg: "container.md",
        "2xl": "container.lg",
      }}
      rounded={{ base: undefined, md: "md" }}
      borderTopRadius={{ base: "60px", md: undefined }}
    >
      <Text
        fontFamily="itim"
        fontSize="25px"
        p="3"
        display={{ base: "none", md: "block" }}
      >
        Your profile
      </Text>
      <Profile />
    </MotionContainer>
  );
};

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
        <SpheresBackground />
        <ProfileContainer />
      </Box>
    </main>
  );
}
