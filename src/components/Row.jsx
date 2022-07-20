import axios from "axios";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { userAuth } from "../context/AuthContext";

export default function Row(props) {
	// States: row of movies & liked movies fetched from firebase
	const [row, setRow] = useState();
	const [isLikedCloud, setIsLikedCloud] = useState(false);

	// Sliders
	const slider = useRef();
	const slideLeft = () => {
		slider.current.scrollLeft -= 400;
	};
	const slideRight = () => {
		slider.current.scrollLeft += 400;
	};

	// Get user's saved movies
	const { user } = userAuth();
	const movieRef = doc(db, `users`, `${user?.email}`);

	// API call for row of movies
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

	// Firebase call for liked movies & to check if the movie is in row. Save to state.
	useEffect(() => {
		getDoc(movieRef).then((doc) => {
			let cloudMovies = doc?.data()?.savedMovies;

			const filterMovies = row?.filter((movie) =>
				cloudMovies.find((savedMovie) => {
					return savedMovie.id === movie.id;
				})
			);
			if (filterMovies && filterMovies?.length > 0) {
				setIsLikedCloud(filterMovies.map((movie) => movie.id));
			}
		});
	}, [row]);

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
			<section className="relative flex items-center group">
				<ArrowCircleLeft
					color="#fff"
					size={38}
					weight="fill"
					className="absolute -left-5 opacity-100 hover:opacity-100 active:scale-105 cursor-pointer transition mr-2 z-10 hidden group-hover:block"
					onClick={slideLeft}
				/>

				<div
					ref={slider}
					className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{row !== null &&
						row?.map((movie, id) => (
							<Movie
								movie={movie}
								key={id}
								liked={isLikedCloud && isLikedCloud?.includes(movie.id)}
							/>
						))}
				</div>

				<ArrowCircleRight
					color="#fff"
					size={38}
					weight="fill"
					className="absolute -right-6 opacity-100 hover:opacity-70 active:scale-105 cursor-pointer transition ml-2 z-10 hidden group-hover:block"
					onClick={slideRight}
				/>
			</section>
		</>
	);
}
