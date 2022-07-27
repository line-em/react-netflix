import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";

export default function SavedShows() {
	// Get user's saved movies
	const { user } = userAuth();
	const movieRef = doc(db, `users`, `${user?.email}`);
	const [favoriteMovies, setFavoriteMovies] = useState([]);

	// Firebase call for liked movies & to check if the movie is in row. Save to state.
	useEffect(() => {
		// getDoc(movieRef).then((doc) => {
		// 	setFavoriteMovies(doc?.data()?.savedMovies);
		// });
		// console.log(favoriteMovies);
		onSnapshot(movieRef, (doc) => {
			setFavoriteMovies(doc?.data()?.savedMovies);
		});
		console.log(favoriteMovies);
	}, [user?.email]);

	return (
		<>
			{/* className="w-[300px] md:w-[340px] lg:w-[360px] inline-block" */}
			{favoriteMovies &&
				favoriteMovies?.map((movie) => (
					<div className="">
						<img
							className="w-full h-auto rounded cursor-pointer"
							key={movie.id}
							alt={movie?.title}
							src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
						/>
						<p className="text-white">{movie.title}</p>
					</div>
				))}
		</>
	);
}
