import { useState } from 'react';
import { IconButton } from '../IconButton';
import styles from './style.module.css';

type ButtonSectionProps = {
	playing: boolean;
	onPlay: () => void;
};

export const ButtonSection = ({ playing, onPlay }: ButtonSectionProps) => {
	const [repeat, setRepeat] = useState(false);
	const [shuffle, setShuffle] = useState(false);

	return (
		<div className={styles.section}>
			<IconButton
				className={styles.repeat}
				icon="repeat"
				active={repeat}
				onClick={() => setRepeat(!repeat)}
			/>
			<IconButton className={styles.previous} icon="previous" />
			<IconButton
				className={styles.play}
				icon={playing ? 'pause' : 'play'}
				inverted
				onClick={onPlay}
			/>
			<IconButton className={styles.next} icon="next" />
			<IconButton
				className={styles.shuffle}
				icon="shuffle"
				active={shuffle}
				onClick={() => setShuffle(!shuffle)}
			/>
		</div>
	);
};
