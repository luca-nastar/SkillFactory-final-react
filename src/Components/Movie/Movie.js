import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAccessToken } from "../../APIs/auth";
import {
	addFavMovieApi,
	getIdFavMoviesApi,
	removeFavMovieApi,
} from "../../APIs/favorites";
import "./movie.css";

const Movie = ({ favorites, movie, setReloadFav }) => {
	const { id, name, cover_img, quote, release_date } = movie;
	const [isFavorite, setIsFavorite] = useState(false);

	const token = getAccessToken();

	useEffect(() => {
		if (favorites.includes(id)) {
			setIsFavorite(true);
		}
	}, [favorites, id]);

	const handlefavorite = async () => {
		if (isFavorite) {
			await getIdFavMoviesApi(token);
			removeFavMovieApi(token, id);
			setIsFavorite(!isFavorite);
			setReloadFav(true);
			toast.success("Removido de favoritos", { position: "top-right" });
		} else {
			addFavMovieApi(token, id);
			setIsFavorite(!isFavorite);
			await getIdFavMoviesApi(token);
			setReloadFav(true);
			toast.success("Agregado a favoritos", { position: "top-right" });
		}
	};

	return (
		<>
			<div className="card">
				<div className="movie-img">
					<img src={cover_img} alt="Movie cover" />
				</div>
				<div className="movie-content">
					<div className="movie-title">
						<h2>
							{name} <label>({release_date})</label>
						</h2>
					</div>

					<div className="favorite">
						{token && (
							<button onClick={handlefavorite}>
								<i className={isFavorite ? "fas fa-star" : "far fa-star"}></i>
							</button>
						)}
					</div>
				</div>
				<p className="quote">{quote}</p>
			</div>
		</>
	);
};
export default Movie;
