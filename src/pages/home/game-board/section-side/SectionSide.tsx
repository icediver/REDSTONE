import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface ISectionSide extends PropsWithChildren {
	isPlayer: boolean;
}

export function SectionSide({ isPlayer, children }: ISectionSide) {
	return (
		<section
			className={clsx('absolute left-0 h-[49.5vh] w-full', {
				'top-0 flex flex-col justify-end pb-7 pt-[6em]': !isPlayer,
				'bottom-0 pb-[6rem] pt-7': isPlayer,
			})}
		>
			{children}
		</section>
	);
}
