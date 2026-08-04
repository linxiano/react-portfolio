import React from 'react';

export type TagProps = {
	name: string;
};

export const Tag = (props: TagProps) => {
	return <div className={'m-0.5 inline rounded-md bg-accent-soft p-1 text-[smaller] font-extrabold text-white/70'}>{`${props.name}`}</div>;
};
