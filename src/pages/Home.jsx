// @ts-nocheck
import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Row from "../components/Row";
import movieRequest from "../requests";

export default function Home() {
	const [moreGenres, setMoreGenres] = useState([]);
	const lineBreak = <hr className="my-3 lg:my-6 border-none" />;
	const otherGenres = [
		<Row title="Sci-Fi" apiUrl={movieRequest.requestSciFi} />,
		<Row title="Animation" apiUrl={movieRequest.requestAnimation} />,
		<Row title="Drama" apiUrl={movieRequest.requestDrama} />,
		<Row title="Documentary" apiUrl={movieRequest.requestDocumentary} />,
		<Row title="Action" apiUrl={movieRequest.requestAction} />,
		<Row title="Crime" apiUrl={movieRequest.requestCrime} />,
		<Row title="Comedy" apiUrl={movieRequest.requestComedy} />,
		<Row title="Romance" apiUrl={movieRequest.requestRomance} />,
		<Row title="Fantasy" apiUrl={movieRequest.requestFantasy} />,
		<Row title="Music" apiUrl={movieRequest.requestMusic} />
	];

	const getMoreMovies = () => {
		const availableGenres = otherGenres.filter(
			(genre) => !moreGenres.includes(genre)
		);
		let getRandomGenre = Math.floor(Math.random() * availableGenres.length);
		let randomGenre = availableGenres[getRandomGenre];
		console.log(availableGenres);

		setMoreGenres((prev) => [...prev, randomGenre]);
	};

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
				{/*<Row title="Sci-Fi" apiUrl={movieRequest.requestSciFi} />
				{lineBreak}
				<Row title="Animation" apiUrl={movieRequest.requestAnimation} />
				{lineBreak}
				<Row title="Drama" apiUrl={movieRequest.requestDrama} />
				{lineBreak}
				<Row title="Documentary" apiUrl={movieRequest.requestDocumentary} />
				{lineBreak} */}
				{moreGenres &&
					moreGenres.map((movie) => (
						<>
							{movie}
							{lineBreak}
						</>
					))}
			</main>
			<div className="flex justify-center">
				{otherGenres.length !== moreGenres.length && (
					<button
						onClick={() => getMoreMovies()}
						className="border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded hover:active:bg-gray-100 transition hover:active:-translate-y-1 active:-translate-y-0 bg-gray-500 border-gray-500"
					>
						See more...
					</button>
				)}
			</div>
			<Footer />
		</>
	);
}
