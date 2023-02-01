// @ts-nocheck
import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Row from "../components/Row";
import movieRequest, { otherGenres } from "../requests";

export default function Home() {
	const [moreGenres, setMoreGenres] = useState([]);
	const lineBreak = <hr className="my-3 lg:my-6 border-none" />;

	const getMoreMovies = () => {
		const availableGenres = otherGenres.filter((genre) => {
			return !moreGenres.some((gen) => {
				return gen.props.title === genre.title;
			});
			// return moreGenres.filter((gen) => {
			// 	return gen.props.title !== genre.title;
			// });
		});
		console.log(availableGenres);
		let getRandomGenre = Math.floor(Math.random() * availableGenres.length);
		let randomGenre = availableGenres[getRandomGenre];

		setMoreGenres((prev) => [
			...prev,
			<Row title={randomGenre?.title} apiUrl={randomGenre?.apiUrl} />
		]);
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
				{moreGenres?.map((movie, index) => (
					<div key={index}>
						{movie}
						{lineBreak}
					</div>
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
