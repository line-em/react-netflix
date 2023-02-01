import React, { useState } from "react";

const Modal = ({ movie, setShowModal }) => {
	console.log(movie);
	return (
		<div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center">
			<section className="fixed max-w-xl m-auto p-5 rounded-lg drop-shadow-lg bg-neutral-900">
				<article className="grid grid-cols-1 sm:grid-cols-2 text-white gap-4 max-h-[25rem] overflow-hidden">
					<img
						src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
						alt={movie?.title}
						className="rounded-lg hidden sm:flex"
					/>
					<article className="col-span-1 whitespace-normal w-full flex flex-col justify-between">
						<h1 className="text-lg md:text-2xl sm:text-xl font-bold">
							{movie?.title}
						</h1>
						<hr className="border-2 border-red-600 w-1/5 mb-4" />
						<div className="overflow-y-scroll max-h-48 scrollbar-hide">
							<p className="mb-5 text-justify">{movie?.overview}</p>
						</div>
						<div className="flex justify-between items-center">
							<p className="text-sm">
								<strong>Rating:</strong> {movie?.vote_average.toFixed(1)}{" "}
								/ 10
							</p>
							<button
								className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer  hover:bg-red-800 hover:-translate-y-1 transition active:-translate-y-0 mt-2 text-sm"
								onClick={() => setShowModal((prev) => !prev)}
							>
								Close
							</button>
						</div>
					</article>
				</article>
			</section>
		</div>
	);
};
export default Modal;
