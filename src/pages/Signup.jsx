import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
	return (
		<>
			<div className="w-full h-screen">
				<img
					className="hidden sm:block absolute w-full h-full object-cover"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/c341e6ff-7d21-4cf1-9c2c-83d51d8e26a7/PT-pt-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg"
					alt="netflix background"
					srcset="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/c341e6ff-7d21-4cf1-9c2c-83d51d8e26a7/PT-pt-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/c341e6ff-7d21-4cf1-9c2c-83d51d8e26a7/PT-pt-20220711-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/c341e6ff-7d21-4cf1-9c2c-83d51d8e26a7/PT-pt-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
				/>
				<div className="fixed bg-black/70 top-0 left-0 w-full h-screen"></div>
				<section className="fixed w-full px-4 py-24 z-10">
					<section className="mx-auto max-w-[450px] h-[600px] p-10 md:p-20 bg-black/75 rounded text-white flex flex-col items-center justify-center">
						<h1 className="text-3xl font-bold">Sign Up</h1>
						<form className="w-full flex flex-col py-4">
							<input
								type="email"
								name="email"
								placeholder="Email"
								autoComplete="email"
								className="p-3 my-2 bg-gray-700 rounded"
							/>
							<input
								type="password"
								name="password"
								placeholder="Password"
								autoComplete="current-password"
								className="p-3 my-2 bg-gray-700 rounded"
							/>
							<button className="bg-red-600 py-3 my-6 rounded font-bold block hover:bg-red-800 hover:-translate-y-1 transition active:-translate-y-0">
								Sign Up
							</button>
							<aside className="flex justify-between items-center text-sm">
								<label htmlFor="remember">
									<input type="checkbox" name="remember" id="remember" /> Remember
									me
								</label>
								<Link to="/">
									<a className="underline text-red-400 hover:text-red-200 transition">
										Need help?
									</a>
								</Link>
							</aside>
							<hr className="border-2 border-neutral-600/20 my-3 lg:my-10 w-1/2 mx-auto" />

							<p className="text-center text-sm">
								Already have an account?{" "}
								<Link to="/login">
									<a className="underline text-red-400 hover:text-red-200 transition">
										Sign In
									</a>
								</Link>
							</p>
						</form>
					</section>
				</section>
			</div>
		</>
	);
}
