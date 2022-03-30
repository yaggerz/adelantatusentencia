import React from 'react';
import { Footer, Navbar } from '../components';

export const MainLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};
