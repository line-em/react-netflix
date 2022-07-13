import { HeartStraight } from "phosphor-react";
import React from "react";

export default function Movie({ movie, id }) {
	const [isLiked, setIsLiked] = React.useState(false);

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
					onClick={() => setIsLiked(!isLiked)}
				/>
			</div>
		</div>
	);
}