import { BASE_URL } from "../Utils/constants";

export const loginApi = (data) => {
	return fetch(`${BASE_URL}/login`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};

export const addUserApi = (data) => {
	return fetch(`${BASE_URL}/register`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => response.json())
		.then((resp) => resp)
		.catch((err) => err);
};
