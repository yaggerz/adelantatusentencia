import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../app/theme';
import '@fontsource/roboto';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme} resetCSS>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
