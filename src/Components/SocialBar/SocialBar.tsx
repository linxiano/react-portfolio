import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import { socials, SocialName } from '../../designs/content';

// https://codepen.io/Krishnaa_Gupta/pen/MWoRqmr

const ICONS: Record<SocialName, React.ComponentType<{ size?: number; className?: string }>> = {
	LinkedIn: FaLinkedin,
	GitHub: FaGithub,
	Twitter: FaTwitter,
	Discord: FaDiscord,
};

export const SocialBar = () => {
	const iconClass = 'text-accent-soft hover:scale-[1.2] active:text-white';

	return (
		<div className={'mt-[5px] flex justify-center border-t border-hairline pt-[5px]'}>
			<div className={'flex w-[360px] items-center justify-around rounded-md bg-shade py-[5px]'}>
				{socials.map((social) => {
					const Icon = ICONS[social.name];
					return (
						<a key={social.name} title={social.handle} href={social.href} target='_blank' rel='noreferrer' className='flex items-center justify-center'>
							<Icon size={30} className={iconClass} />
						</a>
					);
				})}
			</div>
		</div>
	);
};
