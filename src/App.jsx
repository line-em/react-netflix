import { Waveform } from "@uiball/loaders";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
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
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/account" element={<Account />} />
				</Routes>
			</AuthContextProvider>
		</main>
	) : (
		<div className="w-full h-full grid place-items-center my-10">
			<Waveform size={35} color="red" />
		</div>
	);
}
