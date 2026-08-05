import React, { useEffect, useRef, useState } from 'react';
import { isBrowser } from 'react-device-detect';
// bg.jpg is the 5448px original, kept as the master. night.jpg is the 2560px
// derivative that actually ships — the source was 3.7 MB on every page load.
import bg from './night.jpg';

export const InteractiveBackground = () => {
	const elementRef = useRef<HTMLDivElement>(null);
	const scaleFactor = 200;

	useEffect(() => {
		// Set background in center
		if (elementRef.current) {
			const x = (elementRef.current?.clientWidth - window.innerWidth) / 2;
			const y = (elementRef.current?.clientHeight - window.innerHeight) / 2;
			// console.log('window.innerWidth', window.innerWidth, 'window.innerHeight', window.innerHeight);
			// console.log('clientWidth', elementRef.current?.clientWidth, 'clientHeight', elementRef.current?.clientHeight);

			// console.log(`-${x}px -${y}px`);
			elementRef.current.style.translate = `-${x}px -${y}px`;
		}
	}, [elementRef]);

	const move = (e: MouseEvent) => {
		const { clientX, clientY } = e;

		// Normalize x, y decimals
		const xDecimal = (clientX - window.innerWidth / 2) / window.innerWidth;
		const yDecimal = (clientY - window.innerHeight / 2) / window.innerHeight;

		if (elementRef.current) {
			const x = (elementRef.current?.clientWidth - window.innerWidth) / 2;
			const y = (elementRef.current?.clientHeight - window.innerHeight) / 2;

			const xPos = x - xDecimal * scaleFactor;
			const yPos = y - yDecimal * scaleFactor;
			elementRef.current?.animate([{ translate: `-${xPos}px -${yPos}px` }], {
				duration: 4000,
				fill: 'forwards',
				easing: 'ease',
			});
		}
	};

	useEffect(() => {
		isBrowser && window.addEventListener('mousemove', move);

		return () => {
			isBrowser && window.removeEventListener('mousemove', move);
		};
	}, []);

	return (
		<div
			ref={elementRef}
			className={'absolute -z-10 h-[130vmax] w-[130vmax] bg-cover bg-center bg-no-repeat'}
			style={{ backgroundImage: `url(${bg})` }}
		/>
	);
};
