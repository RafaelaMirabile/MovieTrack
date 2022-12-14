export type MovieEntity = {
	id: number,
	title: string,
	banner: string,
	genre: string,
	rate: number,
	review: string,
	create_at: Date
};

export type Movie = Omit<MovieEntity,"id"|"create_at"|"rate">

