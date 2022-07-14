import React from "react";

export default function NetflixBg() {
	return (
		<>
			<img
				className="hidden sm:block absolute w-full h-full object-cover"
				src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/c341e6ff-7d21-4cf1-9c2c-83d51d8e26a7/PT-pt-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg"
				alt="netflix background"
				srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/c341e6ff-7d21-4cf1-9c2c-83d51d8e26a7/PT-pt-20220711-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/c341e6ff-7d21-4cf1-9c2c-83d51d8e26a7/PT-pt-20220711-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/c341e6ff-7d21-4cf1-9c2c-83d51d8e26a7/PT-pt-20220711-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
			/>
			<div className="fixed bg-black/70 top-0 left-0 w-full h-screen"></div>
		</>
	);
}
