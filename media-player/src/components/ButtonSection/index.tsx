import { IconButton } from '../IconButton';
import styles from './style.module.css';

export const ButtonSection = () => {
	return (
		<div className={styles.section}>
			<IconButton className={styles.repeat} icon="repeat" />
			<IconButton className={styles.previous} icon="previous" />
			<IconButton className={styles.play} icon="play" inverted />
			<IconButton className={styles.next} icon="next" />
			<IconButton className={styles.shuffle} icon="shuffle" />
		</div>
	);
};
