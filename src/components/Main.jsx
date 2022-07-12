import axios from "axios";
import React, { useEffect, useState } from "react";
import movieRequest from "../../requests.js";

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
		<header className="w-full h-[550px] xl:h-[650px] text-white overflow-hidden">
			<div className="w-full h-full opacity-80 transition ease hover:scale-105 duration-300">
				<div className="absolute w-full h-[550px] xl:h-[650px] bg-gradient-to-r from-black"></div>
				<img
					src={`https://image.tmdb.org/t/p/original/${movies[randomMovie]?.poster_path}`}
					alt={movies[randomMovie]?.title}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="absolute w-full top-[15%] p-4 md:p-8">
				<h1 className="text-3xl md:text-5xl mb-5">{movies[randomMovie]?.title}</h1>
				<div className="flex gap-2 mb-5">
					<button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded hover:bg-gray-100 transition duration-300 ease-in-out hover:-translate-y-1">
						Play
					</button>
					<button className="border text-white border-gray-300 py-2 px-5 rounded transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-neutral-900">
						Watch Later
					</button>
				</div>
				<p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35] mb-5">
					{shortOverview(movies[randomMovie]?.overview)}
				</p>
				<p className="text-gray-400 text-sm">
					Released: {movies[randomMovie]?.release_date}
				</p>
			</div>
		</header>
	);
}
