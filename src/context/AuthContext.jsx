import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	async function signUp(email, password) {
		const user = await createUserWithEmailAndPassword(auth, email, password);
		setUser(user);
		setDoc(doc(db, `users`, user.user.uid), {
			userId: user.user.uid,
			savedMovies: []
		});
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
export function userAuth() {
	return useContext(AuthContext);
}
