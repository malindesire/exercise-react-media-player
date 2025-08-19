import styles from './style.module.css';

type ProgressProps = {
	progress: number;
	totalLength: number;
};

export const Progress = ({ progress, totalLength }: ProgressProps) => {
	const formatTime = (totalSeconds: number): string => {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;

		return `${String(minutes).padStart(2, '0')} : ${String(
			seconds
		).padStart(2, '0')}`;
	};

	const progressPercentage = String((progress / totalLength) * 100);

	return (
		<div className={styles.section}>
			<p className={styles.time}>{formatTime(progress)}</p>
			<span className={styles.bar}>
				<span
					className={styles.progress}
					style={{ width: `${progressPercentage}%` }}
				></span>
			</span>
			<p className={styles.time}>{formatTime(totalLength)}</p>
		</div>
	);
};
