import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../designs/content';

// https://codepen.io/GeorgePark/pen/vdqYom

const galleryItemClass =
	'flex h-[15rem] w-[25rem] flex-col justify-between overflow-hidden rounded-md border-t border-hairline bg-shade shadow-[0.3rem_0.4rem_0.4rem_rgba(0,0,0,0.4)] m-4';
const galleryTextClass = 'z-[1] pl-[10px] pt-1 text-[16px] font-semibold';
const galleryImageContainerClass = 'mt-[10px] flex-1';
const galleryImageClass = 'block h-full w-full object-cover transition-transform duration-[400ms] ease-out hover:scale-110';

const WorkLayout = () => (
	<div className='flex flex-wrap justify-center'>
		{projects.map((project) => {
			const image = <img className={galleryImageClass} src={project.image} alt={project.name} />;

			return (
				<div className={galleryItemClass} key={project.name}>
					<div className={galleryTextClass}>{project.name}</div>
					<div className={galleryImageContainerClass}>
						{/* `route` means v1 has its own viewer for it; otherwise link out. */}
						{project.route ? (
							<Link to={project.route}>{image}</Link>
						) : (
							<a title={project.name} href={project.href} target='_blank' rel='noreferrer'>
								{image}
							</a>
						)}
					</div>
				</div>
			);
		})}
	</div>
);

export default WorkLayout;
