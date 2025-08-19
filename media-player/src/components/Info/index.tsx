import clsx from 'clsx';
import styles from './style.module.css';

type InfoProps = {
	creator: string;
	title: string;
	centered?: boolean;
};

export const Info = ({ creator, title, centered }: InfoProps) => {
	return (
		<div className={clsx(centered && styles.centered)}>
			<p>{creator}</p>
			<p className={styles.title}>{title}</p>
		</div>
	);
};
