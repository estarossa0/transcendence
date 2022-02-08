import {
  Box,
  Avatar,
  Button,
  Input,
  Text,
  useBreakpointValue,
  Center,
  Flex,
} from "@chakra-ui/react";
import { useUpdateAvatarMutation } from "hooks/updateAvatar";
import { useDeleteAvatarMutation } from "hooks/useDeleteAvatarMutation";
import { useAtomValue } from "jotai/utils";
import { ChangeEvent, useState } from "react";
import { userAtom } from ".";

const AvatarConfig = () => {
  const [, updateAvatar] = useUpdateAvatarMutation();
  const [, deleteAvatar] = useDeleteAvatarMutation();
  const user = useAtomValue(userAtom);
  const [time, setTime] = useState(new Date().getTime());
  const [error, setError] = useState<string | null>(null);
  const size = useBreakpointValue({ base: "xs", md: "sm" });
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "image/png" && file.type !== "image/jpeg") {
        setError("We only support PNG, JPEG");
        return;
      }
      if (file.size >= 1000000) {
        setError("Max size is 1MB");
        return;
      }
      updateAvatar({ file: file }).finally(() => setTime(new Date().getTime()));
      setError(null);
    }
  };

  return (
    <Center flexDirection="column">
      <Avatar
        borderRadius="3xl"
        boxSize="210px"
        alt="avatar"
        src={
          user
            ? `${process.env.NEXT_PUBLIC_API_URL}/assets/${user?.id}?t=${time}`
            : ""
        }
      />
      {error && (
        <Text pl="16px" fontSize="12px" pos="absolute" color="red">
          {error}
        </Text>
      )}
      <Center justifyContent="space-evenly" mt="10px">
        <Button
          cursor="pointer"
          htmlFor="upload"
          as="label"
          _active={{
            transform: "scale(0.9)",
          }}
          _focus={{}}
          size={size}
          m={{ base: "1", md: "3" }}
          textColor="#0496FF"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
        >
          Upload
        </Button>
        <Input
          onChange={handleUpload}
          display="none"
          type="file"
          id="upload"
          accept="image/*"
        />
        <Button
          onClick={() =>
            deleteAvatar().finally(() => setTime(new Date().getTime()))
          }
          _active={{
            transform: "scale(0.9)",
          }}
          _focus={{}}
          size={size}
          m={{ base: "1", md: "3" }}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
          textColor="#757780"
        >
          Remove
        </Button>
      </Center>
    </Center>
  );
};

const TabsPanels = () => {
  return (
    <Flex align="flex-start" flexDirection={{ base: "row", md: "column" }}>
      <Button _focus={{}} size="md" m="3" textColor="#0496FF">
        Information
      </Button>
      <br />
      <Button _focus={{}} size="md" m="3" textColor="#757780">
        Friends
      </Button>
    </Flex>
  );
};

const ProfileAvatarAndButtons = () => {
  return (
    <Box m="auto" mb="0">
      <AvatarConfig />
      <TabsPanels />
    </Box>
  );
};

export { ProfileAvatarAndButtons as default };
