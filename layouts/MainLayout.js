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
					justify='center'
					align='center'
					marginTop={'1.5rem'}
					marginBottom='3.5rem'>
					<Image
						src='/logo-complite.svg'
						alt='logo adelante tu sentencia'
						width={'400px'}
						height='150px'></Image>
				</Flex>
				<Flex
					justify={{
						base: 'center',
						md: 'flex-end',
					}}
					marginTop='-3rem'
					color='gray.600'
					paddingRight={{ base: '0', md: '3rem' }}
					paddingBottom={'1rem'}
					cursor='pointer'>
					<Text onClick={() => setState(true)}>Sobre nosotros</Text>
				</Flex>
			</Container>
			{children}
			{/* <Footer /> */}
			<ModalAbout isOpen={state} onClose={setState} />
		</>
	);
};
