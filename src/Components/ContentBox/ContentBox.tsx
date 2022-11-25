import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBriefcase, FaCaretRight } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Loading } from '../Loading/Loading';
import variables from '../../variables.module.scss';

import './styles.scss';

type ContentBoxProps = {
	header?: React.ReactNode;
	children: React.ReactNode;
};

export const ContentBox = (props: ContentBoxProps) => {
	const navigate = useNavigate();

	const timeDelay = 2000; // ms
	const small = { width: variables.containerWidth, height: variables.containerHeight };
	const big = { width: variables.containerWidthGrow, height: variables.containerHeightGrow };

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
						{'RIBER.TECH'}
					</div>
					<div>
						<Link
							to={'/'}
							onClick={() => {
								renderLoading();
								setOpenState(false);
							}}>
							<AiFillHome size={30} />
						</Link>
						<Link
							to={'work'}
							onClick={() => {
								renderLoading();
								setOpenState(true);
							}}>
							<FaBriefcase size={30} />
						</Link>
					</div>
				</div>

				<div className={'content-container-inner'}>{loading ? <Loading /> : props.children}</div>
			</div>
		</>
	);
};
