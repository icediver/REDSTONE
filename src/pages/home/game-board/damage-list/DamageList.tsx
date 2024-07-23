import { useDamageStore } from '@/store/game/damage.store';
import { PlayerType } from '@/store/game/game.types';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

export function DamageList({
	id,
	isRight = true,
}: {
	id: string | PlayerType;
	isRight: boolean;
}) {
	const { damages } = useDamageStore();
	return (
		<AnimatePresence>
			{(damages[id] || []).map(({ id: damageId, amount }, index) => (
				<motion.div
					key={damageId}
					initial={{ opacity: 1, y: 0, rotate: 0 }}
					animate={{ opacity: 0, y: 50 + index * 40, rotate: 15 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 2 }}
					className={clsx(
						'absolute top-2 z-30 h-8 w-full text-center text-3xl font-bold text-red-500',
						isRight ? '-right-[60%]' : '-left-[56%]'
					)}
				>
					-{amount}
				</motion.div>
			))}
		</AnimatePresence>
	);
}
