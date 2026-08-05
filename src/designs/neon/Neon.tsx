import React from 'react';
import './neon.css';
import Portrait from '../../Pages/HomeLayout/profile-pic.png';
import { byLines, credentials, education, greeting, identity, languages, links, posts, projects, recognition, skills, stack, summary, thesis } from '../content';

/**
 * The pointer nudges the bloom a few pixels. The original site had an
 * InteractiveBackground, so reacting to the pointer is continuity rather
 * than invention — but it stays a nudge, not a swoop.
 */
const usePointerBloom = () => {
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const field = ref.current;
		if (!field) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		if (!window.matchMedia('(hover: hover)').matches) return;

		let frame = 0;
		const onMove = (event: PointerEvent) => {
			if (frame) return;
			frame = window.requestAnimationFrame(() => {
				frame = 0;
				field.style.setProperty('--mx', (event.clientX / window.innerWidth - 0.5).toFixed(3));
				field.style.setProperty('--my', (event.clientY / window.innerHeight - 0.5).toFixed(3));
			});
		};

		window.addEventListener('pointermove', onMove, { passive: true });
		return () => {
			window.removeEventListener('pointermove', onMove);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return ref;
};

/** The page runs to six screens, so the bar carries a way through it. */
const SECTIONS = [
	{ id: 'work', label: 'Work' },
	{ id: 'stack', label: 'Stack' },
	{ id: 'study', label: 'Study' },
	{ id: 'built', label: 'Built' },
];

export const Neon = () => {
	const field = usePointerBloom();

	return (
		<div className={'neon'}>
			<div className={'neon-field'} ref={field} aria-hidden={'true'}>
				<span className={'neon-photo'} />
				<span className={'neon-scrim'} />
				{/* The photo already carries magenta, cyan and sodium. The one
				    bloom left is the light the sign itself casts. */}
				<span className={'neon-blob neon-blob-a'} />
			</div>

			<div className={'neon-shell'}>
				<main className={'neon-console'}>
					<header className={'neon-bar'}>
						<span className={'neon-sign'}>
							<span>RIBER.DEV</span>
						</span>
						<nav className={'neon-nav neon-mono'} aria-label={'Sections'}>
							{SECTIONS.map((section) => (
								<a key={section.id} href={`#${section.id}`}>
									{section.label}
								</a>
							))}
							<a className={'neon-nav-mail'} href={`mailto:${identity.email}`}>
								{identity.email}
							</a>
						</nav>
					</header>

					<section className={'neon-section neon-intro'}>
						<figure className={'neon-portrait'}>
							<img src={Portrait} alt={identity.name} />
						</figure>
						<div>
							<h1 className={'neon-hi'}>
								{greeting}
								<small>
									{identity.name} — {identity.role}, {identity.city}
								</small>
							</h1>
							<p className={'neon-thesis'}>{thesis}</p>
							<ul className={'neon-tags'}>
								{stack.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					<section className={'neon-section'}>
						<dl className={'neon-by'}>
							{byLines.map((line) => (
								<div key={line.role}>
									<dt>{line.role}</dt>
									<dd>{line.by}</dd>
								</div>
							))}
						</dl>
					</section>

					<section className={'neon-section'} id={'work'}>
						<div className={'neon-head'}>
							<h2>Where I have worked</h2>
							<span className={'neon-mono'}>{`${posts.length} roles · 2011 — present`}</span>
						</div>
						<ul className={'neon-roles'}>
							{posts.map((post) => (
								<li className={'neon-role'} key={`${post.ident}-${post.from}-${post.title}`}>
									<span className={'neon-role-when neon-mono'}>{post.period}</span>
									<div>
										<h3>
											{post.title} <em>— {post.org}, {post.place}</em>
										</h3>
										<p>{post.summary}</p>
										<ul>
											{post.tags.map((tag) => (
												<li key={tag}>{tag}</li>
											))}
										</ul>
									</div>
								</li>
							))}
						</ul>
					</section>

					<section className={'neon-section'} id={'stack'}>
						<div className={'neon-head'}>
							<h2>What I work with</h2>
							<span className={'neon-mono'}>{languages.map((l) => `${l.name} — ${l.level}`).join(' · ')}</span>
						</div>
						<div className={'neon-stack'}>
							{skills.map((group) => (
								<div key={group.label}>
									<span className={'neon-label'}>{group.label}</span>
									<ul>
										{group.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</section>

					<section className={'neon-section'} id={'study'}>
						<div className={'neon-head'}>
							<h2>Studied &amp; published</h2>
							<span className={'neon-mono'}>Aalborg University</span>
						</div>
						<div className={'neon-record'}>
							<div>
								{education.map((degree) => (
									<div className={'neon-degree'} key={degree.award} style={{ marginBottom: 22 }}>
										<span className={'neon-label'}>{`${degree.from} — ${degree.to}`}</span>
										<h3>
											{degree.award} {degree.field}
										</h3>
										<p className={'neon-mono'}>
											{degree.school}, {degree.place}
										</p>
										<blockquote>“{degree.thesis}”</blockquote>
									</div>
								))}
							</div>
							<div>
								{[...recognition, ...credentials].map((item) => (
									<dl className={'neon-rec'} key={item.label}>
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

					<section className={'neon-section'} id={'built'}>
						<div className={'neon-head'}>
							<h2>Built after hours</h2>
							<span className={'neon-mono'}>Side of the desk</span>
						</div>
						<div className={'neon-work'}>
							{projects.map((project) => (
								<a className={'neon-card'} key={project.name} href={project.href} target={'_blank'} rel={'noreferrer'}>
									<div className={'neon-card-frame'}>
										<img src={project.image} alt={project.name} />
									</div>
									<div className={'neon-card-body'}>
										<h3>
											{project.name}
											<span className={'neon-mono'}>{project.kind === 'external' ? 'LIVE ↗' : 'PDF ↗'}</span>
										</h3>
										<p>{project.blurb}</p>
									</div>
								</a>
							))}
						</div>
					</section>

					<section className={'neon-section'}>
						<span className={'neon-label'}>In short</span>
						<p className={'neon-thesis'} style={{ maxWidth: '62ch' }}>
							{summary}
						</p>
					</section>

					<footer className={'neon-foot'}>
						{links.map((link) => (
							<a key={link.label} href={link.href} target={'_blank'} rel={'noreferrer'}>
								{link.value}
							</a>
						))}
						<p className={'neon-foot-personal'}>{identity.personal}</p>
					</footer>
				</main>
			</div>
		</div>
	);
};
