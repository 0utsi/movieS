import Link from "next/link";
import "./Navbar.css";

export const Navbar = () => {
	return (
		<div className="flex text-center flex-row navbar font-mono">
			<div className="navLink">
				<Link className="p-2" href={`/most_popular`}>
					Most Popular
				</Link>
			</div>
			<div className="navLink">
				<Link className="p-2" href={`/top_rated`}>
					Top Rated
				</Link>
			</div>
			<div className="navLink">
				<Link className="p-2" href={`/upcoming`}>
					Upcoming
				</Link>
			</div>
		</div>
	);
};
