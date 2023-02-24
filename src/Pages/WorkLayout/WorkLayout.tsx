import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

// https://codepen.io/GeorgePark/pen/vdqYom

const WorkLayout = () => {
	const externalItem = (title: string, url: string, imagePath: string) => (
		<div className='gallery-item'>
			<div className={'gallery-text'}>{title}</div>
			<div className={'gallery-image-container'}>
				<a title={title} href={url} target='_blank' rel='noreferrer'>
					<img className={'gallery-image'} src={imagePath} alt={title} />
				</a>
			</div>
		</div>
	);

	const internalItem = (title: string, url: string, imagePath: string) => (
		<div className='gallery-item'>
			<div className={'gallery-text'}>{title}</div>
			<div className={'gallery-image-container'}>
				<Link to={url}>
					<img className={'gallery-image'} src={imagePath} alt={title} />
				</Link>
			</div>
		</div>
	);

	return (
		<div className='gallery'>
			{externalItem('ChatGPT Messenger', 'https://chatgpt-messenger.riber.dev/', '/chatgpt-messenger.png')}
			{internalItem('CV', '/cv', '/cv-image.png')}
		</div>
	);
};

export default WorkLayout;
