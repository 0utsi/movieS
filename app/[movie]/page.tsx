import Image from "next/image";
import "./page.css";
import "../styling/globals.css";
export default async function MovieDetail({ params }) {
	const image_path = "https://image.tmdb.org/t/p/original";
	const { movie } = params;
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
	);

	const response = await data.json();
	return (
		<div className="movieDetails">
			<div className="grid justify-items-center text-center">
				<h2 className="text-3xl font-mono">{response.title}</h2>
				<h3 className="text-xs font-sans my-1">{response.release_date}</h3>
				<Image
					className="my-8"
					src={image_path + response.poster_path}
					alt="asd"
					width={400}
					height={700}
				/>
				<div className="w-96 text-xs">{response.overview}</div>
			</div>
		</div>
	);
}
