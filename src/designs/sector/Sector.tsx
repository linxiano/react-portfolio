import React from 'react';
import './sector.css';
import Portrait from '../../Pages/HomeLayout/profile-pic.png';
import { credentials, education, FLIGHT_LEVEL, identity, languages, links, posts, projects, recognition, skills, summary, thesis } from '../content';

/* ============================================================
   The climb profile.
   x = real time, y = flight level, where flight level encodes
   role seniority. Education is the ground roll and the climb.
   ============================================================ */

const X_MIN = 2007.6;
const X_MAX = 2026.6;
const Y_MAX = 380;

const VB_W = 1000;
const VB_H = 300;
const PAD = { top: 24, right: 18, bottom: 30, left: 50 };

const px = (year: number) => PAD.left + ((year - X_MIN) / (X_MAX - X_MIN)) * (VB_W - PAD.left - PAD.right);
const py = (fl: number) => PAD.top + (1 - fl / Y_MAX) * (VB_H - PAD.top - PAD.bottom);

/** Vertices of the flown route. Strictly increasing in time. */
const ROUTE: Array<[number, number]> = [
	[2008.0, 0], // B.Sc. — on the ground
	[2011.0, 0],
	[2011.3, FLIGHT_LEVEL.STUDENT], // first climb: student helper
	[2011.7, FLIGHT_LEVEL.STUDENT],
	[2013.0, FLIGHT_LEVEL.ADMIN], // climbing through the M.Sc.
	[2014.5, FLIGHT_LEVEL.ADMIN],
	[2014.85, FLIGHT_LEVEL.DEV],
	[2018.0, FLIGHT_LEVEL.DEV],
	[2018.35, FLIGHT_LEVEL.LEAD],
	[2026.4, FLIGHT_LEVEL.LEAD],
];

/** Where each fix sits on that route, oldest first. */
const FIXES = [
	{ year: 2011.3, ident: 'AALBG', fl: FLIGHT_LEVEL.STUDENT, study: true },
	{ year: 2013.0, ident: 'ELSVR', fl: FLIGHT_LEVEL.ADMIN, study: false },
	{ year: 2014.85, ident: 'TERMA', fl: FLIGHT_LEVEL.DEV, study: false },
	{ year: 2018.35, ident: 'TERMA', fl: FLIGHT_LEVEL.LEAD, study: false },
	{ year: 2021.0, ident: 'NAVIR', fl: FLIGHT_LEVEL.LEAD, study: false },
	{ year: 2023.0, ident: 'LERDL', fl: FLIGHT_LEVEL.LEAD, study: false },
];

const GRID_LEVELS = [0, FLIGHT_LEVEL.STUDENT, FLIGHT_LEVEL.ADMIN, FLIGHT_LEVEL.DEV, FLIGHT_LEVEL.LEAD];
const YEAR_TICKS = [2008, 2010, 2012, 2014, 2016, 2018, 2020, 2022, 2024, 2026];

const points = ROUTE.map(([y, fl]) => [px(y), py(fl)] as const);

const segLengths = points.slice(1).map(([x, y], i) => Math.hypot(x - points[i][0], y - points[i][1]));
const routeLength = segLengths.reduce((a, b) => a + b, 0);

/** Arc length along the route at a given year — used to time each fix to the drawing line. */
const arcLengthAtYear = (year: number) => {
	let run = 0;
	for (let i = 1; i < ROUTE.length; i++) {
		const [y0] = ROUTE[i - 1];
		const [y1] = ROUTE[i];
		if (year <= y1) {
			const t = y1 === y0 ? 0 : (year - y0) / (y1 - y0);
			return run + segLengths[i - 1] * t;
		}
		run += segLengths[i - 1];
	}
	return run;
};

const DRAW_START = 0.25;
const DRAW_TIME = 2.4;

