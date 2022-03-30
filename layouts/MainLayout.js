import { Container, Flex } from '@chakra-ui/layout';
import Image from 'next/image';
import React from 'react';
import { Footer } from '../components';

export const MainLayout = ({ children }) => {
	return (
		<>
			{/* <Navbar /> */}
			<Container>
				<Flex
					justify='center'
					align='center'
					marginTop={'1.5rem'}
					marginBottom='3.5rem'>
					<Image
						src='/logo-complite.svg'
						alt='logo adelante tu sentencia'
						width={'300px'}
						height='100px'></Image>
				</Flex>
			</Container>
			{children}
			<Footer />
		</>
	);
};
