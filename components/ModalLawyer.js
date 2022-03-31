import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Text,
	UnorderedList,
	ListItem,
	Box,
	Heading,
	ModalFooter,
	Button,
} from '@chakra-ui/react';
import { TypeForm } from '../components';
import { CustomText } from './CustomText';

export const ModalLawyer = ({ isOpen, onClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size='3xl'
			scrollBehavior='inside'>
			<ModalOverlay />
			<ModalContent paddingTop={'30px'} paddingBottom='15px'>
				<ModalBody>
					<Heading as='h3' size={'md'}>
						{'Para el abogado:'.toUpperCase()}
					</Heading>
					<Text my={'15px'}>
						ACTUAMOS COMO SOCIOS DE LOS ABOGADOS AL HACERNOS CARGO
						DE LOS HONORARIOS PROFESIONALES QUE PERMITAN LLEVAR A
						CABO LOS LITIGIOS. DE ESTA FORMA, LOS PROFESIONALES SE
						ASEGURAN DE:
					</Text>
					<UnorderedList>
						<ListItem mb={'10px'}>
							<Box color={'primary.main'} as='span'>
								MANTENER CLIENTES:
							</Box>
							<CustomText>
								AL DEJAR DE RECHAZAR CASOS CUANDO LOS CLIENTES
								NO PUEDAN HACERLE FRENTE AL PAGO DE SUS
								HONORARIOS.
							</CustomText>
						</ListItem>
						<ListItem mb={'10px'}>
							<Box as='span' color='primary.main'>
								MITIGAR RIESGOS:{' '}
							</Box>
							<CustomText>
								AL ASEGURARSE PAGO UPFRONT, SE BLINDA FRENTE AL
								RIESGO DE NO COBRAR NADA EN CASO DE UN RESULTADO
								NEGATIVO.
							</CustomText>
						</ListItem>
						<ListItem mb={'10px'}>
							<Box as='span' color='primary.main'>
								OBTENER LIQUIDEZ: {'  '}
							</Box>
							<CustomText>
								SIN ESPERAR EL RESULTADO DEL LITIGIO.
							</CustomText>
						</ListItem>
					</UnorderedList>
					<CustomText>
						DE NUESTRO LADO, CONFIAMOS EN LOS PROFESIONALES QUE
						LLEVAN ADELANTE LOS JUICIOS, YA QUE NO TOMAMOS UN ROL
						ACTIVO SOBRE LOS PROCESOS. AL NO EXISTIR UNA SUBROGACIÓN
						DE DERECHOS, LA ESTRATEGIA JURÍDICA QUEDA EN MANOS DE
						LOS PROFESIONALES Y SUS CLIENTES.
					</CustomText>
					<CustomText>
						CREEMOS QUE TODA DEMANDA MERITORIA DEBE SER LLEVADA A
						CABO POR LOS MEJORES PROFESIONALES Y QUE EL CAPITAL DEJE
						DE SER UN IMPEDIMENTO EN EL ACCESO A LA JUSTICIA.
					</CustomText>
				</ModalBody>
				<ModalFooter>
					<TypeForm>
						<Button as={'span'} bg='primary.main' color='white'>
							Contanos tu caso
						</Button>
					</TypeForm>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
