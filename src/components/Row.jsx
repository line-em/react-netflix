import axios from "axios";
import React, { useEffect } from "react";

export default function Row(props) {
	const [row, setRow] = React.useState();

	useEffect(() => {
		axios
			.get(props.apiUrl)
			.then((res) => {
				setRow(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [props.apiUrl]);

	// const mappedRow = row.map((movie) => {
	// 	<div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
	// 		<img
	// 			src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
	// 			alt={movie?.title}
	// 		/>
	// 		<div className="absolute bottom-0 left-0 right-0 p-2">
	// 			<h2 className="text-white text-sm">{movie?.title}</h2>
	// 		</div>
	// 	</div>;
	// });

	const mappedRow = row.map((movie) => {
		movie.title;
	});

	console.log(row[0].title);
	console.log(mappedRow);

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
			<div className="relative flex items-center">
				<div id={"slider"}>{mappedRow}</div>
			</div>
		</>
	);
}
