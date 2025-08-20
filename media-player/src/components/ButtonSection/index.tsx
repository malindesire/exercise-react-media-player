import { useState } from 'react';
import { IconButton } from '../IconButton';
import styles from './style.module.css';

type ButtonSectionProps = {
	playing: boolean;
	onPlay: () => void;
	onPrev: () => void;
	onNext: () => void;
};

export const ButtonSection = ({
	playing,
	onPlay,
	onPrev,
	onNext,
}: ButtonSectionProps) => {
	const [repeat, setRepeat] = useState(false);
	const [shuffle, setShuffle] = useState(false);

	return (
		<div className={styles.section}>
			<IconButton
				className={styles.repeat}
				icon="repeat"
				active={repeat}
				onClick={() => {
					setRepeat(!repeat);
					if (!repeat) setShuffle(false);
				}}
			/>
			<IconButton
				className={styles.previous}
				icon="previous"
				onClick={onPrev}
			/>
			<IconButton
				className={styles.play}
				icon={playing ? 'pause' : 'play'}
				inverted
				onClick={onPlay}
			/>
			<IconButton className={styles.next} icon="next" onClick={onNext} />
			<IconButton
				className={styles.shuffle}
				icon="shuffle"
				active={shuffle}
				onClick={() => {
					setShuffle(!shuffle);
					if (!shuffle) setRepeat(false);
				}}
			/>
		</div>
	);
};
