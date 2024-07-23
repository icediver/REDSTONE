import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'gray' | 'disabled';
	isCircle?: boolean;
}

export function Button({
	children,
	variant = 'primary',
	isCircle = false,
	className,
	...rest
}: IButton) {
	return (
		<button
			className={clsx(
				styles.button,
				styles[variant],
				{ [styles.circle]: isCircle },
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
