import SavedShows from "../components/SavedShows";
import React from "react";
import NetflixBg from "../components/NetflixBg";

export default function Account() {
	return (
		<section>
			<aside className="h-[400px] w-full object-cover relative -z-10">
				<NetflixBg />
			</aside>
			<span className="absolute top-[10%] md:top-[20%] px-10">
				<h1 className="text-white text-4xl md:text-5xl font-bold pb-8">My Shows</h1>
			</span>
			<section className="md:-mt-20 -mt-56 px-10 mb-12">
				<article className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 shadow-md">
					<SavedShows />
				</article>
			</section>
		</section>
	);
}
