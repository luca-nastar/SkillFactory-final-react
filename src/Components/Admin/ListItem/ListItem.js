import React from "react";
import "./list-item.css";

const ListItem = ({ setShowList, setMovie, movie }) => {
	const editMovie = () => {
		setShowList(false);
		setMovie(movie);
	};
	return (
		<div className="movie">
			<div className="movie-title">
				<h2>{movie.name}</h2>
				<p>{movie.quote}</p>
			</div>
			<button onClick={editMovie}>
				<i className="fas fa-edit" />
			</button>
		</div>
	);
};
export default ListItem;
