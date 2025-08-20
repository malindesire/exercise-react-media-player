export type Icon =
	| 'play'
	| 'add'
	| 'heart'
	| 'shuffle'
	| 'repeat'
	| 'previous'
	| 'next'
	| 'back'
	| 'options'
	| 'pause';

export type Media = {
	id: string;
	imageSrc: string;
	imageAlt: string;
	creator: string;
	title: string;
	length: number;
};
