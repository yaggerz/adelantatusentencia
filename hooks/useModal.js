import { useState } from 'react';

export const useModal = () => {
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

	return {
		openClientModal,
		openLawyerModal,
		handleToggle,
		handleCloseClient,
		handleCloseLawyer,
	};
};
