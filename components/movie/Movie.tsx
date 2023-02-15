import Link from "next/link";
import Image from "next/image";

export default function Movie({ ...params }) {
	const image_path = "https://image.tmdb.org/t/p/original";

	const { title, id, poster_path, release_date } = params;

	return (
		<div className="movie text-center">
			<h1 className="text-sm">{title}</h1>

			<Link href={`/${id}`}>
				<Image
					className="hover:scale-125 transition duration-150 ease-in-out"
					src={image_path + poster_path}
					alt="asd"
					width={400}
					height={700}
				/>
				<h2 className="text-xs">{release_date}</h2>
			</Link>
		</div>
	);
}
