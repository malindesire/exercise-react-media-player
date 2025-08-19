import { IconButton } from '../IconButton';
import { Info } from '../Info';
import styles from './style.module.css';

type InfoSectionProps = {
	creator: string;
	title: string;
	favorite?: boolean;
};

export const InfoSection = ({
	creator,
	title,
	favorite = false,
}: InfoSectionProps) => {
	return (
		<div className={styles.section}>
			<IconButton icon="add" className={styles.button} />
			<Info creator={creator} title={title} centered />
			<IconButton
				icon="heart"
				className={styles.button}
				active={favorite}
			/>
		</div>
	);
};
