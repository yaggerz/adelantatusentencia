import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';

export const SectionOne = () => {
	return (
		<Box bg='primary.main' py='100px'>
			<Container maxW={'7xl'}>
				<Flex justify='center'>
					<Box>
						<Heading textAlign={'center'} mb={4} color='white'>
							¿Qué es la financiación de Litigios?
						</Heading>
						<Text textAlign={'center'} color='gray.100'>
							La financiación de litigios consiste en el adelanto
							de capital a un demandante, a cambio de una parte
							menor de la sentencia o acuerdo.
						</Text>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};
