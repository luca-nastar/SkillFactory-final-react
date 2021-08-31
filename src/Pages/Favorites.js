import React, { useEffect, useState } from "react";
import { getAccessToken } from "../APIs/auth";
import { getFavMoviesApi, getIdFavMoviesApi } from "../APIs/favorites";
import MovieCatalogue from "../Components/MovieCatalogue/MovieCatalogue";

const Favorites = () => {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [reloadFav, setReloadFav] = useState(false);

	useEffect(() => {
		const token = getAccessToken();
		getFavMoviesApi(token).then((data) => {
			if (data.ok === true) {
				setMovies(data.favs);
			}
		});
		getIdFavMoviesApi(token).then((resp) => {
			if (resp.ok) {
				setFavorites(resp.id_favs);
			}
		});
	}, [reloadFav]);
	return (
		<>
			<MovieCatalogue
				title="Peliculas Favoritas"
				setReloadFav={setReloadFav}
				favorites={favorites}
				movies={movies}
			/>
		</>
	);
};

export default Favorites;
