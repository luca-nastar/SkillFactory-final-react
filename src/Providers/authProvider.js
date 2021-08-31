import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import {
	getAccessToken,
	getRefreshToken,
	logout,
	refreshAccessToken,
} from "../APIs/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [user, setUser] = useState({
		user: null,
		isLoading: true,
	});

	useEffect(() => {
		checkUserLogin(setUser);
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

const checkUserLogin = (setUser) => {
	const accessToken = getAccessToken();

	if (!accessToken || accessToken === null) {
		const refreshToken = getRefreshToken();

		if (!refreshToken || refreshToken === null) {
			logout();
			setUser({
				user: null,
				isLoading: false,
			});
		} else {
			refreshAccessToken(refreshToken);
		}
	} else {
		setUser({ user: jwtDecode(accessToken), isLoading: false });
	}
};