const ClimbProfile = () => {
	const baseline = py(0);

	return (
		<figure className={'sector-profile'}>
			<div className={'sector-profile-scroll'}>
				<svg viewBox={`0 0 ${VB_W} ${VB_H}`} role={'img'} aria-label={'Career plotted as a climb profile: flight level stands in for role seniority, from student helper in 2011 to lead developer today.'}>
					{/* flight levels */}
					{GRID_LEVELS.map((fl) => (
						<g key={fl}>
							<line className={'sector-profile-grid'} x1={PAD.left} x2={VB_W - PAD.right} y1={py(fl)} y2={py(fl)} />
							<text className={'sector-profile-fl'} x={PAD.left - 8} y={py(fl) + 3} textAnchor={'end'}>
								{`FL${String(fl).padStart(3, '0')}`}
							</text>
						</g>
					))}

					{/* time */}
					{YEAR_TICKS.map((year) => (
						<g key={year}>
							<line className={'sector-profile-grid'} x1={px(year)} x2={px(year)} y1={baseline} y2={baseline + 5} />
							<text className={'sector-profile-year'} x={px(year)} y={baseline + 18} textAnchor={'middle'}>
								{`’${String(year).slice(2)}`}
							</text>
						</g>
					))}

					<polygon className={'sector-profile-shade'} points={`${points.map(([x, y]) => `${x},${y}`).join(' ')} ${points[points.length - 1][0]},${baseline} ${points[0][0]},${baseline}`} />

					<polyline className={'sector-profile-track'} style={{ ['--len' as string]: routeLength.toFixed(1) }} points={points.map(([x, y]) => `${x},${y}`).join(' ')} />

					{FIXES.map((fix) => {
						const x = px(fix.year);
						const y = py(fix.fl);
						const delay = DRAW_START + DRAW_TIME * (arcLengthAtYear(fix.year) / routeLength);
						/* At the top of the climb there is no room above the line, so those labels hang below. */
						/* No room above the line at the top of the climb, so those labels
						   hang below and sit to the right, clear of the climb segment. */
						const below = fix.fl >= FLIGHT_LEVEL.LEAD;
						const labelX = below ? x + 5.5 : x;
						const anchor = below ? 'start' : 'middle';
						const labelY = below ? y + 8 : y - 20;
						const flY = below ? y + 15.5 : y - 9;
						const tickY = below ? y + 20 : y + 6;

						return (
							<g className={'sector-profile-fix'} key={`${fix.ident}-${fix.year}`} style={{ animationDelay: `${delay.toFixed(2)}s` }}>
								<line x1={x} x2={x} y1={tickY} y2={baseline} />
								{fix.study ? <polygon points={`${x},${y - 5.5} ${x + 5},${y + 4} ${x - 5},${y + 4}`} /> : <circle cx={x} cy={y} r={4} />}
								<text x={labelX} y={labelY} textAnchor={anchor}>
									{fix.ident}
								</text>
								<text className={'sector-profile-fix-fl'} x={labelX} y={flY} textAnchor={anchor}>
									{Math.floor(fix.year)}
								</text>
							</g>
						);
					})}
				</svg>
			</div>
			<figcaption className={'sector-profile-legend sector-data'}>
				<span>
					<b>Flight level</b> — role seniority
				</span>
				<span>
					<b>◯</b> employer &nbsp; <b>△</b> university
				</span>
				<span>
					<b>Ground roll</b> — B.Sc., 2008–11
				</span>
				<span>
					<b>First climb</b> — M.Sc., 2011–13
				</span>
			</figcaption>
		</figure>
	);
};

