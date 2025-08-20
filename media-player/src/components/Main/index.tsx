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
	const currentIndex = media.findIndex((m) => m.id === currentMediaId);

	const handlePrev = () => {
		if (currentIndex >= 0) {
			const prevIndex = (currentIndex - 1 + media.length) % media.length;
			setCurrentMediaId(media[prevIndex].id);
		}
	};

	const handleNext = () => {
		if (currentIndex >= 0) {
			const nextIndex = (currentIndex + 1) % media.length;
			setCurrentMediaId(media[nextIndex].id);
		}
	};

	return (
		<main className={styles.main}>
			<List
				mediaList={media}
				currentMedia={currentMediaId}
				onSelect={setCurrentMediaId}
			/>
			<Player
				media={currentIndex ? media[currentIndex] : media[0]}
				onPrev={handlePrev}
				onNext={handleNext}
			/>
		</main>
	);
};
