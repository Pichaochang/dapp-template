import './styles/global.scss';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import RootProvider from './providers/root';
import React from 'react';

import { createRoot } from 'react-dom/client';
import 'virtual:svg-icons-register'


import App from './app';
import { StoresProvider, stores } from './store';

const container = document.querySelector('#root');
const root = createRoot(container as HTMLElement);

root.render(
	<BrowserRouter>
		<RootProvider>
			<StoresProvider value={stores}>
				<App />
			</StoresProvider>
		</RootProvider>
	</BrowserRouter>
);
