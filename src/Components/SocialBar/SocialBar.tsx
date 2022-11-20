import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

import './styles.scss';

export const SocialBar = () => {
	// https://codepen.io/Krishnaa_Gupta/pen/MWoRqmr

	return (
		<div className={'profile-social'}>
			<FaLinkedin size={30} id={'test'} className={'social-icon'} />
			<FaGithub size={30} />
			<FaTwitter size={30} />
		</div>
	);
};
