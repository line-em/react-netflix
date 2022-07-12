// @ts-nocheck
import React, { useEffect } from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import movieRequest from "../requests";

export default function Home() {
	return (
		<>
			<Main />
			<Row title="Trending" apiUrl={movieRequest.requestTrending} />
			<Row title="Top Rated" apiUrl={movieRequest.requestTopRated} />
			<Row title="Animation" apiUrl={movieRequest.requestAnimation} />
			<Row title="Sci-Fi" apiUrl={movieRequest.requestSciFi} />
			<Row title="Latest" apiUrl={movieRequest.requestLatest} />
		</>
	);
}
