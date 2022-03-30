import {
	Box,
	chakra,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
	useColorModeValue,
	Button,
	Container,
	Flex,
} from '@chakra-ui/react';

function StatsCard(props) {
	const { title, handleClick } = props;
	return (
		<Stat
			px={{ base: 4, md: 8 }}
			py={'5'}
			shadow={'xl'}
			borderColor={useColorModeValue('gray.800', 'gray.500')}
			rounded={'lg'}>
			<Box>
				<StatNumber
					textAlign={'center'}
					fontSize={'2xl'}
					fontWeight={'medium'}>
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
		<Container as={'section'} maxW='7xl'>
			<Flex
				mx={'auto'}
				flexDir='column'
				justifyContent='center'
				pt={5}
				pb={'100px'}
				px={{ base: 2, sm: 12, md: 17 }}>
				<chakra.h1
					textAlign={'center'}
					fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
					py={10}
					fontWeight={'bold'}>
					¿Qué ventajas tiene?
				</chakra.h1>
				<SimpleGrid
					columns={{ base: 1, md: 2 }}
					spacing={{ base: 5, lg: 8 }}>
					<StatsCard
						title={'Para el demandante'}
						stat={'50,000 people'}
						handleClick={() => handleClick('client')}
					/>
					<StatsCard
						title={'Para el abogado'}
						stat={'30 different countries'}
						handleClick={() => handleClick('lawyer')}
					/>
				</SimpleGrid>
			</Flex>
		</Container>
	);
}
