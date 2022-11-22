import React from 'react';
import { SocialBar } from '../../Components/SocialBar/SocialBar';
import { FaGamepad, FaWindowMaximize, FaCodeBranch, FaChild } from 'react-icons/fa';
import { GrGamepad } from 'react-icons/gr';
import { MdFamilyRestroom, MdWeb } from 'react-icons/md';

import ProfileImage from './profile-pic.png';

import './styles.scss';

export const MainLayout = () => {
	return (
		<div>
			<div className={'top-container'}>
				<div className={'profile-container'}>
					<div className={'profile-circle'} />
					<img src={ProfileImage} className={'profile-img'} />
				</div>
				<div className={'profile-content'}>
					<div className={'profile-text'}>
						Hello and welcome to my site.
						<br />
						My name is Steffen Riber Thomsen.
						<br />I work with computers
					</div>
					<div>
						<ul className={'profile-items'}>
							<li>
								<FaGamepad />
								<GrGamepad />
								Gamer by Choice
							</li>
							<li>
								<FaCodeBranch />
								Lead Software Engineer by Instinct
							</li>
							<li>
								<FaChild />
								<MdFamilyRestroom />
								Family Man by Luck
							</li>
							<li>
								<FaWindowMaximize />
								<MdWeb />
								Wannabe Web Developer by Chance
							</li>
						</ul>
					</div>
					Skill tags: (Java) (TypeScript) (React) (React Native) (SQL/NoSQL)
					<br />
					{/* todo - riber<!-- --> */}
				</div>
			</div>

			<SocialBar />
		</div>
	);
};
