import React from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import './switcher.css';
import { Sector } from './sector/Sector';
import { Scope } from './scope/Scope';
import { Panel } from './panel/Panel';
import { Neon } from './neon/Neon';

const DIRECTIONS = [
	{ slug: 'neon', name: 'Neon', note: 'after hours' },
	{ slug: 'sector', name: 'Sector', note: 'chart' },
	{ slug: 'scope', name: 'Scope', note: 'console' },
	{ slug: 'panel', name: 'Panel', note: 'strips' },
];

const Switcher = () => (
	<nav className={'switcher'} aria-label={'Design direction'}>
		<span className={'switcher-tag'}>Direction</span>
		{DIRECTIONS.map((d) => (
			<NavLink key={d.slug} to={`/design/${d.slug}`} className={({ isActive }) => (isActive ? 'is-current' : '')}>
				{d.name}
				<b>{d.note}</b>
			</NavLink>
		))}
	</nav>
);

export const DesignPreview = () => {
	React.useEffect(() => {
		const roots = [document.documentElement, document.body];
		roots.forEach((el) => el.classList.add('design-preview'));

		/* index.html stamps the stored site version on <html>. If that is v1 its
		   overflow lock would apply here too and kill scrolling, so previews opt
		   out of both versions rather than pretending to be either. */
		const stamped = document.documentElement.dataset.appVersion;
		document.documentElement.dataset.appVersion = 'preview';

		return () => {
			roots.forEach((el) => el.classList.remove('design-preview'));
			if (stamped) document.documentElement.dataset.appVersion = stamped;
		};
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/design'} element={<Navigate to={'/design/neon'} replace />} />
				<Route path={'/design/neon'} element={<Neon />} />
				<Route path={'/design/sector'} element={<Sector />} />
				<Route path={'/design/scope'} element={<Scope />} />
				<Route path={'/design/panel'} element={<Panel />} />
				<Route path={'*'} element={<Navigate to={'/design/neon'} replace />} />
			</Routes>
			<Switcher />
		</BrowserRouter>
	);
};
