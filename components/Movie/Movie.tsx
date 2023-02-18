import Link from "next/link";
import Image from "next/image";
import "./Movie.css";

export default function Movie({ ...params }) {
	const image_path = "https://image.tmdb.org/t/p/original";

	const { title, id, poster_path, release_date } = params;

	return (
		<div className="movie text-center">
			<Link href={`/${id}`}>
				<Image
					className="hover:scale-110 smooth"
					src={image_path + poster_path}
					alt="asd"
					width={400}
					height={700}
				/>
			</Link>
		</div>
	);
}
