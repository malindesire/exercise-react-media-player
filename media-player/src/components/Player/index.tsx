import { useState } from 'react';
import type { Media } from '../../utilities/types';
import { ButtonSection } from '../ButtonSection';
import { Image } from '../Image';
import { InfoSection } from '../InfoSection';
import { Progress } from '../Progress';
import styles from './style.module.css';

type PlayerProps = {
	media: Media;
	progress: number;
};

export const Player = ({ media, progress }: PlayerProps) => {
	const { imageSrc, imageAlt, creator, title, length } = media;
	const [playing, setPlaying] = useState(true);

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
