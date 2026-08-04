import React from 'react';
import { SocialBar } from '../../Components/SocialBar/SocialBar';
import { FaGamepad, FaWindowMaximize, FaCodeBranch, FaChild } from 'react-icons/fa';
import ProfileImage from './profile-pic.png';
import { Tag } from '../../Components/Tag/Tag';

export const MainLayout = () => {
	const skills = [
		'Java',
		'Linux',
		'OOP',
		'TypeScript',
		'React',
		'React-Native',
		'SQL/NoSQL',
		'Azure',
		'DevOps',
		'SCRUM',
		'Software Architecture',
		'Cloud Computing',
		'Serverless',
		'Event Driven Design',
		'TCP/IP',
	];

	const ProfileItems = () => (
		<div className={'flex flex-col items-center'}>
			<div
				className={
					'mt-[15px] rounded-md border-2 border-accent-soft px-[10px] py-0.5 [&>span]:flex [&>span]:items-center [&>span>svg]:h-5 [&>span>svg]:w-5 [&>span>svg]:pr-[10px]'
				}>
				<span>
					<FaCodeBranch />
					Lead Software Engineer by Instinct
				</span>
				<span>
					<FaGamepad />
					Gamer by Choice
				</span>
				<span>
					<FaChild />
					Family Man by Luck
				</span>
				<span>
					<FaWindowMaximize />
					Wannabe Web Developer by Chance
				</span>
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
							className={
								'col-start-1 row-start-1 h-auto w-[150px] origin-bottom self-end rounded-[43%] pb-0.5 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-110'
							}
						/>
					</div>
				</div>
				<div className={'min-w-[300px] flex-1'}>
					<div className={'pt-[15px] text-center font-black tracking-[2px]'}>
						{"Hi. I'm Steffen."}
						<br />
						{'I work with computers!'}
						<br />
						<span className={'text-[1rem] font-normal italic tracking-normal text-white/40'}>{'riber4 (at) gmail (dot) com'}</span>
					</div>
					<ProfileItems />
					<div className={'flex flex-row flex-wrap items-center justify-center px-5 pt-[15px]'}>
						{skills.map((item) => {
							return <Tag key={item} name={item} />;
						})}
					</div>
				</div>
			</div>

			<SocialBar />
		</div>
	);
};
