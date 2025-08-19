import type { Icon as IconType } from '../../utilities/types';
import clsx from 'clsx';
import styles from './style.module.css';

type IconProps = {
	type: IconType;
	style?: 'white' | 'blue' | 'transparent';
};

export const Icon = ({ type, style = 'white' }: IconProps) => {
	const icon = (iconType: IconType) => {
		switch (iconType) {
			case 'play':
				return 'play_arrow';
			case 'add':
				return 'add';
			case 'heart':
				return 'favorite';
			case 'shuffle':
				return 'shuffle';
			case 'repeat':
				return 'repeat';
			case 'skipPrev':
				return 'skip_previous';
			case 'skipNext':
				return 'skip_next';
		}
	};

	return (
		<span
			className={clsx(
				'material-symbols-outlined',
				styles.icon,
				style === 'blue' && styles.blue,
				style === 'transparent' && styles.transparent
			)}
		>
			{icon(type)}
		</span>
	);
};
