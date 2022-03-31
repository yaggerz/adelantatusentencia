import {
	Box,
	Flex,
	Heading,
	Text,
	Image,
	Container,
	Stack,
	useColorModeValue,
	Icon,
} from '@chakra-ui/react';

export const SectionTwo = () => {
	return (
		<Box>
			<Container maxW={'7xl'} id='sobre-nosotros' mb='2rem'>
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
						<Blob
							w={'150%'}
							h={'150%'}
							position={'absolute'}
							top={'-20%'}
							left={0}
							zIndex={-1}
							color={'primary.main'}
						/>
						<Box
							position={'relative'}
							height={'350px'}
							rounded={'2xl'}
							boxShadow={'2xl'}
							width={'full'}
							overflow={'hidden'}>
							<Image
								alt={'Dos personas en un oficina celebrando'}
								fit={'cover'}
								align={'center'}
								w={'100%'}
								h={'100%'}
								src={
									'https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
								}
							/>
						</Box>
					</Flex>
					<Stack flex={1} spacing={{ base: 5, md: 10 }}>
						<Heading
							marginTop={{
								base: '3.5rem',
								md: 0,
								lg: 0,
							}}
							textAlign={{
								base: 'center',
								md: 'left',
							}}
							lineHeight={0.5}
							fontWeight={600}
							fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
							<Text
								as={'span'}
								position={'relative'}
								color='primary.main'>
								Nos va bien si te va bien
							</Text>
						</Heading>
						<Text
							fontSize={'1.3rem'}
							textAlign={{
								base: 'center',
								md: 'left',
								lg: 'left',
								xl: 'left',
							}}
							color={'gray.500'}
							width={{ base: '100%', md: '35vw' }}>
							Nosotros solo cobramos si el resultado del juicio es
							favorable. En caso de perder el juicio, no queda
							deuda con nosotros y no tenemos derecho a cobrar
							nada.
						</Text>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export const Blob = (props) => {
	return (
		<Icon
			opacity={'0.1'}
			width={'100%'}
			viewBox='0 0 578 440'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
				fill='currentColor'
			/>
		</Icon>
	);
};
