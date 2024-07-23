import { useGameStore } from '@/store/game/game.store';
import { ICard } from '@/types/card.types';
import { getStyleRotation } from '@/utils/getStyleRotation.util';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
	card: ICard;
	onClick?: () => void;
	isDisabled?: boolean;
	isHided?: boolean;
	style?: React.CSSProperties;
	index: number;
	arrayLength: number;
}

export function GameCard({
	card,
	isDisabled,
	isHided,
	onClick,
	style,
	index,
	arrayLength,
}: Props) {
	const { currentTurn, player } = useGameStore();
	const [isHovered, setIsHovered] = useState(false);

	const { rotate, translateY } = getStyleRotation(index, arrayLength, !isHided);
	const initialAnimation = { scale: 1, zIndex: 0, y: translateY, rotate };

	const isDisabledButton = isDisabled || (currentTurn !== 'player' && !isHided);

	return (
		<motion.button
			className={clsx(
				'relative -ml-7 inline-block h-[8.5rem] w-24 rounded-lg border-2 border-transparent transition-colors will-change-transform',
				{
					'-ml-7 shadow': !isHided,
					'-ml-[2.15rem]': isHided,
					'cursor-pointer': !isHided && !isDisabledButton,
					'!border-green-400':
						!isHided && currentTurn === 'player' && player.mana >= card.mana,
				}
			)}
			style={style}
			disabled={isDisabledButton}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			initial={{ scale: 1, zIndex: 0, y: 0 }}
			animate={
				isHovered && !isHided
					? { scale: 1.3, zIndex: 10, y: -95 }
					: initialAnimation
			}
			transition={{ type: 'just', stiffness: 230, damping: 32 }}
		>
			{isDisabledButton && (
				<div className="absolute left-0 top-0 z-[1] h-full w-full bg-black/45" />
			)}
			<img
				src={isHided ? '/assets/cards/cover.png' : card.imageUrl}
				alt={card.name}
				draggable="false"
			/>
			)
		</motion.button>
	);
}
