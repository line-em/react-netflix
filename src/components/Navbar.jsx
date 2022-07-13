import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between p-4 z-50 absolute w-full">
			<Link to="/">
				<h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
			</Link>
			<div className="flex justify-end flex-wrap">
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
			</div>
		</nav>
	);
}
