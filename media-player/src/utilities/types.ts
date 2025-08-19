export type Icon =
	| 'play'
	| 'add'
	| 'heart'
	| 'shuffle'
	| 'repeat'
	| 'previous'
	| 'next'
	| 'back'
	| 'options';

export type Media = {
	imageSrc: string;
	imageAlt: string;
	creator: string;
	title: string;
	length: number;
};
