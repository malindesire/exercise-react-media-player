import clsx from 'clsx';
import { IconButton } from '../IconButton';
import { Image } from '../Image';
import { Info } from '../Info';
import styles from './style.module.css';

type ListItemProps = {
	image: string;
	creator: string;
	title: string;
	active?: boolean;
};

export const ListItem = ({
	image,
	creator,
	title,
	active = false,
}: ListItemProps) => {
	return (
		<li className={styles.listItem}>
			<button className={clsx(styles.button, active && styles.active)}>
				<div className={styles.infoContainer}>
					<Image src={image} alt="" className={styles.image} />
					<Info creator={creator} title={title} />
				</div>
				<IconButton
					icon="play"
					inverted
					className={styles.playButton}
					button={false}
				/>
			</button>
		</li>
	);
};
