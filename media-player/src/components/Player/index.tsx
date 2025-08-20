import { useEffect, useState } from 'react';
import type { Media } from '../../utilities/types';
import { ButtonSection } from '../ButtonSection';
import { Image } from '../Image';
import { InfoSection } from '../InfoSection';
import { Progress } from '../Progress';
import styles from './style.module.css';

type PlayerProps = {
	media: Media;
};

export const Player = ({ media }: PlayerProps) => {
	const { imageSrc, imageAlt, creator, title, length } = media;
	const [playing, setPlaying] = useState(true);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (playing && progress < length) {
			setTimeout(() => {
				setProgress(progress + 1);
			}, 1000);
		}

		if (progress >= length) {
			setProgress(0);
			setPlaying(false);
		}
	}, [progress, playing, length]);

	return (
		<section className={styles.section}>
			<Image src={imageSrc} alt={imageAlt} />
			<InfoSection creator={creator} title={title} />
			<Progress progress={progress} totalLength={length} />
			<ButtonSection
				playing={playing}
				onPlay={() => setPlaying(!playing)}
			/>
		</section>
	);
};
