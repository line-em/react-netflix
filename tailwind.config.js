/** */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {}
	},
	plugins: [require("tailwind-scrollbar-hide")]
};

// /** @type {import('tailwindcss').Config} */
// export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
// export const theme = {
// 	extend: {}
// };
// export const plugins = [require(`tailwind-scrollbar-hide`)];
