import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { X } from "phosphor-react";

export default function SavedShows() {
	const { user } = userAuth();
	const [favoriteMovies, setFavoriteMovies] = useState([]);
	let movieRef = doc(db, `users`, `${user?.uid}`);

	useEffect(() => {
		if (!user) {
			setTimeout(() => {
				navigate("/login", { replace: true });
			}, 100);
		}
	}, [user]);

	useEffect(() => {
		movieRef = doc(db, `users`, `${user?.user?.uid}`);
	}, [user]);

	useEffect(() => {
		console.log("rerender");
		onSnapshot(movieRef, (doc) => {
			setFavoriteMovies(doc?.data()?.savedMovies);
		});
	}, []);

	const removeMovie = async (movieID) => {
		try {
			// const result = favoriteMovies.filter((movie) => movie.id !== movieID);
			movieRef = doc(db, `users`, `${user?.user?.uid}`);

			console.log(movieRef);
			await updateDoc(movieRef, {
				savedMovies: favoriteMovies.filter((movie) => movie.id !== movieID)
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{favoriteMovies &&
				favoriteMovies?.map((movie) => (
					<div className="inline-block cursor-pointer relative transition ease duration-300">
						<img
							className="rounded"
							key={movie.id}
							alt={movie?.title}
							src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
						/>
						<div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white transition ease duration-300 ">
							<p className="md:text-lg whitespace-normal font-bold flex justify-center items-center h-full text-center tracking-wide mx-3">
								{movie?.title}
							</p>
							<X
								size={25}
								className="top-2 left-2 absolute transition ease-in-out duration-150 active:scale-110 drop-shadow-lg"
								color="white"
								onClick={() => removeMovie(movie.id)}
							/>
						</div>
					</div>
				))}
		</>
	);
}
