import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import "@fontsource/rubik";
import "@fontsource/rubik/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HashRouter>
		<App />
	</HashRouter>
);
