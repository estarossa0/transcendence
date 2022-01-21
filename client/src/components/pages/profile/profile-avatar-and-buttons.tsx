import { Box, Img, Button } from "@chakra-ui/react";

const AvatarConfig = () => {
  return (
    <Box>
      <Img
        rounded="3xl"
        boxSize="210px"
        alt="avatar"
        src="https://avatars.githubusercontent.com/u/57002508?v=4"
      />
      <Box ml="10px" mt="10px">
        <Button
          _active={{
            transform: "scale(0.9)",
          }}
          _focus={{}}
          size="sm"
          m="3"
          textColor="#0496FF"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
        >
          Upload
        </Button>

        <Button
          _active={{
            transform: "scale(0.9)",
          }}
          _focus={{}}
          size="sm"
          m="3"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
          textColor="#757780"
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

const TabsPanels = () => {
  return (
    <Box>
      <Button _focus={{}} size="md" m="3" textColor="#0496FF">
        Information
      </Button>
      <br />
      <Button _focus={{}} size="md" m="3" textColor="#757780">
        Friends
      </Button>
    </Box>
  );
};

const ProfileAvatarAndButtons = () => {
  return (
    <Box>
      <AvatarConfig />
      <TabsPanels />
    </Box>
  );
};

export { ProfileAvatarAndButtons as default };
