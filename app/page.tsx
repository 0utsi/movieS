import Movie from "../components/movie/Movie";
interface ImovieData {
	adult: boolean;
	backdrop_path: string;
	genre_ids: string[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: Date;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export default async function Home() {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
	);

	const res = await data.json();
	const movies = res.results;

	return (
		<main>
			<div className="grid gap-8 grid-cols-fluid">
				{movies.map((movie: ImovieData) => (
					<Movie
						key={movie.id}
						id={movie.id}
						title={movie.title}
						poster_path={movie.poster_path}
						release_date={movie.release_date}
					/>
				))}
			</div>
		</main>
	);
}
