import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBriefcase, FaCaretRight } from 'react-icons/fa';

import './styles.scss';

type ContentBoxProps = {
	header?: React.ReactNode;
	children: React.ReactNode;
};

export const ContentBox = (props: ContentBoxProps) => {
	const navigate = useNavigate();

	const small = { width: 600, height: 400 };
	const big = { width: small.width * 1.5, height: small.height * 1.5 };

	const [openState, setOpenState] = useState<boolean | undefined>(false);
	const [growSize, setGrowSize] = useState(small);

	useEffect(() => {
		openState ? setGrowSize(big) : setGrowSize(small);
	}, [openState]);

	const growStyle = { width: `${growSize.width}px`, height: `${growSize.height}px`, transition: 'all 1s cubic-bezier(.83,.05,.31,.96)' };

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
						<button
							onClick={() => {
								// navigate('/work');
								setOpenState((prev) => !prev);
							}}>
							Work
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
