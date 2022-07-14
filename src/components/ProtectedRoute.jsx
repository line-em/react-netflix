import React from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
	if (!userAuth().user) {
		return <Navigate to="/login" />;
	} else {
		return children;
	}
}
