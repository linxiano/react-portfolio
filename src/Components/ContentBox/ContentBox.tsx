import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBriefcase, FaCaretRight } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Loading } from '../Loading/Loading';
import variables from '../../variables.module.scss';
import { isMobile } from 'react-device-detect';

import './styles.scss';

type ContentBoxProps = {
	header?: React.ReactNode;
	children: React.ReactNode;
};

export const ContentBox = (props: ContentBoxProps) => {
	const location = useLocation();

	const timeDelay = 2000; // ms
	const small = {
		width: isMobile ? variables.containerWidthMobile : variables.containerWidth,
		height: isMobile ? variables.containerHeightMobile : variables.containerHeight,
	};
	const big = {
		width: isMobile ? variables.containerWidthGrowMobile : variables.containerWidthGrow,
		height: isMobile ? variables.containerHeightGrowMobile : variables.containerHeightGrow,
	};

	const [openState, setOpenState] = useState<boolean | undefined>(false);
	const [growSize, setGrowSize] = useState(small);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		openState ? setGrowSize(big) : setGrowSize(small);
	}, [openState]);

	const renderLoading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, timeDelay);
	};

	const AnimatedLink = () => (
		<>
			{location.pathname !== '/' ? (
				<Link
					className={'clickable-link'}
					to={'/'}
					onClick={() => {
						if (location.pathname !== '/') {
							renderLoading();
							setOpenState(false);
						}
					}}>
					<AiFillHome size={30} />
				</Link>
			) : (
				<Link
					className={'clickable-link'}
					to={'work'}
					onClick={() => {
						if (location.pathname !== '/work') {
							renderLoading();
							setOpenState(true);
						}
					}}>
					<FaBriefcase size={30} />
				</Link>
			)}
		</>
	);

	const growStyle = { width: `${growSize.width}`, height: `${growSize.height}`, transition: `all ${timeDelay}ms cubic-bezier(.83,.05,.31,.96)` };

	return (
		<>
			<div className={`content-border`} style={growStyle}>
				<div className={'content-border-flicker'} />
			</div>

			<div className={'content-container'} style={growStyle}>
				<div className={'content-header'}>
					<div className={'header-title'}>
						<FaCaretRight />
						{'RIBER.DEV'}
					</div>
					<div className={'header-links'}>
						<AnimatedLink />
					</div>
				</div>

				<div className={'content-container-inner'}>{loading ? <Loading /> : props.children}</div>
			</div>
		</>
	);
};
