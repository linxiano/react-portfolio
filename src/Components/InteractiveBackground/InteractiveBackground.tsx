import React, { useEffect, useRef } from 'react';
import './styles.scss';

export const InteractiveBackground = () => {
	const elementRef = useRef<HTMLDivElement>(null);
	const scaleFactor = 200;

	useEffect(() => {
		// Set background in center
		if (elementRef.current) {
			const x = (elementRef.current?.clientWidth - window.innerWidth) / 2;
			const y = (elementRef.current?.clientHeight - window.innerHeight) / 2;
			elementRef.current.style.translate = `-${x}px -${y}px`;
		}
	}, [elementRef]);

	useEffect(() => {
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
		window.addEventListener('mousemove', move);

		return () => {
			window.removeEventListener('mousemove', move);
		};
	}, []);

	return <div ref={elementRef} className={'bg-container'} />;
};
