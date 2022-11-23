import { AppProps } from 'next/app';

// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white'
      }
    }
  }
});

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
