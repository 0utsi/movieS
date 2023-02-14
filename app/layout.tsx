import "./globals.css";
import { Montserrat } from "@next/font/google";
import Home from "./page";

const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body className={`${montserrat.className}`}>{children}</body>
		</html>
	);
}
