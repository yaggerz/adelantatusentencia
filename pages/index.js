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
