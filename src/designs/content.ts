/**
 * Single source of truth for all four design directions.
 * Facts come from the CV (public/cv-image.png) + LinkedIn.
 */
/** Naviair → Laerdal. Confirmed by Steffen. */
// export const HANDOVER_YEAR = 2023;

export type Kind = 'work' | 'study';

export interface Post {
	/** 5-letter fix name, aviation convention */
	ident: string;
	org: string;
	place: string;
	title: string;
	/** short role class used for the altitude profile */
	level: 'STUDENT' | 'ADMIN' | 'DEV' | 'LEAD';
	from: number;
	to: number | null;
	fromLabel: string;
	toLabel: string;
	/** Pre-set for narrow fielded columns, where "SUMMER–2011" will not fit. */
	period: string;
	kind: Kind;
	summary: string;
	tags: string[];
}

/** Seniority as flight level — the structural device for the SECTOR profile. */
export const FLIGHT_LEVEL: Record<Post['level'], number> = {
	STUDENT: 50,
	ADMIN: 110,
	DEV: 220,
	LEAD: 330,
};

export const identity = {
	name: 'Steffen Riber Thomsen',
	first: 'Steffen',
	callsign: 'SRT',
	role: 'Lead Software Developer',
	discipline: 'Networks & distributed systems',
	city: 'Copenhagen',
	country: 'Denmark',
	base: 'Kastrup',
	/** Kastrup, where he lives and where Naviair sits */
	lat: "55°37'N",
	lon: "012°39'E",
	email: 'riber4@gmail.com',
	site: 'riber.dev',
	github: 'linxiano',
	linkedin: 'steffenriber',
	twitter: 'linxiano',
	discord: 'linx#3036',
	onStationSince: 2013,
	/** One quiet human line, per the old site's spirit */
	personal: 'Off the clock: family first, games when there is time.',
};

export const thesis = 'Lead software developer in Copenhagen. Java, TypeScript, and the architecture underneath.';

export const greeting = 'Hi. I’m Steffen.';

/** The line under the greeting on v1's card. */
export const tagline = 'I work with computers!';

/** v1 writes the address out longhand to slow scrapers down. */
export const emailSpokenOut = identity.email.replace('@', ' (at) ').replace(/\.([^.]*)$/, ' (dot) $1');

export const cvFile = 'steffen_riber_thomsen_cv.pdf';

/** Short primary stack, for tag rows and readouts. */
export const stack = ['Java', 'TypeScript', 'Node.js', 'React', 'Azure', 'LLM integration', 'DevOps'];

/** His own construction from the original site, two of four rewritten. */
export const byLines = [
	{ role: 'Software lead', by: 'by trade' },
	{ role: 'Gamer', by: 'by choice' },
	{ role: 'Family man', by: 'by luck' },
	{ role: 'Web developer', by: 'by night' },
];

export const summary =
	'I lead software teams and design the architecture under them. Java and TypeScript day to day, Azure and event-driven design for the shape of things, and enough DevOps to keep releases boring. I started out measuring how networks fail, which is still how I think about systems.';

export const posts: Post[] = [
	{
		ident: 'LERDL',
		org: 'Laerdal Medical',
		place: 'Copenhagen',
		title: 'Lead Software Developer',
		level: 'LEAD',
		from: 2023,
		to: null,
		fromLabel: '2023',
		toLabel: 'PRESENT',
		period: `2023–NOW`,
		kind: 'work',
		summary:
			'TypeScript and Node on Azure, plus the architecture calls that come with leading a team. Lately that means putting LLM features into the product and AI tooling into how we build it. The product is clinical simulation software.',
		tags: ['TypeScript', 'Node.js', 'Azure', 'LLM integration', 'Architecture'],
	},
	{
		ident: 'NAVIR',
		org: 'Naviair',
		place: 'Kastrup',
		title: 'Lead Software Developer',
		level: 'LEAD',
		from: 2021,
		to: 2023,
		fromLabel: '2021',
		toLabel: '2023',
		period: `2021–2023`,
		kind: 'work',
		summary:
			'Swiss army knife. Cloud architect for our DevOps and CI/CD structure, software lead helping the team grow as a unit and write better solutions, and product owner scoping projects with business management.',
		tags: ['Azure', 'DevOps', 'CI/CD', 'Serverless', 'Event-driven'],
	},
	{
		ident: 'TERMA',
		org: 'Terma A/S',
		place: 'Herlev',
		title: 'Lead Software Developer',
		level: 'LEAD',
		from: 2018,
		to: 2021,
		fromLabel: '2018',
		toLabel: '2021',
		period: '2018–2021',
		kind: 'work',
		summary:
			'Led the product team through a rewrite: requirement analysis, technical research, and the system and software design behind it. Java throughout, and a team pointed at one goal. The product was C-Flex Patrol, aimed at patrol and light vessels.',
		tags: ['Java', 'Software architecture', 'SCRUM', 'Systems design'],
	},
	{
		ident: 'TERMA',
		org: 'Terma A/S',
		place: 'Herlev',
		title: 'Software Developer',
		level: 'DEV',
		from: 2014,
		to: 2018,
		fromLabel: '2014',
		toLabel: '2018',
		period: '2014–2018',
		kind: 'work',
		summary:
			'Full-stack Java. New features, integration toward sensors and sub-systems, and the interface operators actually look at. The product was C-Flex, a combat management system for the Royal Danish Navy.',
		tags: ['Java', 'Full-stack', 'Sensor integration', 'UI/UX'],
	},
	{
		ident: 'ELSVR',
		org: 'Elsiver',
		place: 'Aalborg',
		title: 'System Administrator',
		level: 'ADMIN',
		from: 2013,
		to: 2014,
		fromLabel: '2013',
		toLabel: '2014',
		period: '2013–2014',
		kind: 'work',
		summary:
			'Hardware and both local and cloud services across Windows and Linux. Database development and administration on Oracle, SQL Server and PostgreSQL, plus customer installs and upgrades.',
		tags: ['Linux', 'Windows Server', 'Oracle', 'PostgreSQL'],
	},
	{
		ident: 'AALBG',
		org: 'Aalborg University',
		place: 'Aalborg',
		title: 'Student Helper — Network & Security',
		level: 'STUDENT',
		from: 2011,
		to: 2011,
		fromLabel: 'SUMMER',
		toLabel: '2011',
		period: 'SUM 2011',
		kind: 'study',
		summary:
			'Designed and analysed network attacks against a deployed Intelligent Transport System, with Gatehouse Aalborg.',
		tags: ['Network security'],
	},
];

