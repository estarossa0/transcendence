import {
  Box,
  Flex,
  Text,
  IconButton,
  useClipboard,
  useToast,
  Skeleton,
} from "@chakra-ui/react";
import { useAtomValue } from "jotai/utils";
import React from "react";
import { MdContentCopy } from "react-icons/md";
import { userAtom } from ".";
import { User } from "hooks";
import DisplayNameBox from "./display-name";

const IdBox = ({ user }: { user: User | null }) => {
  const { onCopy } = useClipboard("auth|543543543543");
  const toast = useToast({
    title: "Copied",
    variant: "subtle",
    status: "success",
    position: "bottom-right",
  });
  const Container = user ? Box : Skeleton;

  return (
    <Box mt="25px" w="full">
      <Text fontSize="20px" color="#0496FF" fontFamily="ubuntu">
        ID
      </Text>
      <Container w="70%" rounded="md">
        <Flex
          mt="2"
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

const Information = () => {
  const user = useAtomValue(userAtom);

  return (
    <>
      <IdBox user={user} />
      <DisplayNameBox user={user} />
    </>
  );
};

const ProfileData = () => {
  return (
    <Box w="60%">
      <Box w="full" mt="20px">
        <Information />
      </Box>
    </Box>
  );
};

export { ProfileData as default };
