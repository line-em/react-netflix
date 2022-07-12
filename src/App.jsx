import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Waveform } from "@uiball/loaders";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
	const [isLoading, setIsLoading] = React.useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000);
	}, []);

	return !isLoading ? (
		<main>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</AuthContextProvider>
		</main>
	) : (
		<div className="w-full h-full grid place-items-center my-10">
			<Waveform size={35} color="red" />
		</div>
	);
}

export default App;
