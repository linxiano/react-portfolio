import React from 'react';
import { App } from './App';
import { Neon } from './designs/neon/Neon';
import { useVersion, VersionSwitch } from './Version/VersionSwitch';

/** v1 is the original card, v2 is After hours. The switch rides above both. */
export const Root = () => {
	const [version, setVersion] = useVersion();

	return (
		<>
			{version === 'v1' ? <App /> : <Neon />}
			<VersionSwitch version={version} onChange={setVersion} />
		</>
	);
};
