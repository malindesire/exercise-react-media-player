import type { Media } from '../../utilities/types';
import { ButtonSection } from '../ButtonSection';
import { Image } from '../Image';
import { InfoSection } from '../InfoSection';
import { Progress } from '../Progress';
import styles from './style.module.css';

type PlayerProps = {
	media: Media;
	playing: boolean;
	progress: number;
	onPlay: () => void;
	onPrev: () => void;
	onNext: () => void;
};

export const Player = ({
	media,
	playing,
	progress,
	onPlay,
	onPrev,
	onNext,
}: PlayerProps) => {
	const { imageSrc, imageAlt, creator, title, length } = media;

	return (
		<section className={styles.section}>
			<Image src={imageSrc} alt={imageAlt} />
			<InfoSection creator={creator} title={title} />
			<Progress progress={progress} totalLength={length} />
			<ButtonSection
				playing={playing}
				onPlay={onPlay}
				onPrev={onPrev}
				onNext={onNext}
			/>
		</section>
	);
};
