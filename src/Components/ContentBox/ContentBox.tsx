import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBeer, FaBriefcase } from 'react-icons/fa';

import './styles.scss';

type ContentBoxProps = {
	header?: React.ReactNode;
	children: React.ReactNode;
};

export const ContentBox = (props: ContentBoxProps) => {
	const navigate = useNavigate();

	const small = { width: 600, height: 400 };
	const big = { width: small.width * 1.3, height: small.height * 1.3 };

	const [openState, setOpenState] = useState<boolean | undefined>(false);
	const [growSize, setGrowSize] = useState(small);

	useEffect(() => {
		openState ? setGrowSize(big) : setGrowSize(small);
	}, [openState]);

	const growStyle = { width: growSize.width, height: growSize.height, transition: 'all 1s cubic-bezier(.83,.05,.31,.96)' };

	return (
		<>
			<div className={`content-border`} style={growStyle}>
				<div className={'content-border-flicker'} />
			</div>

			<div
				className={'content-container'}
				style={growStyle}
				onAnimationEnd={() => {
					console.log('animation ended...');
				}}>
				<div className={'content-header'}>
					<div className={'header-title'}>
						<FaBeer />
						PORTFOLIO
						{/* <p className={'animate'}>P</p>
						<p className={'offset'}>O</p>
						<p className={'animate'}>RTFOLIO</p> */}
					</div>
					<div>
						<button
							onClick={() => {
								// navigate('/work');
								setOpenState((prev) => !prev);
							}}>
							WoRk
						</button>
						<FaBriefcase />
						<Link to={'work'}>{'Work'}</Link>
					</div>
				</div>
				<div className={'content-container-inner'}>{props.children}</div>
			</div>
		</>
	);
};
