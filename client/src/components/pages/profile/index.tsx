import ProfileAvatarAndButtons from "./profile-avatar-and-buttons";
import ProfileData from "./profile-data";
import { User, useGetUserQuery } from "hooks";
import { useUser } from "@auth0/nextjs-auth0";
import { Box, Stack } from "@chakra-ui/react";
import { atom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { useEffect } from "react";

const userAtom = atom<null | User>(null);

const Devider = () => (
  <Box>
    <Box mx="6" w="2px" h="90%" bgColor="#0496FF" />
  </Box>
);

const Profile = () => {
  const userContext = useUser();
  const [result] = useGetUserQuery({
    variables: { userId: userContext.user?.sub || "" },
    pause: !!userContext.error || userContext.isLoading,
  });
  const updateUser = useUpdateAtom(userAtom);
  useEffect(() => {
    if (result.data?.user) updateUser(result.data.user);
  }, [result.data?.user, updateUser]);

  if (userContext.error || result.error)
    return (
      <Box>
        {result.error ? result.error.message : userContext.error?.message}
      </Box>
    );

  return (
    <Stack
      w="100%"
      h="80%"
      mx={{ base: undefined, lg: "45px" }}
      direction={{ base: "column", md: "row" }}
      position="relative"
      bottom={{ base: "65px", md: "unset" }}
    >
      <ProfileAvatarAndButtons />
      <Devider />
      <ProfileData />
    </Stack>
  );
};

export { Profile as default, userAtom };
