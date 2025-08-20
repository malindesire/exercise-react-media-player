import type { Media } from '../../utilities/types';
import { ListItem } from '../ListItem';
import styles from './style.module.css';

type ListProps = {
	mediaList: Media[];
	currentMedia: string;
	onSelect: (id: string) => void;
};

export const List = ({ mediaList, currentMedia, onSelect }: ListProps) => {
	return (
		<ul className={styles.list}>
			{mediaList.map((media) => (
				<ListItem
					key={media.id}
					image={media.imageSrc}
					creator={media.creator}
					title={media.title}
					active={media.id === currentMedia}
					onClick={() => onSelect(media.id)}
				/>
			))}
		</ul>
	);
};
