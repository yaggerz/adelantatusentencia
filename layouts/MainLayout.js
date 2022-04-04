import { Container, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import React, { useState } from 'react';
import { ModalAbout } from '../components/ModalAbout';

export const MainLayout = ({ children }) => {
	const [state, setState] = useState(false);

	return (
		<>
			<Container>
				<Flex
					justify={{
						base: 'center',
						md: 'flex-end',
					}}
					marginTop='1.5rem'
					color='gray.600'
					paddingRight={{ base: '0', md: '3rem' }}
					paddingBottom={'1rem'}
					cursor='pointer'>
					<Text onClick={() => setState(true)}>Sobre nosotros</Text>
				</Flex>
				<Flex
					justify='center'
					align='center'
					marginTop={'1.5rem'}
					marginBottom='3.5rem'>
					<Image
						src='/logo-complite.svg'
						alt='logo adelante tu sentencia'
						width={'500px'}
						height='200px'></Image>
				</Flex>
			</Container>
			{children}
			{/* <Footer /> */}
			<ModalAbout isOpen={state} onClose={setState} />
		</>
	);
};
