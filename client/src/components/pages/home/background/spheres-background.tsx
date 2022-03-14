import { Box } from "@chakra-ui/react";
import Sphere from "./sphere";

function SpheresBackground() {
  return (
    <Box className="spheres-background">
      <Sphere
        pos="absolute"
        top="5%"
        right="10%"
        w={["0px", "380px"]}
        h={["0px", "380px"]}
      />
      <Sphere
        pos="absolute"
        bottom="-5%"
        left="-80px"
        w={["0px", "0px", "380px"]}
        h={["0px", "0px", "380px"]}
      />
      <Sphere
        pos="absolute"
        bottom={["25%", "5%"]}
        right={["-60px", "3%"]}
        w="180px"
        h="180px"
      />
    </Box>
  );
}

export default SpheresBackground;
