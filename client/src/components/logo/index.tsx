import { Text } from "@chakra-ui/layout";

const Logo = () => {
  return (
    <Text
      position="fixed"
      textColor="white"
      fontFamily="pridi, serif"
      top={{ base: "10px", sm: "15px", md: "15px" }}
      left={{ base: "12px", sm: "20px", md: "24px" }}
      fontSize={["17px", "20px", "23px", "27px", "30px", "35px"]}
    >
      Transcendence
    </Text>
  );
};

export default Logo;
