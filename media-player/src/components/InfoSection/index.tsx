import { useState } from 'react';
import { IconButton } from '../IconButton';
import { Info } from '../Info';
import styles from './style.module.css';

type InfoSectionProps = {
	creator: string;
	title: string;
};

export const InfoSection = ({ creator, title }: InfoSectionProps) => {
	const [favorite, setFavorite] = useState(false);

	return (
		<div className={styles.section}>
			<IconButton icon="add" className={styles.button} />
			<Info creator={creator} title={title} centered />
			<IconButton
				icon="heart"
				className={styles.button}
				active={favorite}
				onClick={() => setFavorite(!favorite)}
			/>
		</div>
	);
};
