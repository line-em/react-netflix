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

	// const mappedMovies = movies.map((movie) => (
	// 	<div className="card" key={movie.id}>
	// 		<img
	// 			src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
	// 			alt={movie.title}
	// 			className="w-300 h-150"
	// 		/>
	// 		<div className="card-body">
	// 			<h5 className="card-title">{movie.title}</h5>
	// 			<p className="card-text">{movie.overview}</p>
	// 		</div>
	// 	</div>
	// ));

	return (
		<header className="w-full h-[550px] xl:h-[650px] text-white overflow-hidden">
			<div className="w-full h-full opacity-80 transition ease-in-out hover:scale-105 duration-300">
				<div className="absolute w-1/2 h-[550px] xl:h-[650px] bg-gradient-to-r from-black"></div>
				<img
					src={`https://image.tmdb.org/t/p/original/${movies[randomMovie]?.poster_path}`}
					alt={movies[randomMovie]?.title}
					className="w-full h-full object-cover"
				/>
			</div>
		</header>
	);
}
