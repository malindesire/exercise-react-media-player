import clsx from 'clsx';
import type { Icon as IconType } from '../../utilities/types';
import styles from './style.module.css';
import { Icon } from '../Icon';

type IconButtonProps = {
	icon: IconType;
	inverted?: boolean;
	active?: boolean;
	button?: boolean;
	className?: string;
};

export const IconButton = ({
	icon,
	inverted = false,
	active = true,
	button,
	className,
}: IconButtonProps) => {
	if (!button) {
		return (
			<div
				className={clsx(
					styles.button,
					inverted && styles.inverted,
					!active && styles.transparent,
					className
				)}
			>
				<Icon type={icon} />
			</div>
		);
	}

	return (
		<button
			className={clsx(
				styles.button,
				inverted && styles.inverted,
				!active && styles.transparent,
				className
			)}
		>
			<Icon type={icon} />
		</button>
	);
};
