import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, id, poster_path, release_date }) {
	const image_path = "https://image.tmdb.org/t/p/original";
	return (
		<div className="movie">
			<h1>{title}</h1>
			<h2>{release_date}</h2>
			<Link href={`/${id}`}>
				<Image
					src={image_path + poster_path}
					alt="asd"
					width={400}
					height={700}
				/>
			</Link>
		</div>
	);
}
