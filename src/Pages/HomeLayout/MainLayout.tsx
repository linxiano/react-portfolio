import React from 'react';
import { SocialBar } from '../../Components/SocialBar/SocialBar';
import { FaGamepad, FaWindowMaximize, FaCodeBranch, FaChild } from 'react-icons/fa';
import ProfileImage from './profile-pic.png';
import { Tag } from '../../Components/Tag/Tag';
import { byLines, emailSpokenOut, greeting, identity, skillsFlat, tagline } from '../../designs/content';

/* One icon per "X by Y" line, in the order they are written in content.ts. */
const BY_ICONS = [FaCodeBranch, FaGamepad, FaChild, FaWindowMaximize];

export const MainLayout = () => {
	const ProfileItems = () => (
		<div className={'flex flex-col items-center'}>
			<div
				className={
					'mt-[15px] rounded-md border-2 border-accent-soft px-[10px] py-0.5 [&>span]:flex [&>span]:items-center [&>span>svg]:h-5 [&>span>svg]:w-5 [&>span>svg]:pr-[10px]'
				}>
				{byLines.map((line, index) => {
					const Icon = BY_ICONS[index] ?? FaCodeBranch;
					return (
						<span key={line.role}>
							<Icon />
							{`${line.role} ${line.by}`}
						</span>
					);
				})}
			</div>
		</div>
	);

	return (
		<div>
			<div className={'flex flex-row flex-wrap justify-evenly'}>
				<div>
					<div className={'grid pl-5 pt-5'}>
						<div className={'col-start-1 row-start-1 h-[150px] w-[150px] self-end rounded-full border-2 border-accent-soft bg-shade'} />
						<img
							src={ProfileImage}
							alt={identity.name}
							className={
								'col-start-1 row-start-1 h-auto w-[150px] origin-bottom self-end rounded-[43%] pb-0.5 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110'
							}
						/>
					</div>
				</div>
				<div className={'min-w-[300px] flex-1'}>
					<div className={'pt-[15px] text-center font-black tracking-[2px]'}>
						{greeting}
						<br />
						{tagline}
						<br />
						<span className={'text-[1rem] font-normal italic tracking-normal text-white/40'}>{emailSpokenOut}</span>
					</div>
					<ProfileItems />
					<div className={'flex flex-row flex-wrap items-center justify-center px-5 pt-[15px]'}>
						{skillsFlat.map((item) => {
							return <Tag key={item} name={item} />;
						})}
					</div>
				</div>
			</div>

			<SocialBar />
		</div>
	);
};
