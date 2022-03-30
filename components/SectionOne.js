import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';

export const SectionOne = () => {
	return (
		<Container maxW={'7xl'}>
			<Flex justify='center'>
				<Box>
					<Heading textAlign={'center'} mb={4}>
						¿Qué es la financiación de Litigios?
					</Heading>
					<Text textAlign={'center'}>
						La financiación de litigios consiste en el adelanto de
						capital a un demandante, a cambio de una parte menor de
						la sentencia o acuerdo.
					</Text>
				</Box>
			</Flex>
		</Container>
	);
};
