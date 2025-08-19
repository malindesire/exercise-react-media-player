import styles from './style.module.css';

type ImageProps = {
	src: string;
	alt: string;
};

export const Image = ({ src, alt }: ImageProps) => {
	return <img className={styles.image} src={src} alt={alt} />;
};
