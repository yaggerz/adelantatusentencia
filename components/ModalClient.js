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
	Flex,
	IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
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
					<Flex justify={'space-between'}>
						<Heading as='h3' size={'md'}>
							{'Para el demandante'.toLocaleUpperCase()}
						</Heading>
						<Box>
							<IconButton onClick={onClose}>
								<CloseIcon />
							</IconButton>
						</Box>
					</Flex>
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
								{
									'Mantén tu liquidez sin necesidad de pagar los costos de un proceso sobre el cual no hay certeza en el resultado ni el tiempo del cobro. Además, en procesos ya avanzados se puede adelantar parte del monto estimado de la sentencia y así tener acceso a efectivo sin necesidad de esperar el resultado del juicio.'
								}
							</CustomText>
						</ListItem>
						<ListItem mb={'15px'}>
							<Box as='span' color='primary.main'>
								MITIGAR RIESGOS:{' '}
							</Box>
							<CustomText>
								{
									'El uso de nuestra financiación es una forma de diversificar el riesgo: resignando una pequeño porción de la potencial ganancia, te aseguras no perder capital en el juicio.'
								}
							</CustomText>
						</ListItem>
						<ListItem mb={'15px'}>
							<Box as='span' color='primary.main'>
								ORDENA SUS ESTADOS FINANCIEROS: {'  '}
							</Box>
							<CustomText>
								El litigio deja de figurar como un pasivo que
								consume caja para pagar costos legales y pasa a
								ser un activo a través del capital recibido. el
								demandante, además, al dejar de destinar capital
								en abogados puede invertir ese dinero en su
								propia actividad.
							</CustomText>
						</ListItem>
					</UnorderedList>
					<CustomText>
						Nuestro objetivo es ayudar a que todos puedan llevar a
						cabo sus reclamos meritorios, independientemente de su
						capital. además, queremos ser socios que brinden
						previsibilidad sobre el cobro de estos reclamos,
						asegurando un camino claro en su cobro.
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
