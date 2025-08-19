import type { Media } from '../../utilities/types';
import { ListItem } from '../ListItem';
import styles from './style.module.css';

type ListProps = {
	mediaList: Media[];
};

export const List = ({ mediaList }: ListProps) => {
	return (
		<ul className={styles.list}>
			{mediaList.map((media) => (
				<ListItem
					image={media.imageSrc}
					creator={media.creator}
					title={media.title}
				/>
			))}
		</ul>
	);
};
