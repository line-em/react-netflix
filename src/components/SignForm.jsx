import { Confetti, Warning } from "phosphor-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";
import NetflixBg from "./NetflixBg";

export default function SignForm({ type }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { user, signUp, logIn } = userAuth();
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (type === "Sign Up") {
			signUp(email, password)
				.then(() => {
					setSuccess(true);
					setTimeout(() => {
						navigate("/", { replace: true });
					}, 2000);
				})
				.catch((error) => {
					console.log(error);
					setError(true);
				});
		} else {
			logIn(email, password)
				.then(() => {
					setSuccess(true);
					setTimeout(() => {
						navigate("/", { replace: true });
					}, 2000);
				})
				.catch((error) => {
					setError(true);
				});
		}
		setError(null);
		setSuccess(null);
	};

	const errorMessage = (
		<p className="bg-red-600/70 text-white p-3 mb-6 rounded flex items-center justify-center gap-3">
			<Warning size={32} weight="duotone" className="flex-none" />
			Sorry, an error has occurred. Please check your credentials.
		</p>
	);

	const successMessage = (
		<p className="bg-green-600/70 text-white p-3 mb-6 rounded flex items-center justify-center gap-3">
			<Confetti size={32} weight="duotone" className="flex-none" />
			Success! You will be redirected shortly.
		</p>
	);

	return (
		<div className="w-full h-screen">
			<NetflixBg />
			<section className="fixed w-full px-4 py-24 z-10">
				<article className="mx-auto max-w-[450px] h-[600px] p-10 md:p-20 bg-black/75 rounded text-white flex flex-col items-center justify-center">
					<h1 className="text-3xl font-bold">{type}</h1>
					<form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							name="email"
							placeholder="Email"
							autoComplete="email"
							className="p-3 my-2 bg-gray-700 rounded"
						/>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							name="password"
							placeholder="Password"
							autoComplete="current-password"
							className="p-3 my-2 bg-gray-700 rounded"
						/>
						<button className="bg-red-600 py-3 my-6 rounded font-bold block hover:bg-red-800 hover:-translate-y-1 transition active:-translate-y-0">
							{type}
						</button>

						<div>
							{(error && errorMessage) || (success && successMessage)}
						</div>

						<aside className="flex justify-between items-center text-sm">
							<label htmlFor="remember">
								<input type="checkbox" name="remember" id="remember" />{" "}
								Remember me
							</label>
							<span className="underline text-red-400 hover:text-red-200 transition">
								<Link to="/">Need help?</Link>
							</span>
						</aside>
						<hr className="border-2 border-neutral-600/20 my-3 lg:my-10 w-1/2 mx-auto" />

						{type === "Sign Up" ? (
							<p className="text-center text-sm">
								Already have an account?{" "}
								<span className="underline text-red-400 hover:text-red-200 transition">
									<Link to="/login">Sign In</Link>
								</span>
							</p>
						) : (
							<p className="text-center text-sm">
								New to Netflix?{" "}
								<span className="underline text-red-400 hover:text-red-200 transition">
									<Link to="/signup">Sign Up</Link>
								</span>
							</p>
						)}
					</form>
				</article>
			</section>
		</div>
	);
}
