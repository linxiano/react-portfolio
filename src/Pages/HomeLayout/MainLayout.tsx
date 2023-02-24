import React from 'react';
import { SocialBar } from '../../Components/SocialBar/SocialBar';
import { FaGamepad, FaWindowMaximize, FaCodeBranch, FaChild } from 'react-icons/fa';
import ProfileImage from './profile-pic.png';
import { Tag } from '../../Components/Tag/Tag';

import './styles.scss';

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
		<div className={'center-items'}>
			<div className={'center-items-inner'}>
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
			<div className={'top-container'}>
				<div>
					<div className={'profile-container'}>
						<div className={'profile-circle'} />
						<img src={ProfileImage} className={'profile-img'} />
					</div>
				</div>
				<div className={'profile-content'}>
					<div className={'profile-text'}>
						{"Hi. I'm Steffen."}
						<br />
						{'I work with computers!'}
						<br />
						<span className={'profile-email'}>{'riber4 (at) gmail (dot) com'}</span>
					</div>
					<ProfileItems />
					<div className={'container-tags'}>
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
