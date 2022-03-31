import { Box, Flex, Heading, Text, Container } from '@chakra-ui/react';

export const SectionOne = () => {
	return (
		<Box bg='primary.main' py='15vh'>
			<Container maxW={'7xl'}>
				<Flex justify='center'>
					<Box>
						<Heading
							textAlign={'center'}
							mb={4}
							color='white'
							fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
							¿Qué es La financiación de Litigios?
						</Heading>
						<Text
							width={{
								base: '100%',
								md: '50vw',
							}}
							textAlign={'center'}
							color='white'
							fontSize={'1.3rem'}>
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
