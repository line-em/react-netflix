import { useEffect, useContext, useState, createContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return useContext(AuthContext);
}
