import React from 'react';
import './styles.scss';

export type TagProps = {
	name: string;
};

export const Tag = (props: TagProps) => {
	return <div className={'tag'}>{`${props.name}`}</div>;
};
