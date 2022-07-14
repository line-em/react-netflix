import { HeartStraight } from "phosphor-react";
import React, { useState } from "react";
import { userAuth } from "../context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function Movie({ movie, id }) {
	const [isLiked, setIsLiked] = useState(false);
	const [saved, setSaved] = useState([]);
	const { user } = userAuth();

	const movieID = doc(db, `users`, `${user?.email}`);

	const handleLike = async () => {
		if (user) {
			setIsLiked(!isLiked);
			setSaved(true);

			await updateDoc(movieID, {
				savedMovies: arrayUnion({
					id: movie.id,
					title: movie.title,
					img: movie.backdrop_path
				})
			});
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
