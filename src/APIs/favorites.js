import { BASE_URL } from "../Utils/constants";

export const getIdFavMoviesApi = (token) => {
	return fetch(`${BASE_URL}/favsid`, { headers: { authorization: token } })
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};

export const getFavMoviesApi = (token) => {
	return fetch(`${BASE_URL}/favs`, {
		method: "GET",
		headers: { authorization: token },
	})
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};

export const addFavMovieApi = (token, id_movie) => {
	const data = { id_movie };

	return fetch(`${BASE_URL}/favs`, {
		method: "POST",
		headers: {
			authorization: token,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};

export const removeFavMovieApi = (token, id_movie) => {
	const data = { id_movie };

	return fetch(`${BASE_URL}/favs`, {
		method: "DELETE",
		headers: {
			authorization: token,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};
