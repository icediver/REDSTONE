import { useNotificationStore } from '@/store/notification/notification.store';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export function Notification() {
	const { message, type } = useNotificationStore();
	return (
		!!message && (
			<motion.div
				initial={{ opacity: 0, zoom: 1 }}
				animate={{ opacity: 1, zoom: 1.06 }}
				exit={{ opacity: 0, zoom: 1 }}
				transition={{ duration: 0.5 }}
				className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#102a27]/80"
			>
				<div
					className={clsx(
						'w-max rounded-lg px-4 py-2 text-xl font-semibold shadow-2xl',
						{
							'bg-gradient-to-t from-red-700 to-red-500': type === 'lose',
							'bg-gradient-to-t from-green-700 to-green-500': type === 'win',
							'text-white secondary-gradient': type === 'info',
						}
					)}
				>
					{message}
				</div>
			</motion.div>
		)
	);
}
