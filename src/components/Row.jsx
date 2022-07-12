import axios from "axios";
import React, { useEffect } from "react";

export default function Row(props) {
	const [row, setRow] = React.useState();

	useEffect(() => {
		axios
			.get(props.apiUrl)
			.then((response) => {
				setRow(response.data.results.sort(() => Math.random() - 0.5));
			})
			.catch((error) => {
				console.log(error);
			});
	}, [props.apiUrl]);

	const mappedRow = row?.map((movie) => (
		<div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-105 transition ease duration-300">
			<img
				src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
				alt={movie?.title}
				className="w-full h-auto block rounded"
			/>
			<div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white p-2 transition ease duration-300">
				<p className="p-2 text-base md:text-lg whitespace-normal font-bold flex justify-center h-full text-center tracking-wide">
					{movie?.title}
				</p>
			</div>
		</div>
	));

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
			<div className="relative flex items-center">
				{/* {row !== undefined && (
					<img src={`https://image.tmdb.org/t/p/w500/${row[9].backdrop_path}`} alt="" />
				)} */}
				<div id={"slider"}>{mappedRow?.length > 0 && mappedRow}</div>
			</div>
		</>
	);
}
