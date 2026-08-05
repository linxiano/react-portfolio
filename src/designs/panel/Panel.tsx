import React from 'react';
import './panel.css';
import Portrait from '../../Pages/HomeLayout/profile-pic.png';
import { credentials, education, identity, languages, links, posts, projects, recognition, skills, summary, thesis } from '../content';

const YEARS_ACTIVE = 2026 - identity.onStationSince;

/** What he works in. The one he reaches for first gets the magenta lamp. */
const LAMPS = [
	{ label: 'TypeScript', state: 'is-active' },
	{ label: 'Java', state: 'is-lit' },
	{ label: 'Node.js', state: 'is-lit' },
	{ label: 'Azure', state: 'is-lit' },
	{ label: 'Docker', state: 'is-lit' },
];

const Screws = () => (
	<>
		<span className={'panel-screw tl'} />
		<span className={'panel-screw tr'} />
		<span className={'panel-screw bl'} />
		<span className={'panel-screw br'} />
	</>
);

export const Panel = () => (
	<div className={'panel'}>
		<div className={'panel-shell'}>
			<header className={'panel-annunciator'}>
				{LAMPS.map((lamp) => (
					<span className={`panel-lamp ${lamp.state}`} key={lamp.label}>
						<i />
						{lamp.label}
					</span>
				))}
				<span className={'panel-annunciator-id panel-data'}>
					{identity.site} · {identity.callsign}
				</span>
			</header>

			<div className={'panel-plate panel-chamfer'}>
				<Screws />
				<div>
					<span className={'panel-field'}>{identity.role}</span>
					<h1 className={'panel-name'}>
						Steffen Riber
						<br />
						<span>Thomsen</span>
					</h1>
					<p className={'panel-thesis'}>{thesis}</p>
				</div>
				<figure className={'panel-window'} style={{ margin: 0 }}>
					<img src={Portrait} alt={identity.name} />
				</figure>
			</div>

			<dl className={'panel-placard'}>
				<div>
					<dt className={'panel-field'}>Base</dt>
					<dd>
						{identity.base.toUpperCase()} · {identity.lat} {identity.lon}
					</dd>
				</div>
				<div>
					<dt className={'panel-field'}>Discipline</dt>
					<dd>{identity.discipline}</dd>
				</div>
				<div>
					<dt className={'panel-field'}>Years active</dt>
					<dd className={'is-backlit'}>{`${YEARS_ACTIVE} · SINCE ${identity.onStationSince}`}</dd>
				</div>
				<div>
					<dt className={'panel-field'}>Languages</dt>
					<dd>{languages.map((l) => l.name).join(' · ')}</dd>
				</div>
			</dl>

			<section className={'panel-section'}>
				<div className={'panel-section-head'}>
					<h2>Progress strips</h2>
					<span className={'panel-data'}>{`${posts.length} posts · 2011 — present`}</span>
				</div>
				<div className={'panel-rack'}>
					{posts.map((post) => (
						<article className={'panel-strip panel-chamfer'} key={`${post.ident}-${post.from}-${post.title}`}>
							<dl className={'panel-strip-fields'}>
								<div>
									<dt className={'panel-field'}>Period</dt>
									<dd className={'is-backlit'}>{post.period}</dd>
								</div>
								<div>
									<dt className={'panel-field'}>Operator</dt>
									<dd>{post.org}</dd>
								</div>
								<div>
									<dt className={'panel-field'}>Base</dt>
									<dd>{post.place}</dd>
								</div>
								<div>
									<dt className={'panel-field'}>Ident</dt>
									<dd className={'is-ident'}>{post.ident}</dd>
								</div>
							</dl>
							<div className={'panel-strip-body'}>
								<div>
									<h3>{post.title}</h3>
									<p>{post.summary}</p>
								</div>
								<ul className={'panel-strip-tags'}>
									{post.tags.map((tag) => (
										<li key={tag}>{tag}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className={'panel-section'}>
				<div className={'panel-section-head'}>
					<h2>Capability</h2>
					<span className={'panel-data'}>{languages.map((l) => `${l.name} — ${l.level}`).join(' · ')}</span>
				</div>
				<div className={'panel-modules'}>
					{skills.map((group) => (
						<div className={'panel-module'} key={group.label}>
							<span className={'panel-field'}>{group.label}</span>
							<ul>
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className={'panel-section'}>
				<div className={'panel-section-head'}>
					<h2>Where it started</h2>
					<span className={'panel-data'}>Aalborg University</span>
				</div>
				<div className={'panel-plates'}>
					{education.map((degree) => (
						<div className={'panel-card panel-chamfer'} key={degree.award}>
							<span className={'panel-field'}>{`${degree.from} — ${degree.to}`}</span>
							<h3>
								{degree.award} {degree.field}
							</h3>
							<p className={'panel-card-meta panel-data'}>
								{degree.school}, {degree.place}
							</p>
							<blockquote>
								“{degree.thesis}”
								<cite>{degree.note}</cite>
							</blockquote>
						</div>
					))}
					<div className={'panel-card panel-chamfer'}>
						<span className={'panel-field'}>On the record</span>
						<div style={{ marginTop: 6 }}>
							{[...recognition, ...credentials].map((item) => (
								<dl className={'panel-rec'} key={item.label}>
									<dt>{item.year}</dt>
									<dd>
										<b>{item.label}</b>
										<span>{item.detail}</span>
									</dd>
								</dl>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={'panel-section'}>
				<div className={'panel-section-head'}>
					<h2>Built</h2>
					<span className={'panel-data'}>Side of the desk</span>
				</div>
				<div className={'panel-work'}>
					{projects.map((project) => (
						<a className={'panel-tile panel-chamfer'} key={project.name} href={project.href} target={'_blank'} rel={'noreferrer'}>
							<div className={'panel-tile-frame'}>
								<img src={project.image} alt={project.name} />
							</div>
							<div className={'panel-tile-body'}>
								<h3>
									{project.name}
									<span className={'panel-data'}>{project.kind === 'external' ? 'LIVE ↗' : 'PDF ↗'}</span>
								</h3>
								<p>{project.blurb}</p>
							</div>
						</a>
					))}
				</div>
			</section>

			<footer className={'panel-foot'}>
				<div>
					<span className={'panel-field'}>Get in touch</span>
					<div className={'panel-foot-links'}>
						{links.map((link) => (
							<a key={link.label} href={link.href} target={'_blank'} rel={'noreferrer'}>
								<span>{link.label}</span>
								<span>{link.value}</span>
							</a>
						))}
					</div>
				</div>
				<div>
					<span className={'panel-field'}>Off duty</span>
					<p className={'panel-foot-text'}>{identity.personal}</p>
				</div>
				<div>
					<span className={'panel-field'}>In short</span>
					<p className={'panel-foot-text'}>{summary}</p>
				</div>
			</footer>
		</div>
	</div>
);
