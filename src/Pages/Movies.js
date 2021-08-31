import React, { useEffect, useState } from "react";
import { getAccessToken } from "../APIs/auth";
import { getIdFavMoviesApi } from "../APIs/favorites";
import { getMoviesApi } from "../APIs/movies";
import MovieCatalogue from "../Components/MovieCatalogue/MovieCatalogue";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [reloadFav, setReloadFav] = useState(false);

	useEffect(() => {
		getMoviesApi().then((data) => {
			if (data.ok) {
				setMovies(data.movies);
			}
		});
		const token = getAccessToken();
		getIdFavMoviesApi(token).then((resp) => {
			if (resp.ok) {
				setFavorites(resp.id_favs);
			}
		});
	}, [reloadFav]);

	return (
		<div>
			<MovieCatalogue
				title="Lista de peliculas"
				setReloadFav={setReloadFav}
				favorites={favorites}
				movies={movies}
			/>
		</div>
	);
};

export default Movies;
