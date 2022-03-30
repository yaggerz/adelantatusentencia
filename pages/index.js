import Head from 'next/head';
import React from 'react';
import {
	HeroSection,
	ModalClient,
	ModalLawyer,
	SectionOne,
	SectionThree,
} from '../components';
import { SectionTwo } from '../components/SectionTwo';
import { MainLayout as Layout } from '../layouts';
import { useModal } from '../hooks';

const Home = () => {
	const {
		handleToggle,
		handleCloseClient,
		handleCloseLawyer,
		openClientModal,
		openLawyerModal,
	} = useModal();

	return (
		<>
			<Layout>
				<Head>
					<title>Adelanta tu sentencia</title>
					<meta charSet='utf-8' />
					<meta
						name='description'
						content='La financiación de litigios consiste en el adelanto de capital a un demandante, a cambio de una parte menor de la sentencia o acuerdo.'
					/>
					<meta name='author' content='qanlex' />
					<meta name='copyright' content='qanlex' />
					<meta name='robots' content='index' />
					<meta name='robots' content='follow' />
					<meta
						name='keywords'
						content='Financiacion de ligitigios'
					/>
					<link rel='icon' href='/logo.svg' type='image/x-icon' />
				</Head>
				<HeroSection />
				<SectionOne />
				<SectionTwo />
				<SectionThree onClick={handleToggle} />
				<ModalClient
					isOpen={openClientModal}
					onClose={handleCloseClient}
				/>
				<ModalLawyer
					isOpen={openLawyerModal}
					onClose={handleCloseLawyer}
				/>
			</Layout>
		</>
	);
};

export default Home;
