import axios from "axios";
import React, { useEffect, useState } from "react";
import movieRequest from "../requests.js";

export default function Main() {
	const [movies, setMovies] = useState([]);
	const randomMovie = ~~(Math.random() * movies.length);

	useEffect(() => {
		axios
			.get(movieRequest.requestTrending)
			.then((response) => {
				setMovies(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const shortOverview = (overview) => {
		if (overview?.length > 250) {
			return overview.substring(0, 250) + "...";
		} else {
			return overview;
		}
	};

	return (
		<header className="w-full h-[600px] xl:h-[700px] text-white overflow-hidden">
			<div className="w-full h-full opacity-80 transition ease hover:scale-105 duration-300">
				<div className="absolute w-full h-[600px] xl:h-[700px] bg-gradient-to-r from-black"></div>
				<img
					src={`https://image.tmdb.org/t/p/original/${movies[randomMovie]?.backdrop_path}`}
					alt={movies[randomMovie]?.title}
					className="w-full h-full object-cover bg-center aspect-video"
				/>
			</div>
			<div className="absolute w-full top-1/2 -translate-y-1/2 p-6 lg:px-14 md:p-8">
				<h1 className="text-3xl md:text-5xl mb-5 font-bold">
					{movies[randomMovie]?.title}
				</h1>
				<hr className="border-2 border-red-600 w-1/5" />
				<div className="flex gap-2 my-6">
					<button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded hover:bg-gray-100 transition hover:-translate-y-1 active:-translate-y-0">
						Play
					</button>
					<button className="border text-white border-gray-300 py-2 px-5 rounded transition hover:-translate-y-1 active:-translate-y-0 hover:bg-neutral-900">
						Watch Later
					</button>
				</div>
				<p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35] mb-5 hidden sm:block">
					{shortOverview(movies[randomMovie]?.overview)}
				</p>
				<p className="text-gray-400 text-sm">
					Released: {movies[randomMovie]?.release_date}
				</p>
			</div>
		</header>
	);
}
