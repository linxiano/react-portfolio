import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaDiscord } from 'react-icons/fa';

import './styles.scss';

export const SocialBar = () => {
	// https://codepen.io/Krishnaa_Gupta/pen/MWoRqmr

	const externalItem = (icon: React.ReactNode, url: string, title?: string) => {
		return (
			<div className={'dfn'} data-info={title ? title : url}>
				<a href={url} target='_blank' rel='noreferrer' className='link'>
					{icon}
				</a>
			</div>
		);
	};

	return (
		<div className={'profile-social'}>
			<div className={'social-bar'}>
				{externalItem(<FaLinkedin size={30} className={'social-icon'} />, 'https://www.linkedin.com/in/steffenriber/', 'linkedin.com/in/steffenriber/')}
				{externalItem(<FaGithub size={30} className={'social-icon'} />, 'https://github.com/linxiano', 'github.com/linxiano')}
				{externalItem(<FaTwitter size={30} className={'social-icon'} />, 'https://twitter.com/linxiano', 'twitter.com/linxiano')}
				{externalItem(<FaDiscord size={30} className={'social-icon'} />, 'http://discordapp.com/users/linx#3036', 'discordapp.com/users/linx#3036')}

				{/* <div className={'dfn'} data-info={'riber4 (at) gmail (dot) com'}>
					<FaEnvelope size={30} className={'social-icon'} />
				</div> */}
			</div>
		</div>
	);
};
