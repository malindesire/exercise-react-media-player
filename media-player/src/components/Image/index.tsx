import clsx from 'clsx';
import styles from './style.module.css';

type ImageProps = {
	src: string;
	alt: string;
	className?: string;
};

export const Image = ({ src, alt, className }: ImageProps) => {
	return (
		<div className={clsx(styles.image, className)}>
			<img src={src} alt={alt} />
		</div>
	);
};
