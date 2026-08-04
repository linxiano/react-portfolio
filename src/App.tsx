import React from 'react';
import { InteractiveBackground } from './Components/InteractiveBackground/InteractiveBackground';
import { ContentBox } from './Components/ContentBox/ContentBox';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './Pages/HomeLayout/MainLayout';
import { BrowserView, MobileView } from 'react-device-detect';
import { CVLayout } from './Pages/CVLayout/CVLayout';
import WorkLayout from './Pages/WorkLayout/WorkLayout';

export const App = () => {
	return (
		<>
			<InteractiveBackground />
			<div className={'flex min-h-screen items-center justify-center'}>
				<MemoryRouter>
					<ContentBox>
						<Routes>
							<Route path='/' element={<MainLayout />} />
							<Route path='/work' element={<WorkLayout />} />
							<Route path='/cv' element={<CVLayout />} />
						</Routes>
					</ContentBox>
					<div className={'absolute bottom-0 right-0 m-0.5 rounded-lg bg-panel px-2 py-1 text-white/30'}>
						{'Photo by '}
						<a
							className='text-white/30 hover:text-black'
							href='https://unsplash.com/@lyovon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
							target='_blank'
							rel='noopener noreferrer'>
							{'Levon Vardanyan'}
						</a>
						{' on '}
						<a
							className='text-white/30 hover:text-black'
							href='https://unsplash.com/s/photos/cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
							target='_blank'
							rel='noopener noreferrer'>
							{'Unsplash'}
						</a>
					</div>
				</MemoryRouter>
			</div>
		</>
	);
};
