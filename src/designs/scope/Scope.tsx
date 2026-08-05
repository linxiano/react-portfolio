import React from 'react';
import './scope.css';
import { credentials, education, identity, languages, links, posts, projects, recognition, skills, summary, thesis } from '../content';

/* ============================================================
   The plan position indicator.
   Range is calibrated in years, not miles: the centre is now,
   the outer ring is 2008. Each post in his history is a return
   on that scope, so the trail inbound *is* the career.
   ============================================================ */

const NOW = 2026;
const R_NOW = 12; // radius of the present
const R_PER_YEAR = 1.778; // 18 years mapped onto 32 units
const BEARING_NEAR = 237;
const BEARING_FAR = 202;

const radiusForYear = (year: number) => R_NOW + (NOW - year) * R_PER_YEAR;

const plot = (bearing: number, radius: number) => {
	const rad = (bearing * Math.PI) / 180;
	return { x: 50 + radius * Math.sin(rad), y: 50 - radius * Math.cos(rad) };
};

/** Oldest first, so the trail reads outward-to-inward like a real history trail. */
const returns = [...posts]
	.sort((a, b) => a.from - b.from)
	.map((post, i, all) => {
		const t = all.length === 1 ? 1 : i / (all.length - 1);
		return { post, ...plot(BEARING_FAR + (BEARING_NEAR - BEARING_FAR) * t, radiusForYear(post.from)) };
	});

const head = plot(BEARING_NEAR, R_NOW);

const RANGE_RINGS = [5, 10, 15];
const SPOKES = Array.from({ length: 12 }, (_, i) => i * 30);
const CARDINALS = [0, 90, 180, 270];

const Ppi = () => (
	<div className={'scope-ppi'}>
		<svg viewBox={'0 0 100 100'} role={'img'} aria-label={'A radar display where range is measured in years. The centre is today; each return inbound is a job, back to university in 2008.'}>
			{SPOKES.map((bearing) => {
				const outer = plot(bearing, 47);
				return <line className={'scope-ppi-spoke'} key={bearing} x1={50} y1={50} x2={outer.x} y2={outer.y} />;
			})}

			{RANGE_RINGS.map((years) => {
				const r = R_NOW + years * R_PER_YEAR;
				const label = plot(45, r);
				return (
					<g key={years}>
						<circle className={'scope-ppi-ring'} cx={50} cy={50} r={r} />
						<text className={'scope-ppi-range'} x={label.x + 0.8} y={label.y - 1}>
							{`${years}Y`}
						</text>
					</g>
				);
			})}
			<circle className={'scope-ppi-ring'} cx={50} cy={50} r={47} />

			{CARDINALS.map((bearing) => {
				const p = plot(bearing, 43);
				return (
					<text className={'scope-ppi-bearing'} key={bearing} x={p.x} y={p.y + 1} textAnchor={'middle'}>
						{String(bearing).padStart(3, '0')}
					</text>
				);
			})}

			<g className={'scope-ppi-trail'}>
				{returns.map((r, i) => (
					<circle key={`${r.post.ident}-${r.post.from}`} cx={r.x} cy={r.y} r={0.85 + i * 0.12} opacity={0.3 + i * 0.11} />
				))}
			</g>

			<g className={'scope-ppi-track'}>
				<line x1={head.x + 1.4} y1={head.y - 1} x2={head.x + 13} y2={head.y - 7.5} />
				<polygon points={`${head.x},${head.y - 2.6} ${head.x + 2.2},${head.y + 1.8} ${head.x - 2.2},${head.y + 1.8}`} />
				<text x={head.x + 14} y={head.y - 7.6}>
					{identity.callsign}
				</text>
				<text className={'scope-ppi-track-2'} x={head.x + 14} y={head.y - 3.4}>
					{'LEAD · CPH'}
				</text>
			</g>
		</svg>
		<div className={'scope-ppi-sweep'} />
		<div className={'scope-ppi-bezel'} />
	</div>
);

