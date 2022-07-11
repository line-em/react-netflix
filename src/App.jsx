import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<main>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</main>
	);
}

export default App;
