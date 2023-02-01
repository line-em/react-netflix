import { HeartStraight } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import { arrayRemove, arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore";

export default function Movie({ movie }) {
	const [isLiked, setIsLiked] = useState(false);
	const { user } = userAuth();
	let movieRef = doc(db, `users`, `${user?.uid}`);

	useEffect(() => {
		movieRef = doc(db, `users`, `${user?.user?.uid}`);
	}, [user, movieRef]);

	useEffect(() => {
		const fetchSavedMovies = async () => {
			try {
				const doc = await getDoc(movieRef);
				const cloudMovies = doc?.data()?.savedMovies;
				const filterMovie = cloudMovies?.filter(
					(cloudMovie) => cloudMovie.id === movie.id
				);
				setIsLiked(filterMovie && filterMovie.length > 0);
			} catch (error) {
				console.error(error);
			}
		};

		if (user) {
			fetchSavedMovies();
		}
	}, [user]);

	const handleLike = async () => {
		// console.log(movieRef._key.path.segments);
		if (user) {
			let updatedData = {};
			if (!isLiked) {
				updatedData = {
					savedMovies: arrayUnion({
						id: movie.id,
						desc: movie.overview,
						rating: movie.vote_average,
						title: movie.title,
						img: movie.backdrop_path
					})
				};
			} else {
				updatedData = {
					savedMovies: arrayRemove({
						id: movie.id,
						desc: movie.overview,
						rating: movie.vote_average,
						title: movie.title,
						img: movie.backdrop_path
					})
				};
			}

			await updateDoc(movieRef, updatedData).then(() => {
				setIsLiked(!isLiked);
			});
		} else {
			alert("Please log in to save your favorites");
		}
	};

	return (
		<>
			{movie?.backdrop_path && (
				<article className="w-[200px] md:w-[240px] lg:w-[280px] inline-flex cursor-pointer mx-1 hover:mx-5 hover:scale-[1.1] relative transition-all ease duration-300 align-middle">
					<img
						src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
						alt={movie?.title}
						className="w-full h-auto block rounded"
					/>
					<div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white transition ease duration-300">
						<p className="text-base md:text-lg whitespace-normal font-bold flex justify-center items-center h-full text-center tracking-wide mx-3">
							{movie?.title}
						</p>
						<HeartStraight
							size={25}
							weight={isLiked ? "fill" : "regular"}
							color={isLiked ? "#EF4444" : "white"}
							className="top-2 left-2 absolute transition ease-in-out duration-150 active:scale-110 drop-shadow-lg"
							onClick={() => handleLike()}
						/>
					</div>
				</article>
			)}
		</>
	);
}
