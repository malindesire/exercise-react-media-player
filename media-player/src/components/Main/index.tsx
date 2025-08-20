import { useEffect, useState } from 'react';
import type { Media } from '../../utilities/types';
import { List } from '../List';
import { Player } from '../Player';
import styles from './style.module.css';

type MainProps = {
	media: Media[];
};

export const Main = ({ media }: MainProps) => {
	const [currentMediaId, setCurrentMediaId] = useState(media[0].id);
	const [playing, setPlaying] = useState(true);
	const [progress, setProgress] = useState(0);
	const currentIndex = media.findIndex((m) => m.id === currentMediaId);
	const currentMediaLength = media[currentIndex].length;

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			if (playing && progress < currentMediaLength) {
				setProgress(progress + 1);
			}
		}, 1000);

		if (progress >= currentMediaLength) {
			setProgress(0);
			setPlaying(false);
		}

		return () => clearTimeout(timeOutId);
	}, [progress, playing, currentMediaLength, currentMediaId]);

	const handlePrev = () => {
		if (currentIndex >= 0) {
			const prevIndex = (currentIndex - 1 + media.length) % media.length;
			setCurrentMediaId(media[prevIndex].id);
			setProgress(0);
			setPlaying(true);
		}
	};

	const handleNext = () => {
		if (currentIndex >= 0) {
			const nextIndex = (currentIndex + 1) % media.length;
			setCurrentMediaId(media[nextIndex].id);
			setProgress(0);
			setPlaying(true);
		}
	};

	const handelSelect = (id: string) => {
		setCurrentMediaId(id);
		setProgress(0);
		setPlaying(true);
	};

	return (
		<main className={styles.main}>
			<List
				mediaList={media}
				currentMedia={currentMediaId}
				onSelect={handelSelect}
			/>
			<Player
				media={currentIndex ? media[currentIndex] : media[0]}
				playing={playing}
				progress={progress}
				onPlay={() => setPlaying(!playing)}
				onPrev={handlePrev}
				onNext={handleNext}
			/>
		</main>
	);
};
