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

export const ModalClient = ({ isOpen, onClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size='4xl'
			scrollBehavior='inside'>
			<ModalOverlay />
			<ModalContent
				// bg='primary.main'
				paddingTop={'30px'}
				paddingBottom='15px'>
				<ModalBody>
					<Heading as='h3' size={'md'}>
						{'Para el demandante'.toLocaleUpperCase()}
					</Heading>
					<Text my={'15px'}>
						PARA QUIEN SEA DUEÑO DE UN RECLAMO MERITORIO, NOSOTROS
						TE AYUDAMOS A:
					</Text>
					<UnorderedList>
						<ListItem mb={'15px'}>
							<Box color={'primary.main'} as='span'>
								ADELANTAR CAPITAL:{' '}
							</Box>
							<CustomText>
								{'Mantén tu liquidez sin necesidad de pagar los costos de un proceso sobre el cual no hay certeza en el resultado ni el tiempo del cobro. Además, en procesos ya avanzados se puede adelantar parte del monto estimado de la sentencia y así tener acceso a efectivo sin necesidad de esperar el resultado del juicio.'.toLocaleUpperCase()}
							</CustomText>
						</ListItem>
						<ListItem mb={'15px'}>
							<Box as='span' color='primary.main'>
								MITIGAR RIESGOS:{' '}
							</Box>
							<CustomText>
								{'El uso de nuestra financiación es una forma de diversificar el riesgo: resignando una pequeño porción de la potencial ganancia, te aseguras no perder capital en el juicio.'.toLocaleUpperCase()}
							</CustomText>
						</ListItem>
						<ListItem mb={'15px'}>
							<Box as='span' color='primary.main'>
								ORDENA SUS ESTADOS FINANCIEROS: {'  '}
							</Box>
							<CustomText>
								EL LITIGIO DEJA DE FIGURAR COMO UN PASIVO QUE
								CONSUME CAJA PARA PAGAR COSTOS LEGALES Y PASA A
								SER UN ACTIVO A TRAVÉS DEL CAPITAL RECIBIDO. EL
								DEMANDANTE, ADEMÁS, AL DEJAR DE DESTINAR CAPITAL
								EN ABOGADOS PUEDE INVERTIR ESE DINERO EN SU
								PROPIA ACTIVIDAD.
							</CustomText>
						</ListItem>
					</UnorderedList>
					<CustomText>
						NUESTRO OBJETIVO ES AYUDAR A QUE TODOS PUEDAN LLEVAR A
						CABO SUS RECLAMOS MERITORIOS, INDEPENDIENTEMENTE DE SU
						CAPITAL. ADEMÁS, QUEREMOS SER SOCIOS QUE BRINDEN
						PREVISIBILIDAD SOBRE EL COBRO DE ESTOS RECLAMOS,
						ASEGURANDO UN CAMINO CLARO EN SU COBRO.
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
