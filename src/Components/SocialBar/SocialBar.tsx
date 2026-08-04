import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaDiscord } from 'react-icons/fa';

export const SocialBar = () => {
	// https://codepen.io/Krishnaa_Gupta/pen/MWoRqmr

	const iconClass = 'text-accent-soft hover:scale-[1.2] active:text-white';

	const externalItem = (icon: React.ReactNode, url: string, title: string) => {
		return (
			<a title={title} href={url} target='_blank' rel='noreferrer' className='flex items-center justify-center'>
				{icon}
			</a>
		);
	};

	return (
		<div className={'mt-[5px] flex justify-center border-t border-hairline pt-[5px]'}>
			<div className={'flex w-[360px] items-center justify-around rounded-md bg-shade py-[5px]'}>
				{externalItem(<FaLinkedin size={30} className={iconClass} />, 'https://www.linkedin.com/in/steffenriber/', 'linkedin.com/in/steffenriber/')}
				{externalItem(<FaGithub size={30} className={iconClass} />, 'https://github.com/linxiano', 'github.com/linxiano')}
				{externalItem(<FaTwitter size={30} className={iconClass} />, 'https://twitter.com/linxiano', 'twitter.com/linxiano')}
				{externalItem(<FaDiscord size={30} className={iconClass} />, 'http://discordapp.com/users/linx#3036', 'discordapp.com/users/linx#3036')}

				{/* <div className={'relative flex cursor-pointer items-center justify-center'} data-info={'riber4 (at) gmail (dot) com'}>
					<FaEnvelope size={30} className={iconClass} />
				</div> */}
			</div>
		</div>
	);
};
