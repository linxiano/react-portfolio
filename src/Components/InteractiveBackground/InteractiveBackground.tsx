import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';

// children?
export const InteractiveBackground = () => {
	const moveMove = (e: React.MouseEvent<HTMLDivElement>) => {
		console.log(e);
	};

	const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
	const elementRef = useRef<HTMLDivElement>(null);
	const scaleFactor = 200;

	useEffect(() => {
		// elementRef.current?.clientWidth
		if (elementRef.current) {
			const x = (elementRef.current?.clientWidth - window.innerWidth) / 2;
			const y = (elementRef.current?.clientHeight - window.innerHeight) / 2;

			console.log('x', x, 'y', y);
			elementRef.current.animate([{ translate: `-${x}px -${y}px` }]);

			// setPosition({ x: x, y: y });
		}
	}, [elementRef]);

	useEffect(() => {
		console.log('res:', window.innerWidth, window.innerHeight);
		console.log('div:', elementRef.current?.clientWidth, elementRef.current?.clientHeight);

		const move = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			// e.screenX
			// console.log('clientX', clientX, 'clientY', clientY);
			// window.innerHeight

			const xDecimal = (clientX - window.innerWidth / 2) / window.innerWidth;
			const yDecimal = (clientY - window.innerHeight / 2) / window.innerHeight;

			if (elementRef.current) {
				const x = (elementRef.current?.clientWidth - window.innerWidth) / 2;
				const y = (elementRef.current?.clientHeight - window.innerHeight) / 2;

				setPosition({ x: x - xDecimal * scaleFactor, y: y - yDecimal * scaleFactor });
			}

			if (elementRef.current) {
				const x = (elementRef.current?.clientWidth - window.innerWidth) / 2;
				const y = (elementRef.current?.clientHeight - window.innerHeight) / 2;

				// console.log('x', x * xDecimal, 'y', y);
				// setPosition({ x: x * xDecimal, y: y * yDecimal });

				const maxX = elementRef.current.offsetWidth - window.innerWidth;
				const maxY = elementRef.current.offsetHeight - window.innerHeight;
				// console.log('maxX', maxX, 'maxY', maxY);

				const panX = maxX * xDecimal * -1;
				const panY = maxY * yDecimal * -1;
				// console.log('panX', panX, 'panY', panY);
				// setPosition({ x: panX, y: panY });
			}
		};
		window.addEventListener('mousemove', move);

		return () => {
			window.removeEventListener('mousemove', move);
		};
	}, []);

	return (
		<div
			ref={elementRef}
			className={'bg-container'}
			style={{ translate: `-${position.x}px -${position.y}px`, transitionDuration: '4000', transitionTimingFunction: 'ease-out', transformBox: 'fill-box' }}
		/>
	);
	// return <div ref={elementRef} className={'bg-container'} />;

	// return <div className={'bg-container2'} />;
};
