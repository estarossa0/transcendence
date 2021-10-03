import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        none: {
          _focus: {
            outline: 'none',
            boxShadow: 'none',
            colorScheme: 'none',
          },
        },
      },
      defaultProps: {
        variant: 'none',
      },
    },
  },
});

export { theme };
