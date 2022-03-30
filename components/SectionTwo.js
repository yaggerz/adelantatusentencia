import {
	Box,
	Flex,
	Heading,
	Text,
	Image,
	Container,
	Stack,
} from '@chakra-ui/react';

export const SectionTwo = () => {
	return (
		<Container maxW={'7xl'}>
			<Stack
				h={'100vh'}
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: 'column', md: 'row' }}>
				<Flex
					flex={1}
					justify={'center'}
					align={'center'}
					position={'relative'}
					w={'full'}>
					<Box
						position={'relative'}
						height={'350px'}
						rounded={'2xl'}
						boxShadow={'2xl'}
						width={'full'}
						overflow={'hidden'}>
						<Image
							alt={'Hero Image'}
							fit={'cover'}
							align={'center'}
							w={'100%'}
							h={'100%'}
							src={'./sectionTwoImage.jpg'}
						/>
					</Box>
				</Flex>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Heading
						lineHeight={1.1}
						fontWeight={600}
						fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
						<Text as={'span'} position={'relative'}>
							Nos va bien si te va bien
						</Text>
					</Heading>
					<Text color={'gray.500'}>
						Nosotros solo cobramos si el resultado del juicio es
						favorable. En caso de perder el juicio, no queda deuda
						con nosotros y no tenemos derecho a cobrar nada.
					</Text>
				</Stack>
			</Stack>
		</Container>
	);
};
