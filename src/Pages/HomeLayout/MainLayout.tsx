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
	];

	return (
		<div>
			<div className={'top-container'}>
				<div className={'profile-container'}>
					<div className={'profile-circle'} />
					<img src={ProfileImage} className={'profile-img'} />
				</div>
				<div className={'profile-content'}>
					<div className={'profile-text'}>
						{/* Hello and welcome to my site.
						<br /> */}
						My name is Steffen Riber Thomsen.
						<br />I work with computers
					</div>
					<div>
						<ul className={'profile-items'}>
							<li>
								<span>
									<FaGamepad />
									Gamer by Choice
								</span>
							</li>
							<li>
								<span>
									<FaCodeBranch />
									Lead Software Engineer by Instinct
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
