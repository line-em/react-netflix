import { Info } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

export default function Navbar() {
	const { user, logOut } = userAuth();
	const [logoutNotification, setlogoutNotification] = useState(null);

	const handleLogOut = async () => {
		logOut()
			.then(() => {
				setlogoutNotification(true);
				setTimeout(() => {
					setlogoutNotification(false);
				}, 2700);
			})
			.catch(() => {
				setlogoutNotification(false);
			});
	};

	const logoutNotificationMessage = (
		<div
			className="absolute right-0 top-14 my-2 lg:w-[20vw] bg-neutral-700 text-white p-3 mb-6 rounded hidden sm:flex items-center justify-center gap-3 cursor-pointer"
			onClick={() => setlogoutNotification((prevState) => !prevState)}
		>
			<Info size={32} weight="duotone" className="flex-none" />
			You've been successfully logged out.
		</div>
	);

	const authenthicatedButtons = (
		<>
			<Link to="/profile">
				<button className="bg-neutral-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-neutral-900 hover:-translate-y-1 transition active:-translate-y-0">
					Account
				</button>
			</Link>
			<button
				className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer  hover:bg-red-800 hover:-translate-y-1 transition active:-translate-y-0"
				onClick={() => handleLogOut()}
			>
				Logout
			</button>
		</>
	);

	const generalButtons = (
		<>
			<Link to="/login">
				<button className="bg-neutral-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-neutral-900 hover:-translate-y-1 transition active:-translate-y-0">
					SIGN IN
				</button>
			</Link>
			<Link to="/signup">
				<button className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer  hover:bg-red-800 hover:-translate-y-1 transition active:-translate-y-0">
					SIGN UP
				</button>
			</Link>
		</>
	);

	return (
		<nav className="flex items-center justify-between p-4 z-50 absolute w-full">
			<Link to="/">
				<h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
			</Link>
			<div className="flex justify-end flex-wrap gap-3 relative">
				{user ? authenthicatedButtons : generalButtons}
				{logoutNotification && logoutNotificationMessage}
			</div>
		</nav>
	);
}
