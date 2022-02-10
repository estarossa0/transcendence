import {
  Box,
  Flex,
  Text,
  IconButton,
  useClipboard,
  useToast,
  Skeleton,
  Center,
  Button,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai/utils";
import React from "react";
import { MdContentCopy } from "react-icons/md";
import { userAtom } from ".";
import { User } from "hooks";
import DisplayNameBox from "./display-name";
import Link from "next/link";

const IdBox = ({ user }: { user: User | null }) => {
  const { onCopy } = useClipboard(user?.id || "");
  const toast = useToast({
    title: "Copied",
    variant: "subtle",
    status: "success",
    position: "bottom-right",
  });
  const Container = user ? Box : Skeleton;

  return (
    <Box mt="0" w="full">
      <Text fontSize="20px" color="#0496FF" fontFamily="ubuntu">
        ID
      </Text>
      <Container w={{ base: "full", lg: "70%" }}>
        <Flex
          mt={{ base: "0", md: "2" }}
          justify="space-between"
          w="full"
          p="1"
          pl="4"
          bgColor="#EDEDED"
          textColor="#595959"
          rounded="md"
        >
          <Text
            as="span"
            w="90%"
            p="0.5"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {user?.id}
          </Text>
          <IconButton
            onClick={() => {
              onCopy();
              toast.closeAll();
              toast();
            }}
            color="#FF0062"
            size="sm"
            aria-label="copy"
            icon={<MdContentCopy />}
          />
        </Flex>
      </Container>
    </Box>
  );
};

const LogoutButton = () => {
  return (
    <Flex w={{ base: "full", lg: "70%" }} marginTop="25px" justify="flex-end">
      <Link href="/api/auth/logout">
        <Button
          cursor="pointer"
          htmlFor="upload"
          as="label"
          _active={{
            transform: "scale(0.9)",
          }}
          _focus={{}}
          size="sm"
          m={{ base: "1", md: "3" }}
          textColor="#0496FF"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
        >
          Logout
        </Button>
      </Link>
    </Flex>
  );
};

const Information = () => {
  const user = useAtomValue(userAtom);

  return (
    <>
      <IdBox user={user} />
      <DisplayNameBox user={user} />
      <LogoutButton />
    </>
  );
};

const ProfileData = () => {
  return (
    <Box w="full">
      <Center flexDirection="column">
        <Box
          w={{ base: "full", sm: "60%", md: "full" }}
          mt={{ base: "0", md: "20px" }}
          mr={{ sm: "55px", md: "0" }}
          minW="200px"
        >
          <Information />
        </Box>
      </Center>
    </Box>
  );
};

export { ProfileData as default };
