import React from "react";

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between p-4 z-50 absolute w-full">
			<h1 className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
			<div className="flex justify-end flex-wrap">
				<button className="bg-neutral-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-neutral-900 hover:-translate-y-1 transition ease-in-out duration-300">
					SIGN IN
				</button>
				<button className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer  hover:bg-red-800 hover:-translate-y-1 transition ease-in-out duration-300">
					SIGN UP
				</button>
			</div>
		</nav>
	);
}
