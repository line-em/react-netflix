import React from "react";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center p-8 bg-neutral-900 mt-10">
			<p className="text-white text-center">
				Powered by{" "}
				<a
					href="https://developers.themoviedb.org/3"
					target="_blank"
					rel="noopener noreferrer"
					className="underline text-red-400 hover:text-red-200 transition"
				>
					TMDB API
				</a>
			</p>
			<p className="text-white text-center">
				Coded with 💚 by{" "}
				<a
					href="https://github.com/line-em"
					target="_blank"
					rel="noopener noreferrer"
					className="underline text-red-400 hover:text-red-200 transition"
				>
					@Line-em
				</a>
			</p>
		</footer>
	);
}
