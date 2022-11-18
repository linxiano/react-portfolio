import React, { useState } from 'react';
import './styles.scss';
import { Test } from './Components/TestComp/Test';
import { InteractiveBackground } from './Components/InteractiveBackground/InteractiveBackground';

type BisState = {
	test: string;
};

export const App = () => {
	const handleMouseMove = (event: any) => {
		console.log('app...', event);
	};

	const [bis, setBis] = useState<BisState>();

	return (
		<>
			<InteractiveBackground />
			<div className={'center-container'}>
				<div className={'content-container'}>
					<div>
						{'https://codepen.io/gayane-gasparyan/pen/jOmaBQK'}
						<p>{bis?.test}</p>
						<p>
							Photo by <a href='https://unsplash.com/@lyovon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Levon Vardanyan</a> on{' '}
							<a href='https://unsplash.com/s/photos/cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
