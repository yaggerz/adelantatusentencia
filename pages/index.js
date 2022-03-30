import Head from 'next/head';
import React, { useState } from 'react';
import {
	Footer,
	HeroSection,
	ModalClient,
	ModalLawyer,
	SectionOne,
	SectionThree,
} from '../components';
import { SectionTwo } from '../components/SectionTwo';

const Home = () => {
	const [openClientModal, setOpenClientModal] = useState(false);
	const [openLawyerModal, setOpenLawyermodal] = useState(false);

	const handleToggle = (type) => {
		if (type == 'client') {
			return setOpenClientModal(true);
		} else {
			return setOpenLawyermodal(true);
		}
	};

	const handleCloseClient = () => {
		setOpenClientModal(false);
	};

	const handleCloseLawyer = () => {
		setOpenLawyermodal(false);
	};

	return (
		<>
			<Head>
				<title>Adelanta tu sentencia</title>
			</Head>
			<HeroSection />
			<SectionOne />
			<SectionTwo />
			<SectionThree onClick={handleToggle} />
			<Footer />
			<ModalClient isOpen={openClientModal} onClose={handleCloseClient} />
			<ModalLawyer isOpen={openLawyerModal} onClose={handleCloseLawyer} />
		</>
	);
};

export default Home;