export const Sector = () => (
	<div className={'sector'}>
		<div className={'sector-shell'}>
			<header className={'sector-margin sector-data'}>
				<span>
					<strong>{identity.site}</strong> — {identity.callsign}
				</span>
				<span className={'sector-margin-lot'}>
					<span>
						{identity.lat} {identity.lon}
					</span>
					<span>
						{identity.base}, {identity.country}
					</span>
					<span>
						On station since <strong>{identity.onStationSince}</strong>
					</span>
				</span>
			</header>

			<div className={'sector-head'}>
				<div>
					<p className={'sector-label sector-role'}>
						{identity.role} — {identity.discipline}
					</p>
					<h1 className={'sector-name'}>
						<span>Steffen Riber</span>
						<span className={'sector-name-surname'}>Thomsen</span>
					</h1>
					<p className={'sector-thesis'}>{thesis}</p>
				</div>
				<figure className={'sector-inset'}>
					<img src={Portrait} alt={identity.name} />
					<figcaption className={'sector-data'}>
						{identity.city} — {identity.lat}
					</figcaption>
				</figure>
			</div>

			<section className={'sector-section'}>
				<div className={'sector-section-head'}>
					<h2>Route flown</h2>
					<span className={'sector-section-note sector-data'}>2008 — present</span>
				</div>
				<ClimbProfile />

				<div className={'sector-log'}>
					{posts.map((post) => (
						<article className={'sector-post'} key={`${post.ident}-${post.from}-${post.title}`}>
							<div className={'sector-post-when sector-data'}>
								<b>{post.fromLabel}</b>
								{post.toLabel}
							</div>
							<div className={'sector-post-fix'}>
								<span className={'sector-ident'}>{post.ident}</span>
								<small>
									{post.place}
									<br />
									{`FL${String(FLIGHT_LEVEL[post.level]).padStart(3, '0')}`}
								</small>
							</div>
							<div className={'sector-post-body'}>
								<h3>
									{post.org} <em>— {post.title}</em>
								</h3>
								<p>{post.summary}</p>
								<ul className={'sector-tags'}>
									{post.tags.map((tag) => (
										<li key={tag}>{tag}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className={'sector-section'}>
				<div className={'sector-section-head'}>
					<h2>Capability</h2>
					<span className={'sector-section-note sector-data'}>{languages.map((l) => `${l.name} — ${l.level}`).join(' · ')}</span>
				</div>
				<div className={'sector-legend'}>
					{skills.map((group) => (
						<div className={'sector-legend-cell'} key={group.label}>
							<span className={'sector-label'}>{group.label}</span>
							<ul>
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className={'sector-section'}>
				<div className={'sector-section-head'}>
					<h2>Study & record</h2>
					<span className={'sector-section-note sector-data'}>Aalborg University</span>
				</div>
				<div className={'sector-plates'}>
					<div>
						{education.map((degree) => (
							<div className={'sector-degree'} key={degree.award}>
								<h3>
									{degree.award} {degree.field}
								</h3>
								<p className={'sector-degree-meta sector-data'}>
									{degree.school}, {degree.place} — {degree.from}–{degree.to}
								</p>
								<blockquote>
									“{degree.thesis}”
									<cite>{degree.note}</cite>
								</blockquote>
							</div>
						))}
					</div>
					<div>
						{[...recognition, ...credentials].map((item) => (
							<dl className={'sector-rec'} key={item.label}>
								<dt className={'sector-data'}>{item.year}</dt>
								<dd>
									<b>{item.label}</b>
									<span>{item.detail}</span>
								</dd>
							</dl>
						))}
					</div>
				</div>
			</section>

			<section className={'sector-section'}>
				<div className={'sector-section-head'}>
					<h2>Built</h2>
					<span className={'sector-section-note sector-data'}>Side of the desk</span>
				</div>
				<div className={'sector-work'}>
					{projects.map((project) => (
						<a className={'sector-card'} key={project.name} href={project.href} target={'_blank'} rel={'noreferrer'}>
							<div className={'sector-card-frame'}>
								<img src={project.image} alt={project.name} />
							</div>
							<div className={'sector-card-meta'}>
								<h3>{project.name}</h3>
								<span className={'sector-data'}>{project.kind === 'external' ? 'LIVE ↗' : 'PDF ↗'}</span>
							</div>
							<p>{project.blurb}</p>
						</a>
					))}
				</div>
			</section>

			<footer className={'sector-foot'}>
				<div>
					<p className={'sector-label'}>Contact</p>
					<div className={'sector-foot-contact sector-data'} style={{ marginTop: 12 }}>
						{links.map((link) => (
							<a key={link.label} href={link.href} target={'_blank'} rel={'noreferrer'}>
								<span>{link.label}</span>
								<span>{link.value}</span>
							</a>
						))}
					</div>
				</div>
				<div>
					<p className={'sector-label'}>Off duty</p>
					<p className={'sector-foot-personal'} style={{ marginTop: 12 }}>
						{identity.personal}
					</p>
				</div>
				<div>
					<p className={'sector-label'}>Summary</p>
					<p className={'sector-foot-personal'} style={{ marginTop: 12 }}>
						{summary}
					</p>
				</div>
			</footer>
		</div>
	</div>
);
