import "./styling/globals.css";
import { Montserrat } from "@next/font/google";
import { Navbar } from "./comp/Navbar/Navbar";

const montserrat = Montserrat({
	weight: ["500", "900"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body className={`${montserrat.className} ms-32 my-8`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
