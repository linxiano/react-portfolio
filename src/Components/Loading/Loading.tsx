import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

export const Loading = () => {
	return (
		<div className={'flex h-full items-center justify-center'}>
			<AiOutlineLoading className={'mr-[7px] h-[30%] w-[30%] animate-spin'} />
		</div>
	);
};
