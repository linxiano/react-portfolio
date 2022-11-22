import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import './styles.scss';

export const Loading = () => {
	return (
		<div className={'container'}>
			<AiOutlineLoading className={'loaderIcon'} size={50} />
		</div>
	);
};
