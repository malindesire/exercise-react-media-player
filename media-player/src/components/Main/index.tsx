import type { Media } from '../../utilities/types';
import { List } from '../List';
import { Player } from '../Player';
import styles from './style.module.css';

type MainProps = {
	media: Media[];
};

export const Main = ({ media }: MainProps) => {
	return (
		<main className={styles.main}>
			<List mediaList={media} />
			<Player media={media[0]} progress={62} />
		</main>
	);
};
