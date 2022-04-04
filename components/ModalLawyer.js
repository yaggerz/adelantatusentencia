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
					<Flex justify={'space-between'}>
						<Heading as='h3' size={'md'}>
							Para el abogado:
						</Heading>
						<Box>
							<IconButton onClick={onClose}>
								<CloseIcon />
							</IconButton>
						</Box>
					</Flex>

					<Text my={'15px'}>
						actuamos como socios de los abogados al hacernos cargo
						de los honorarios profesionales que permitan llevar a
						cabo los litigios. de esta forma, los profesionales se
						aseguran de:
					</Text>
					<UnorderedList>
						<ListItem mb={'10px'}>
							<Box color={'primary.main'} as='span'>
								MANTENER CLIENTES:
							</Box>
							<CustomText>
								Al dejar de rechazar casos cuando los clientes
								no puedan hacerle frente al pago de sus
								honorarios.
							</CustomText>
						</ListItem>
						<ListItem mb={'10px'}>
							<Box as='span' color='primary.main'>
								MITIGAR RIESGOS:{' '}
							</Box>
							<CustomText>
								Al asegurarse pago upfront, se blinda frente al
								riesgo de no cobrar nada en caso de un resultado
								negativo.
							</CustomText>
						</ListItem>
						<ListItem mb={'10px'}>
							<Box as='span' color='primary.main'>
								OBTENER LIQUIDEZ: {'  '}
							</Box>
							<CustomText>
								Sin esperar el resultado del litigio.
							</CustomText>
						</ListItem>
					</UnorderedList>
					<CustomText>
						De nuestro lado, confiamos en los profesionales que
						llevan adelante los juicios, ya que no tomamos un rol
						activo sobre los procesos. al no existir una subrogación
						de derechos, la estrategia jurídica queda en manos de
						los profesionales y sus clientes.
					</CustomText>
					<CustomText>
						Creemos que toda demanda meritoria debe ser llevada a
						cabo por los mejores profesionales y que el capital deje
						de ser un impedimento en el acceso a la justicia.
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
