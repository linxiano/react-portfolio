import React from 'react';
import './styles.scss';
import { InteractiveBackground } from './Components/InteractiveBackground/InteractiveBackground';
import { ContentBox } from './Components/ContentBox/ContentBox';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './Pages/HomeLayout/MainLayout';
import { WorkLayout } from './Pages/WorkLayout/WorkLayout';

export const App = () => {
	return (
		<>
			<InteractiveBackground />
			<div className={'center-container'}>
				<MemoryRouter>
					<ContentBox>
						<Routes>
							<Route path='/' element={<MainLayout />} />
							<Route path='/work' element={<WorkLayout />} />
						</Routes>
					</ContentBox>
					{/* TODO image ref... */}
					<div style={{ position: 'absolute', bottom: '0', right: '0' }}>
						Photo by <a href='https://unsplash.com/@lyovon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Levon Vardanyan</a> on{' '}
						<a href='https://unsplash.com/s/photos/cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
					</div>
				</MemoryRouter>
			</div>
		</>
	);
};
