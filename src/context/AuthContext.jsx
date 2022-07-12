import { useEffect, useContext, useState, createContext } from "react";
import { auth } from "../../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	async function signUp(email, password) {
		const user = await createUserWithEmailAndPassword(auth, email, password);
		setUser(user);
		return user;
	}

	async function logIn(email, password) {
		const user = await signInWithEmailAndPassword(auth, email, password);
		setUser(user);
		return user;
	}

	async function logOut() {
		await signOut(auth);
		setUser(null);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(
			auth,
			(currentUser) => {
				setUser(currentUser);
			},
			(error) => {
				console.error(error);
			}
		);
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
			{children}
		</AuthContext.Provider>
	);
}
export function useAuth() {
	return useContext(AuthContext);
}
