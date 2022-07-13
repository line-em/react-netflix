import axios from "axios";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
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
			<div className="relative flex items-center group">
				<ArrowCircleLeft
					color="#fff"
					size={38}
					weight="fill"
					className="absolute -left-5 opacity-100 hover:opacity-100 active:scale-105 cursor-pointer transition mr-2 z-10 hidden group-hover:block"
				/>
				<div
					id={"slider"}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{row !== undefined && row?.map((movie, id) => <Movie movie={movie} key={id} />)}
				</div>
				<ArrowCircleRight
					color="#fff"
					size={38}
					weight="fill"
					className="absolute -right-6 opacity-100 hover:opacity-70 active:scale-105 cursor-pointer transition ml-2 z-10 hidden group-hover:block"
				/>
			</div>
		</>
	);
}
