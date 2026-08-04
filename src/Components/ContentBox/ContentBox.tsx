import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBriefcase, FaCaretRight } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Loading } from '../Loading/Loading';
import { containerSizes as variables } from '../../containerSizes';
import { isMobile } from 'react-device-detect';

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
					className={'pr-5 text-accent-soft active:text-ink [&>svg:hover]:scale-[1.2]'}
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
					className={'pr-5 text-accent-soft active:text-ink [&>svg:hover]:scale-[1.2]'}
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
			<div className={'absolute -z-10 flex items-center justify-center'} style={growStyle}>
				<div className={'mx-5 h-full w-full animate-border-flicker rounded-[20px]'} />
			</div>

			<div className={'mx-5 flex flex-col rounded-[20px] bg-panel backdrop-blur-[10px]'} style={growStyle}>
				<div className={'flex h-[65px] items-center justify-between border-b border-hairline'}>
					<div className={'flex h-full items-center pl-5 font-slab text-[2rem] font-black tracking-[10px] text-accent'}>
						<FaCaretRight />
						{'RIBER.DEV'}
					</div>
					<div className={'flex justify-end'}>
						<AnimatedLink />
					</div>
				</div>

				<div className={'mb-[15px] flex-1 overflow-y-auto'}>{loading ? <Loading /> : props.children}</div>
			</div>
		</>
	);
};
