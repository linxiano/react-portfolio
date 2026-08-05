import React from 'react';
import './versionSwitch.css';

export type Version = 'v1' | 'v2';

/** Kept in sync with the pre-paint script in index.html. */
export const VERSION_KEY = 'riber:version';
export const DEFAULT_VERSION: Version = 'v2';

const read = (): Version => {
	try {
		return localStorage.getItem(VERSION_KEY) === 'v1' ? 'v1' : DEFAULT_VERSION;
	} catch {
		/* private mode, blocked storage — fall back rather than break the page */
		return DEFAULT_VERSION;
	}
};

/**
 * v1 is a single fixed card that must not scroll; v2 is a scrolling page.
 * The attribute on <html> is what index.css keys the overflow lock off, and
 * index.html sets it before first paint so v1 never flashes a scrollbar.
 */
export const useVersion = () => {
	const [version, setVersion] = React.useState<Version>(read);

	React.useEffect(() => {
		document.documentElement.dataset.appVersion = version;
		try {
			localStorage.setItem(VERSION_KEY, version);
		} catch {
			/* choice just will not persist */
		}
	}, [version]);

	return [version, setVersion] as const;
};

const OPTIONS: Array<{ value: Version; label: string; title: string }> = [
	{ value: 'v1', label: 'V1', title: 'The original card' },
	{ value: 'v2', label: 'V2', title: 'After hours' },
];

export const VersionSwitch = ({ version, onChange }: { version: Version; onChange: (next: Version) => void }) => (
	<div className={'version-switch'} role={'group'} aria-label={'Site version'}>
		<span className={'version-switch-thumb'} data-at={version} aria-hidden={'true'} />
		{OPTIONS.map((option) => (
			<button
				key={option.value}
				type={'button'}
				title={option.title}
				aria-pressed={version === option.value}
				onClick={() => onChange(option.value)}>
				{option.label}
			</button>
		))}
	</div>
);