export interface Degree {
	award: string;
	field: string;
	school: string;
	place: string;
	from: number;
	to: number;
	thesis: string;
	note: string;
}

export const education: Degree[] = [
	{
		award: 'M.Sc.',
		field: 'Network & Distributed Systems',
		school: 'Aalborg University',
		place: 'Aalborg',
		from: 2011,
		to: 2013,
		thesis: 'Analysis and Improvement of Network Performance Measurement Procedures for Android Devices',
		note: 'Measured network performance and quality of service on mobile devices and cellular networks, using empirical data gathered by NetMap — an Android application I designed for the purpose.',
	},
	{
		award: 'B.Sc.',
		field: 'Computer Engineering, Communication Systems',
		school: 'Aalborg University',
		place: 'Aalborg',
		from: 2008,
		to: 2011,
		thesis: 'In-line Detection of Distributed Denial of Service Attacks on Core Networks',
		note: 'How DDoS attacks work and how to prevent them, across the interaction between hardware, software and human — embedded real-time systems and distributed design with robust communication.',
	},
];

export interface Record_ {
	year: number;
	label: string;
	detail: string;
	href?: string;
}

export const recognition: Record_[] = [
	{
		year: 2012,
		label: 'IEEE article, IUCC 2012 — Liverpool',
		detail: 'Location Assisted Vertical Handover Algorithm for QoS Optimization in End-to-End Connections',
	},
	{
		year: 2012,
		label: 'ing.dk product award — nominated',
		detail: 'For NetMap, the cellular measurement application behind my thesis',
	},
	{
		year: 2012,
		label: 'Invited talk, Collaboration Living Labs',
		detail: 'Internet quality — more than bandwidth',
	},
];

export const credentials: Record_[] = [
	{
		year: 2022,
		label: 'ISO/IEC 27001 Information Security',
		detail: 'Diploma, Fonden Dansk Standard',
	},
];

export interface SkillGroup {
	label: string;
	items: string[];
}

export const skills: SkillGroup[] = [
	{ label: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'SQL'] },
	{ label: 'Runtime', items: ['Node.js', 'React', 'React Native', 'Docker', 'Linux'] },
	{ label: 'Cloud', items: ['Microsoft Azure', 'Serverless', 'Event-driven design', 'CI/CD', 'DevOps'] },
	{ label: 'AI', items: ['LLM integration', 'Prompt engineering', 'AI-assisted development'] },
	{ label: 'Data', items: ['MongoDB', 'PostgreSQL', 'Oracle', 'SQL / NoSQL'] },
	{ label: 'Practice', items: ['Software architecture', 'SCRUM / Agile', 'Product ownership', 'ISO 27001'] },
];

/** v1's card shows one flat row of tags rather than grouped columns. */
export const skillsFlat = skills.flatMap((group) => group.items);

export const languages = [
	{ name: 'Danish', level: 'Native' },
	{ name: 'English', level: 'Fluent / bilingual' },
];

export type SocialName = 'LinkedIn' | 'GitHub' | 'Twitter' | 'Discord';

/** The icon row on v1's card. v2 uses the shorter `links` list instead. */
export const socials: Array<{ name: SocialName; handle: string; href: string }> = [
	{ name: 'LinkedIn', handle: `linkedin.com/in/${identity.linkedin}/`, href: `https://www.linkedin.com/in/${identity.linkedin}/` },
	{ name: 'GitHub', handle: `github.com/${identity.github}`, href: `https://github.com/${identity.github}` },
	{ name: 'Twitter', handle: `twitter.com/${identity.twitter}`, href: `https://twitter.com/${identity.twitter}` },
	/* Preserved verbatim from the original site — see note in the summary. */
	{ name: 'Discord', handle: `discordapp.com/users/${identity.discord}`, href: `http://discordapp.com/users/${identity.discord}` },
];

export interface Project {
	name: string;
	blurb: string;
	href: string;
	image: string;
	kind: 'external' | 'document';
	/** v1 routes the CV through its own in-app viewer; v2 links the file. */
	route?: string;
}

export const projects: Project[] = [
	{
		name: 'ChatGPT Messenger',
		blurb: 'A chat client built to sit in front of the API rather than a browser tab.',
		href: 'https://chatgpt-messenger.riber.dev/',
		image: '/chatgpt-messenger.png',
		kind: 'external',
	},
	{
		name: 'Curriculum vitae',
		blurb: 'The full record, two pages, as a PDF.',
		href: `/${cvFile}`,
		image: '/cv-image.png',
		kind: 'document',
		route: '/cv',
	},
];

export const links = [
	{ label: 'Email', value: identity.email, href: `mailto:${identity.email}` },
	{ label: 'LinkedIn', value: `in/${identity.linkedin}`, href: `https://www.linkedin.com/in/${identity.linkedin}/` },
	{ label: 'GitHub', value: identity.github, href: `https://github.com/${identity.github}` },
];
