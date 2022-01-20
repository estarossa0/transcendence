import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../theme";
import { UserProvider } from "@auth0/nextjs-auth0";
import { createClient, Provider as UrqlProvider } from "urql";

const client = createClient({
  url: `/api/proxy/graphql`,
});

function MyApp({ Component, pageProps }) {
  return (
    <UrqlProvider value={client}>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
    </UrqlProvider>
  );
}

export default MyApp;
