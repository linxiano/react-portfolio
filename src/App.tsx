import React, { useState } from 'react';
import './styles.scss';
import { InteractiveBackground } from './Components/InteractiveBackground/InteractiveBackground';
import { ContentBox } from './Components/ContentBox/ContentBox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './Pages/HomeLayout/MainLayout';
import { WorkLayout } from './Pages/WorkLayout/WorkLayout';

export const App = () => {
	return (
		<>
			<InteractiveBackground />
			<div className={'center-container'}>
				<BrowserRouter>
					<ContentBox>
						<Routes>
							<Route path='/' element={<MainLayout />} />
							<Route path='/work' element={<WorkLayout />} />
						</Routes>
					</ContentBox>
				</BrowserRouter>
			</div>
		</>
	);
};
