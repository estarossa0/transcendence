import { Box, Container, Text, Center } from "@chakra-ui/react";
import Profile from ".";
import SpheresBackground from "../home/background/spheres-background";

const ProfileContainer = () => {
  return (
    <Container
      h={{ base: "full", md: "80%" }}
      pos="relative"
      mt={{ base: "90px", md: "50px" }}
      bgColor="white"
      maxW={{ base: "535px", lg: "container.md", "2xl": "container.lg" }}
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
    </Container>
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
