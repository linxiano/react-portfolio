import React from 'react';
import { SocialBar } from '../../Components/SocialBar/SocialBar';
import { FaGamepad, FaWindowMaximize, FaCodeBranch, FaChild } from 'react-icons/fa';
import ProfileImage from './profile-pic.png';

import './styles.scss';
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

	const CenterPhases = () => (
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

	const ProfileItems = () => (
		<div>
			<ul className={'profile-items'}>
				<li>
					<span>
						<FaCodeBranch />
						Lead Software Engineer by Instinct
					</span>
				</li>
				<li>
					<span>
						<FaGamepad />
						Gamer by Choice
					</span>
				</li>
				<li>
					<span>
						<FaChild />
						Family Man by Luck
					</span>
				</li>
				<li>
					<span>
						<FaWindowMaximize />
						Wannabe Web Developer by Chance
					</span>
				</li>
			</ul>
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
						My name is Steffen Riber Thomsen.
						<br />I work with computers
					</div>
					<CenterPhases />
					{/* <ProfileItems /> */}
					<div className={'container-tags'}>
						{skills.map((item, index) => {
							return <Tag key={index} name={item} />;
						})}
					</div>
				</div>
			</div>

			<SocialBar />
		</div>
	);
};
