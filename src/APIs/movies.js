import { BASE_URL } from "../Utils/constants";

export const getMoviesApi = () => {
	return fetch(`${BASE_URL}/movies`)
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};

export const addMovieApi = (token, data) => {
	return fetch(`${BASE_URL}/movies`, {
		method: "POST",
		headers: { authorization: token, "Content-Type": "application/json" },

		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};

export const editMovieApi = (token, data, id_movie) => {
	return fetch(`${BASE_URL}/movies/${id_movie}`, {
		method: "PUT",
		headers: { authorization: token, "Content-Type": "application/json" },

		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};
