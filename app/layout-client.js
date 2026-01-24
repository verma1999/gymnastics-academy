'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayoutClient({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			{children}
			<Footer />
		</ThemeProvider>
	);
}
