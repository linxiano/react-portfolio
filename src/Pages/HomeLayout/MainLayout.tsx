import React from 'react';
import { Link } from 'react-router-dom';
import Me from './me.png';

import './styles.scss';

export const MainLayout = () => {
	return (
		<div className={'main-container'}>
			{'main layout'}

			<img src={Me} width={'200px'} />

			{/* <Link to={'work'}>{'Work'}</Link> */}
		</div>
	);
};