export const Scope = () => (
	<div className={'scope'}>
		<div className={'scope-shell'}>
			<header className={'scope-bar scope-data'}>
				<span className={'scope-bar-live'}>
					<i />
					{identity.site}
				</span>
				<span>{identity.discipline}</span>
				<span className={'scope-bar-spacer'}>
					{identity.city} · {identity.lat} {identity.lon}
				</span>
			</header>

			<div className={'scope-hero'}>
				<div>
					<p className={'scope-label'}>{identity.role}</p>
					<h1 className={'scope-name'}>
						Steffen Riber <em>Thomsen</em>
					</h1>
					<p className={'scope-thesis'}>{thesis}</p>

					<dl className={'scope-readout'}>
						<div>
							<dt>Callsign</dt>
							<dd className={'is-active'}>{identity.callsign}</dd>
						</div>
						<div>
							<dt>Base</dt>
							<dd>{identity.base.toUpperCase()}</dd>
						</div>
						<div>
							<dt>On station</dt>
							<dd>{`${NOW - identity.onStationSince} YRS`}</dd>
						</div>
						<div>
							<dt>Stack</dt>
							<dd>{'JAVA · TS · AZURE'}</dd>
						</div>
					</dl>
				</div>
				<Ppi />
			</div>

			<section className={'scope-section'}>
				<div className={'scope-section-head'}>
					<h2>Track history</h2>
					<span className={'scope-data'}>{`${posts.length} returns · 2011 — present`}</span>
				</div>
				<ul className={'scope-history'}>
					{posts.map((post) => (
						<li className={'scope-post'} key={`${post.ident}-${post.from}-${post.title}`}>
							<span className={'scope-post-when scope-data'}>
								<b>{post.fromLabel}</b> — {post.toLabel}
							</span>
							<span className={'scope-post-ident'}>
								{post.ident}
								<small>{post.place.toUpperCase()}</small>
							</span>
							<div className={'scope-post-body'}>
								<h3>
									{post.org} <em>{post.title}</em>
								</h3>
								<p>{post.summary}</p>
							</div>
							<ul className={'scope-post-tags'}>
								{post.tags.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>

			<section className={'scope-section'}>
				<div className={'scope-section-head'}>
					<h2>Capability</h2>
					<span className={'scope-data'}>{languages.map((l) => `${l.name} — ${l.level}`).join(' · ')}</span>
				</div>
				<div className={'scope-skills'}>
					{skills.map((group) => (
						<div className={'scope-panel'} key={group.label}>
							<span className={'scope-label'}>{group.label}</span>
							<ul>
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className={'scope-section'}>
				<div className={'scope-section-head'}>
					<h2>Where it started</h2>
					<span className={'scope-data'}>Aalborg University</span>
				</div>
				<div className={'scope-grid'}>
					{education.map((degree) => (
						<div className={'scope-panel'} key={degree.award}>
							<span className={'scope-label'}>{`${degree.from} — ${degree.to}`}</span>
							<h3>
								{degree.award} {degree.field}
							</h3>
							<p className={'scope-panel-meta scope-data'}>
								{degree.school}, {degree.place}
							</p>
							<blockquote>
								“{degree.thesis}”
								<cite>{degree.note}</cite>
							</blockquote>
						</div>
					))}
					<div className={'scope-panel'}>
						<span className={'scope-label'}>On the record</span>
						{[...recognition, ...credentials].map((item) => (
							<dl className={'scope-rec'} key={item.label}>
								<dt>{item.year}</dt>
								<dd>
									<b>{item.label}</b>
									<span>{item.detail}</span>
								</dd>
							</dl>
						))}
					</div>
				</div>
			</section>

			<section className={'scope-section'}>
				<div className={'scope-section-head'}>
					<h2>Built</h2>
					<span className={'scope-data'}>Side of the desk</span>
				</div>
				<div className={'scope-work'}>
					{projects.map((project) => (
						<a className={'scope-card'} key={project.name} href={project.href} target={'_blank'} rel={'noreferrer'}>
							<div className={'scope-card-frame'}>
								<img src={project.image} alt={project.name} />
							</div>
							<div className={'scope-card-body'}>
								<h3>
									{project.name}
									<span className={'scope-data'}>{project.kind === 'external' ? 'LIVE ↗' : 'PDF ↗'}</span>
								</h3>
								<p>{project.blurb}</p>
							</div>
						</a>
					))}
				</div>
			</section>

			<footer className={'scope-foot'}>
				<div>
					<span className={'scope-label'}>Get in touch</span>
					<div className={'scope-foot-links'}>
						{links.map((link) => (
							<a key={link.label} href={link.href} target={'_blank'} rel={'noreferrer'}>
								<span>{link.label}</span>
								<span>{link.value}</span>
							</a>
						))}
					</div>
				</div>
				<div>
					<span className={'scope-label'}>Off duty</span>
					<p className={'scope-foot-text'}>{identity.personal}</p>
				</div>
				<div>
					<span className={'scope-label'}>In short</span>
					<p className={'scope-foot-text'}>{summary}</p>
				</div>
			</footer>
		</div>
	</div>
);
