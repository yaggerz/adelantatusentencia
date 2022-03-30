import {
	Box,
	chakra,
	SimpleGrid,
	Stat,
	StatNumber,
	Button,
	Container,
	Flex,
	Image,
} from '@chakra-ui/react';

function StatsCard(props) {
	const { title, handleClick, urlImage } = props;
	return (
		<Stat
			onClick={handleClick}
			px={{ base: 4, md: 8 }}
			cursor='pointer'
			py={'5'}
			shadow={'xl'}
			bg='white'
			rounded={'lg'}>
			<Box display={'grid'} placeItems={'center'}>
				<Image height={'80px'} src={urlImage} />
				<br />
				<StatNumber
					textAlign={'center'}
					fontSize={'2xl'}
					fontWeight={'medium'}
					color='primary.main'>
					{title}
				</StatNumber>
				<Box mt={15} display='flex' justifyContent={'center'}>
					<Button
						onClick={handleClick}
						bg={'primary.main'}
						color={'white'}>
						Ver más
					</Button>
				</Box>
			</Box>
		</Stat>
	);
}

export function SectionThree({ onClick }) {
	const handleClick = (type) => {
		onClick(type);
	};

	return (
		<Box
			marginBottom={{
				base: '20rem',
				md: '5rem',
				lg: '5rem',
				xl: '5rem',
			}}>
			<Container h='60vh' as={'section'} maxW='7xl' id='beneficios'>
				<Flex
					mx={'auto'}
					flexDir='column'
					justifyContent='center'
					px={{ base: 2, sm: 12, md: 17 }}>
					<chakra.h1
						textAlign={'center'}
						fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
						pt='4rem'
						pb='3rem'
						fontWeight={'bold'}
						color='primary.main'>
						¿Qué ventajas tiene?
					</chakra.h1>
					<SimpleGrid
						columns={{ base: 1, md: 2 }}
						spacing={{ base: 5, lg: 8 }}>
						<StatsCard
							title={'Para el demandante'}
							stat={'50,000 people'}
							handleClick={() => handleClick('client')}
							urlImage={'./personal-information.png'}
						/>
						<StatsCard
							title={'Para el abogado'}
							stat={'30 different countries'}
							urlImage={'/agreement.png'}
							handleClick={() => handleClick('lawyer')}
						/>
					</SimpleGrid>
				</Flex>
			</Container>
		</Box>
	);
}
