import clsx from 'clsx';
import type { Icon as IconType } from '../../utilities/types';
import styles from './style.module.css';
import { Icon } from '../Icon';

type IconButtonProps = {
	icon: IconType;
	inverted?: boolean;
	active?: boolean;
};

export const IconButton = ({
	icon,
	inverted = false,
	active = true,
}: IconButtonProps) => {
	return (
		<button
			className={clsx(
				styles.button,
				inverted && styles.inverted,
				!active && styles.transparent
			)}
		>
			<Icon type={icon} />
		</button>
	);
};
