import React, { useState } from 'react';
import './styles.scss';
import { Test } from './Components/TestComp/Test';
import { InteractiveBackground } from './Components/InteractiveBackground/InteractiveBackground';
import { ContentBox } from './Components/ContentBox/ContentBox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

type BisState = {
	test: string;
};

export const App = () => {
	return (
		<>
			<InteractiveBackground />
			<div className={'center-container'}>
				{/* <div className={'content-container'}> */}
				<ContentBox>
					<div>{'Work'}</div>

					<div>
						{'https://codepen.io/gayane-gasparyan/pen/jOmaBQK'}
						<p>
							<button>Test</button>
						</p>
						<p>
							Photo by <a href='https://unsplash.com/@lyovon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Levon Vardanyan</a> on{' '}
							<a href='https://unsplash.com/s/photos/cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
						</p>
					</div>
					{/* </div> */}
				</ContentBox>
			</div>
		</>
	);
};
