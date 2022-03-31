import React from 'react';
import {
	Modal,
	ModalContent,
	ModalBody,
	ModalFooter,
	ModalOverlay,
	Button,
	Heading,
} from '@chakra-ui/react';
import { CustomText } from './CustomText';

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
						derecho, las finanzas y la tecnología. juntos estamos
						construyendo el primer fondo tecnológico de litigation
						finance operando en el derecho continental.
					</CustomText>
					<CustomText as='p' mb='1rem'>
						La financiación de litigios tiene un largo historial en
						el derecho anglosajón, con varios fondos operando en
						estos países. en qanlex nuestra misión es proveer
						capital para llevar a cabo demandas meritorias en todos
						los países con derecho continental, con un foco especial
						en latinoamérica.
					</CustomText>
					<CustomText as='p' mb='1rem'>
						Nuestro algoritmo de screening, case miner, rastrea,
						filtra y selecciona entre millones de demandas. de esta
						manera, estamos llegando a regiones inexploradas y
						escalando nuestra solución a nuevos países, buscando los
						mejores reclamos que puedan beneficiarse de nuestro
						financiamiento.
					</CustomText>
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
