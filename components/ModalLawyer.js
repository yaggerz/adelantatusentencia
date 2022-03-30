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

export const ModalLawyer = ({ isOpen, onClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size='xl'
			scrollBehavior='inside'>
			<ModalOverlay />
			<ModalContent paddingTop={'20px'} paddingBottom='15px'>
				<ModalBody>
					<Heading as='h3' size={'md'}>
						Para el abogado:
					</Heading>
					<Text my={'15px'}>
						Actuamos como socios de los abogados al hacernos cargo
						de los honorarios profesionales que permitan llevar a
						cabo los litigios. De esta forma, los profesionales se
						aseguran de:
					</Text>
					<UnorderedList>
						<ListItem mb={'10px'}>
							<Box color={'primary.main'} as='span'>
								MANTENER CLIENTES:
							</Box>
							Al dejar de rechazar casos cuando los clientes no
							puedan hacerle frente al pago de sus honorarios.
						</ListItem>
						<ListItem mb={'10px'}>
							<Box as='span' color='primary.main'>
								MITIGAR RIESGOS:{' '}
							</Box>
							Al asegurarse pago upfront, se blinda frente al
							riesgo de no cobrar nada en caso de un resultado
							negativo.
						</ListItem>
						<ListItem mb={'10px'}>
							<Box as='span' color='primary.main'>
								OBTENER LIQUIDEZ: {'  '}
							</Box>
							Sin esperar el resultado del litigio.
						</ListItem>
					</UnorderedList>
					<Text>
						De nuestro lado, confiamos en los profesionales que
						llevan adelante los juicios, ya que no tomamos un rol
						activo sobre los procesos. Al no existir una subrogación
						de derechos, la estrategia jurídica queda en manos de
						los profesionales y sus clientes.
					</Text>
					<Text>
						Creemos que toda demanda meritoria debe ser llevada a
						cabo por los mejores profesionales y que el capital deje
						de ser un impedimento en el acceso a la Justicia.
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
