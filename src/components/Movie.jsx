import { HeartStraight } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { userAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import { arrayRemove, arrayUnion, doc, updateDoc, getDoc } from "firebase/firestore";

export default function Movie({ movie, liked: cloudLike }) {
	const [isLiked, setIsLiked] = useState(false);
	const { user } = userAuth();

	const movieRef = doc(db, `users`, `${user?.email}`);
	// Firebase call for liked movies & to check if the movie is in row. Save to state.
	// useEffect(
	// 	() => {
	// 		const getDoc = async () => {
	// 			const doc = await Promise.all([getDoc(movieRef)]);
	// 			const cloudMovies = doc[0]?.data()?.savedMovies;
	// 			console.log(cloudMovies);
	// 		};
	// getDoc(movieRef).then((doc) => {
	// 	let cloudMovies = doc?.data()?.savedMovies;

	// 	const filterMovies = cloudMovies?.filter((cloudMovie) => cloudMovie.id === movie.id);

	// 	if (filterMovies && filterMovies?.length > 0) {
	// 		setIsLiked(true);
	// },
	// const filterMovies = row?.filter((movie) =>
	// 	cloudMovies?.find((savedMovie) => {
	// 		return savedMovie.id === movie.id;
	// 	})
	// );
	// if (filterMovies && filterMovies?.length > 0) {
	// 	setIsLikedCloud(filterMovies.map((movie) => movie.id));
	// }
	// });
	// 	[movie]
	// );

	useEffect(() => {
		setIsLiked(cloudLike);
	}, []);

	const handleLike = async () => {
		if (user) {
			if (!isLiked) {
				await updateDoc(movieRef, {
					savedMovies: arrayUnion({
						id: movie.id,
						title: movie.title,
						img: movie.backdrop_path
					})
				});
			} else {
				await updateDoc(movieRef, {
					savedMovies: arrayRemove({
						id: movie.id,
						title: movie.title,
						img: movie.backdrop_path
					})
				});
			}

			setIsLiked(!isLiked);
		} else {
			alert("Please log in to save your favorites");
		}
	};

	return (
		<div className="w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative transition ease duration-300 mx-1 ">
			<img
				src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
				alt={movie?.title}
				className="w-full h-auto block rounded"
			/>
			<div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white transition ease duration-300 ">
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
		</div>
	);
}
