import React from 'react';
import { Link } from 'react-router-dom';

// https://codepen.io/GeorgePark/pen/vdqYom

const galleryItemClass =
	'flex h-[15rem] w-[25rem] flex-col justify-between overflow-hidden rounded-md border-t border-hairline bg-shade shadow-[0.3rem_0.4rem_0.4rem_rgba(0,0,0,0.4)] m-4';
const galleryTextClass = 'z-[1] pl-[10px] pt-1 text-[16px] font-semibold';
const galleryImageContainerClass = 'mt-[10px] flex-1';
const galleryImageClass = 'block h-full w-full object-cover transition-transform duration-[400ms] ease-out hover:scale-110';

const WorkLayout = () => {
	const externalItem = (title: string, url: string, imagePath: string) => (
		<div className={galleryItemClass}>
			<div className={galleryTextClass}>{title}</div>
			<div className={galleryImageContainerClass}>
				<a title={title} href={url} target='_blank' rel='noreferrer'>
					<img className={galleryImageClass} src={imagePath} alt={title} />
				</a>
			</div>
		</div>
	);

	const internalItem = (title: string, url: string, imagePath: string) => (
		<div className={galleryItemClass}>
			<div className={galleryTextClass}>{title}</div>
			<div className={galleryImageContainerClass}>
				<Link to={url}>
					<img className={galleryImageClass} src={imagePath} alt={title} />
				</Link>
			</div>
		</div>
	);

	return (
		<div className='flex flex-wrap justify-center'>
			{externalItem('ChatGPT Messenger', 'https://chatgpt-messenger.riber.dev/', '/chatgpt-messenger.png')}
			{internalItem('CV', '/cv', '/cv-image.png')}
		</div>
	);
};

export default WorkLayout;
