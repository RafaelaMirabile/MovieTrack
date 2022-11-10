export type Movie = {
	id?: number,
	title: string,
	banner: string,
	genre: string,
	rate?: number,
	review?: string,
	create_at?: Date
};

export type Review = {
	review: string
};

export type Rate = {
	rate: number
}



/*CREATE TABLE movies (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL UNIQUE,
	banner TEXT NOT NULL UNIQUE,
	genre TEXT NOT NULL,
	rate NUMERIC DEFAULT 0,
	review TEXT DEFAULT 'There is no review yet',
	"createAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);*/




