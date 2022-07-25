import SavedShows from "../components/SavedShows";
import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Account() {
	const { user } = userAuth();
	const movieRef = doc(db, `users`, `${user?.email}`);
	const [favoriteMovies, setFavoriteMovies] = useState([]);

	// Firebase call for liked movies & to check if the movie is in row. Save to state.
	useEffect(() => {
		if (user) {
			getDoc(movieRef).then((doc) => {
				setFavoriteMovies(doc?.data()?.savedMovies);
			});
		}
	}, []);

	return (
		<>
			<SavedShows />
			<h1 className="text-white">Saved Shows</h1>
			{favoriteMovies && (
				<div className="flex flex-wrap p-10 bg-blue-900">
					{favoriteMovies.map((movie) => (
						<article className="text-white p-10 text-xl" key={movie.id}>
							{movie.title}
						</article>
					))}
				</div>
			)}
		</>
	);
}
