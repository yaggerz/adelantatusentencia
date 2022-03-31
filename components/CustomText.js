import { Text } from '@chakra-ui/react';

export const CustomText = ({
	children,
	as = 'span',
	mb = '0',
	textIndent = '0',
}) => (
	<Text
		as={as}
		lineHeight={'1.7rem'}
		marginBottom={mb}
		style={{
			textIndent: textIndent,
		}}>
		{children}
	</Text>
);
