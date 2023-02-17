import Link from "next/link";
import "./Navbar.css";

export const Navbar = () => {
	return (
		<div className="flex text-center flex-row navbar">
			<div>
				<Link href={`/`}>Most Popular</Link>
			</div>
			<div>
				<Link href={`/`}>Top Rated</Link>
			</div>
			<div>
				<Link href={`/`}>Upcoming</Link>
			</div>
		</div>
	);
};
