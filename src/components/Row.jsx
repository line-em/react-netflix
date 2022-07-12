import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

export default function Row(props) {
	const [row, setRow] = useState();

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

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
			<div className="relative flex items-center">
				<div
					id={"slider"}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
				>
					{row !== undefined && row?.map((movie, id) => <Movie movie={movie} id={id} />)}
				</div>
			</div>
		</>
	);
}
