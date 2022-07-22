import React, { useEffect } from "react";
import { userAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function SavedShows() {
	// Get user's saved movies
	const { user } = userAuth();
	const movieRef = doc(db, `users`, `${user?.user?.email}`);

	// Firebase call for liked movies & to check if the movie is in row. Save to state.
	getDoc(movieRef).then((doc) => {
		const cloudMovies = doc?.data()?.savedMovies;

		const movies = cloudMovies?.map((movie) => {
			<article className="flex flex-col items-center justify-center w-full h-full p-4">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_img}`}
					alt={movie?.title}
					className="w-full h-auto block rounded"
				/>
				<p className="text-base md:text-lg whitespace-normal font-bold flex justify-center items-center h-full text-center tracking-wide mx-3">
					{movie?.title}
				</p>
			</article>;
		});
	});
	return (
		<div>
			<h1>Saved Shows</h1>
			{/* <div className="flex flex-wrap">{movies}</div> */}
		</div>
	);
}
