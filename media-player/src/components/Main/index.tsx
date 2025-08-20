import { useState } from 'react';
import type { Media } from '../../utilities/types';
import { List } from '../List';
import { Player } from '../Player';
import styles from './style.module.css';

type MainProps = {
	media: Media[];
};

export const Main = ({ media }: MainProps) => {
	const [currentMediaId, setCurrentMediaId] = useState(media[0].id);
	const currentMedia = media.find((m) => m.id === currentMediaId);

	return (
		<main className={styles.main}>
			<List
				mediaList={media}
				currentMedia={currentMediaId}
				onSelect={setCurrentMediaId}
			/>
			<Player media={currentMedia ? currentMedia : media[0]} />
		</main>
	);
};
