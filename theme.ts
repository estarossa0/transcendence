import { extendTheme } from '@chakra-ui/react';

const noneVariant = {
  none: {
    _focus: {
      outline: 'none',
      boxShadow: 'none',
      colorScheme: 'none',
    },
  },
};
const theme = extendTheme({
  components: {
    Button: {
      variants: noneVariant,
      defaultProps: {
        variant: 'none',
      },
    },
    Link: {
      variants: noneVariant,
      defaultProps: {
        variant: 'none',
      },
    },
  },
});

export { theme };
