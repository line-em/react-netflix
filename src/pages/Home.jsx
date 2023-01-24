// @ts-nocheck
import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Row from "../components/Row";
import movieRequest from "../requests";

export default function Home() {
	// const lineBreak = (
	// 	<hr className="border-2 border-neutral-600/20 my-3 lg:my-10 w-1/2 mx-auto" />
	// );
	const lineBreak = <hr className="my-3 lg:my-6 border-none" />;
	return (
		<>
			<Main />
			<main className="mx-6 lg:mx-12 mt-6">
				<Row title="Trending" apiUrl={movieRequest.requestTrending} />
				{lineBreak}
				<Row title="Top Rated" apiUrl={movieRequest.requestTopRated} />
				{lineBreak}
				<Row title="Latest" apiUrl={movieRequest.requestLatest} />
				{lineBreak}
				<Row title="Sci-Fi" apiUrl={movieRequest.requestSciFi} />
				{lineBreak}
				<Row title="Animation" apiUrl={movieRequest.requestAnimation} />
				{lineBreak}
				<Row title="Drama" apiUrl={movieRequest.requestDrama} />
				{lineBreak}
				<Row title="Documentary" apiUrl={movieRequest.requestDocumentary} />
				{lineBreak}
			</main>
			<div className="flex justify-center">
				<button
					className="border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded hover:active:bg-gray-100 transition hover:active:-translate-y-1 active:-translate-y-0 bg-gray-500 border-gray-500"
					disabled
				>
					See more...
					{/* bg-gray-500 is temp as it's disabled */}
				</button>
			</div>
			<Footer />
		</>
	);
}
