import { Box, Text, Skeleton } from "@chakra-ui/react";
import React from "react";
import { User } from "hooks";
import DisplayNameBoxForm from "./display-name-form";

const DisplayNameBox = ({ user }: { user: User | null }) => {
  const Container = user ? Box : Skeleton;

  return (
    <Box mt="25px" w="full">
      <Text fontSize="20px" color="#0496FF" fontFamily="ubuntu">
        Display name
      </Text>
      <Container w={{ base: "full", lg: "70%" }} rounded="md">
        <DisplayNameBoxForm user={user} />
      </Container>
    </Box>
  );
};

export { DisplayNameBox as default };
