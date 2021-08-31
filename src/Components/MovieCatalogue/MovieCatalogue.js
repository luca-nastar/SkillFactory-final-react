import React from "react";
import Movie from "../Movie/Movie";
import "./movie-catalogue.css";

const MovieCatalogue = ({ title, setReloadFav, favorites, movies }) => {
	return (
		<div className="movie-container">
			<div className="title">
				<h1>{title}</h1>
			</div>
			<div className="movie-list">
				{movies.length > 0 ? (
					movies.map((movie) => (
						<Movie
							key={movie.id}
							favorites={favorites}
							setReloadFav={setReloadFav}
							movie={movie}
						/>
					))
				) : (
					<h3>
						<i className="fas fa-inbox" /> No hay favoritos
					</h3>
				)}
			</div>
		</div>
	);
};
export default MovieCatalogue;
