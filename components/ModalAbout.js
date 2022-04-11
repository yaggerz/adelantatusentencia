import React from 'react';
import {
	Modal,
	ModalContent,
	ModalBody,
	ModalFooter,
	ModalOverlay,
	Button,
	Heading,
	Text,
	Flex,
} from '@chakra-ui/react';
import { CustomText } from './CustomText';
import Image from 'next/image';

export const ModalAbout = ({ isOpen, onClose }) => {
	const handleClose = () => {
		onClose(false);
	};

	return (
		<Modal
			size={'3xl'}
			isOpen={isOpen}
			onClose={handleClose}
			scrollBehavior='inside'>
			<ModalOverlay />
			<ModalContent paddingTop={'3rem'} paddingLeft='1rem'>
				<ModalBody>
					<Heading fontSize={'2xl'} marginBottom='1.5rem'>
						Sobre nosotros
					</Heading>
					<CustomText as='p' mb='1rem'>
						Somos un equipo interdisciplinario integrado por
						abogados e ingenieros con una visión integral del
						derecho, las finanzas y la tecnología.
					</CustomText>
					<CustomText as='p' mb='1rem'>
						Somos el primer fondo de financiación de litigios 
						apalancado en la tecnología para proveeapital a 
						demandantes en juicios o arbitrajes.
					</CustomText>
					<Flex mt={'3rem'} alignItems={'center'} flexDir='column'>
						<Text as={'h4'} fontWeight={700}>
							Powered By:
						</Text>
						<a
							href='https://www.qanlex.com/'
							target={'_blank'}
							rel='noreferrer'>
							<Image
								src='/logo-qanlex.png'
								height={'120px'}
								width='360px'
							/>
						</a>
					</Flex>
				</ModalBody>

				<ModalFooter marginBottom={'1rem'}>
					<Button
						color='white'
						bg='primary.main'
						onClick={handleClose}>
						Cerrar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
