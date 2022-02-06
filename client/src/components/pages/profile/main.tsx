import { Box, Container, Text, Center } from "@chakra-ui/react";
import Profile from ".";
import SpheresBackground from "../home/background/spheres-background";

const ProfileContainer = () => {
  return (
    <Container
      h="80%"
      pos="relative"
      mt="50px"
      bgColor="white"
      maxW="container.lg"
      rounded="md"
    >
      <Text fontFamily="itim" fontSize="25px" p="3">
        Your profile
      </Text>
      <Center>
        <Profile />
      </Center>
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
