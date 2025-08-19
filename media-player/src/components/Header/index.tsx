import { IconButton } from '../IconButton';
import styles from './style.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<IconButton icon="back" className={styles.button} />
			<h1 className={styles.title}>{'Playlist - Feels <3'}</h1>
			<IconButton icon="options" className={styles.button} />
		</header>
	);
};
