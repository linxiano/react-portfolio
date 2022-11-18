import React from 'react';
import './styles.scss';

export const ContentBox = (props: React.PropsWithChildren) => {
	// return <div className={'card'}>{props.children}</div>;

	return (
		<>
			<div className={'content-border'}></div>
			<div className={'content-container'}>
				<div className={'content-container-inner'}>{props.children}</div>
			</div>
		</>
	);
};
