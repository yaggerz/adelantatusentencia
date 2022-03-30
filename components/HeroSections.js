import {
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Image,
} from '@chakra-ui/react';
import { TypeForm } from './TypeForm';

export function HeroSection() {
	return (
		<Container maxW={'7xl'}>
			<Stack
				minH={{ md: '100vh', xl: '100vh', lg: '100vh' }}
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: 'column', md: 'row' }}>
				<Stack flex={1} spacing={{ base: 5, md: 10 }}>
					<Heading
						lineHeight={1.1}
						fontWeight={600}
						fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
						<Text as={'span'} position={'relative'}>
							¿Tienes una demanda
						</Text>
						<br />
						<Text as={'span'} color={'primary.main'}>
							y quieres adelantar capital de la sentencia?
						</Text>
					</Heading>
					{/* <Text color={'gray.500'}>
						Tienes una demanda y quieres adelantar capital de la
						sentencia?
					</Text> */}
					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={{ base: 'column', sm: 'row' }}>
						<TypeForm>
							<Button
								as='span'
								size={'lg'}
								fontWeight={'normal'}
								px={6}
								color={'white'}
								bg={'primary.main'}
								_hover={{ bg: 'primary.light' }}>
								Cuentanos tu caso
							</Button>
						</TypeForm>
					</Stack>
				</Stack>
				<Flex
					flex={1}
					justify={'center'}
					align={'center'}
					position={'relative'}
					w={'full'}>
					{/* <Blob
						w={'150%'}
						h={'150%'}
						position={'absolute'}
						top={'-20%'}
						left={0}
						zIndex={-1}
						color={'primary.light'}
					/> */}
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
							src={
								'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
							}
						/>
					</Box>
				</Flex>
			</Stack>
		</Container>
	);
}
