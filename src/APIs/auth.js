import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { BASE_URL } from "../Utils/constants";

export const getAccessToken = () => {
	const accessToken = localStorage.getItem("accessToken");

	if (!accessToken || accessToken === null) {
		return null;
	}

	return isExpired(accessToken) ? null : accessToken;
};

export const getRefreshToken = () => {
	const refreshToken = localStorage.getItem("refreshToken");

	if (!refreshToken || refreshToken === null) {
		return null;
	}

	return isExpired(refreshToken) ? null : refreshToken;
};

export const logout = () => {
	localStorage.removeItem("accessToken");
	localStorage.removeItem("refreshToken");
};

export const refreshAccessToken = (refreshToken) => {
	return fetch(`${BASE_URL}/refreshToken`).then((response) => {
		const { accessToken, refreshToken } = response;

		localStorage.setItem("accessToken", accessToken);
		localStorage.setItem("refreshToken", refreshToken);
	});
};

const isExpired = (token) => {
	const metaToken = jwtDecode(token);
	const { exp } = metaToken;

	const now = dayjs().unix();

	return now > exp ? true : false;
};
