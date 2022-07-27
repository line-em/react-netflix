import SavedShows from "../components/SavedShows";
import React from "react";
import NetflixBg from "../components/NetflixBg";

export default function Account() {
	return (
		<div>
			<div className="h-[400px] w-full object-cover relative -z-10">
				<NetflixBg />
			</div>
			<div className="absolute top-[10%] md:top-[20%] px-10">
				<h1 className="text-white text-4xl md:text-5xl font-bold pb-8">My Shows</h1>
			</div>
			<div className="md:-my-20 -my-56 px-10">
				<div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 shadow-md">
					<SavedShows />
				</div>
			</div>
		</div>
	);
}
