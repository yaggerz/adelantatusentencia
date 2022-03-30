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

export const ModalClient = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size='xl'>
			<ModalOverlay />
			<ModalContent paddingTop={'20px'} paddingBottom='15px'>
				<ModalBody>
					<Heading as='h3' size={'md'}>
						Para el demandante
					</Heading>
					<Text my={'15px'}>
						Para quien sea dueño de un reclamo meritorio, nosotros
						te ayudamos a:
					</Text>
					<UnorderedList>
						<ListItem mb={'10px'}>
							<Box color={'primary.main'} as='span'>
								ADELANTAR CAPITAL: {'  '}
							</Box>
							Mantén tu liquidez sin necesidad de pagar los costos
							de un proceso sobre el cual no hay certeza en el
							resultado ni el tiempo del cobro. Además, en
							procesos ya avanzados se puede adelantar parte del
							monto estimado de la sentencia y así tener acceso a
							efectivo sin necesidad de esperar el resultado del
							juicio.
						</ListItem>
						<ListItem mb={'10px'}>
							<Box as='span' color='primary.main'>
								MITIGAR RIESGOS:{' '}
							</Box>
							El uso de nuestra financiación es una forma de
							diversificar el riesgo: resignando una pequeña
							porción de la potencial ganancia, te aseguras no
							perder capital en el juicio.
						</ListItem>
						<ListItem mb={'10px'}>
							<Box as='span' color='primary.main'>
								ORDENA SUS ESTADOS FINANCIEROS: {'  '}
							</Box>
							El litigio deja de figurar como un pasivo que
							consume caja para pagar costos legales y pasa a ser
							un activo a través del capital recibido. El
							demandante, además, al dejar de destinar capital en
							abogados puede invertir ese dinero en su propia
							actividad.
						</ListItem>
					</UnorderedList>
					<Text>
						Nuestro objetivo es ayudar a que todos puedan llevar a
						cabo sus reclamos meritorios, independientemente de su
						capital. Además, queremos ser socios que brinden
						previsibilidad sobre el cobro de estos reclamos,
						asegurando un camino claro en su cobro.
					</Text>
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
