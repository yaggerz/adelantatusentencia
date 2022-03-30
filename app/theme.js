// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	primary: {
		light: '#2596be',
		main: '#0274be',
	},
	white: '#ffffff',
};

const fonts = {
	heading: 'Roboto',
	body: 'Roboto',
};

export const theme = extendTheme({
	colors,
	fonts,
});
