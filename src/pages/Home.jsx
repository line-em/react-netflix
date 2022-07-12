// @ts-nocheck
import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Row from "../components/Row";
import movieRequest from "../requests";

export default function Home() {
	const lineBreak = <hr className="border-2 border-neutral-600/20 my-3 lg:my-10 w-1/2 mx-auto" />;
	return (
		<>
			<Main />
			<main className="mx-2 lg:mx-10">
				<Row title="Trending" apiUrl={movieRequest.requestTrending} />
				{lineBreak}
				<Row title="Top Rated" apiUrl={movieRequest.requestTopRated} />
				{lineBreak}
				<Row title="Animation" apiUrl={movieRequest.requestAnimation} />
				{lineBreak}
				<Row title="Sci-Fi" apiUrl={movieRequest.requestSciFi} />
				{lineBreak}
				<Row title="Latest" apiUrl={movieRequest.requestLatest} />
			</main>
			{lineBreak}
			<Footer />
			{lineBreak}
		</>
	);
}
