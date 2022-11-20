import React from 'react';
import { Link } from 'react-router-dom';
import { SocialBar } from '../../Components/SocialBar/SocialBar';
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
					Welcome to my portfolio.
					<br />
					<br />
					My name is Steffen Riber Thomsen
					<br />
					<br />
					Gamer by Choice
					<br />
					Lead Software Engineer by Instinct
					<br />
					Family Man by Luck
					<br />
					Wannabe Web Developer by Chance
					<br />
					<br />
					Skill tags: (Java) (TypeScript) (React) (React Native) (SQL/NoSQL)
					<br />
					Photo by <a href='https://unsplash.com/@lyovon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Levon Vardanyan</a> on{' '}
					<a href='https://unsplash.com/s/photos/cyberpunk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
				</div>
			</div>

			<SocialBar />
		</div>
	);
};
