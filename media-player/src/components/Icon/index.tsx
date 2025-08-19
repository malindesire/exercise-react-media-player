import type { Icon as IconType } from '../../utilities/types';
import styles from './style.module.css';
import { Play } from './Play';
import { Add } from './Add';
import { Heart } from './Heart';
import { Shuffle } from './Shuffle';
import { Repeat } from './Repeat';
import { Previous } from './Previous';
import { Next } from './Next';
import { Back } from './Back';
import { Options } from './Options';

type IconProps = {
	type: IconType;
};

export const Icon = ({ type }: IconProps) => {
	const icon = (iconType: IconType) => {
		switch (iconType) {
			case 'play':
				return <Play />;
			case 'add':
				return <Add />;
			case 'heart':
				return <Heart />;
			case 'shuffle':
				return <Shuffle />;
			case 'repeat':
				return <Repeat />;
			case 'previous':
				return <Previous />;
			case 'next':
				return <Next />;
			case 'back':
				return <Back />;
			case 'options':
				return <Options />;
		}
	};

	return <div className={styles.icon}>{icon(type)}</div>;
};
