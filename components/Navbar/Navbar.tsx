"use client";

import Link from "next/link";
import "./Navbar.css";
import { useState } from "react";

export const Navbar = () => {
	const [selected, setSelected] = useState();

	const click = (option) => {
		setSelected(option);
	};

	return (
		<div className="flex text-center flex-row navbar font-mono">
			<div className="navLink">
				<Link
					onClick={() => click("popular")}
					className={`option ${selected === "popular" ? "clicked" : ""} p-1`}
					href={`/most_popular`}
				>
					Most Popular
				</Link>
			</div>
			<div className="navLink">
				<Link
					onClick={() => click("rated")}
					className={`option ${selected === "rated" ? "clicked" : ""} p-1`}
					href={`/top_rated`}
				>
					Top Rated
				</Link>
			</div>
			<div className="navLink">
				<Link
					onClick={() => click("upcoming")}
					className={`option ${selected === "upcoming" ? "clicked" : ""} p-1`}
					href={`/upcoming`}
				>
					Upcoming
				</Link>
			</div>
		</div>
	);
};
