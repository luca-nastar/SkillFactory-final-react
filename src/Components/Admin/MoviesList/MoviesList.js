import React, { useEffect, useState } from "react";
import { getMoviesApi } from "../../../APIs/movies";
import AddMovie from "../MovieForm/MovieForm";
import ListItem from "../ListItem/ListItem";
import "./movies-list.css";

const MoviesList = () => {
	const [movies, setMovies] = useState([]);
	const [showList, setShowList] = useState(true);
	const [reloadList, setReloadList] = useState(false);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		getMoviesApi().then((data) => {
			if (data.ok) {
				setMovies(data.movies);
			}
		});
	}, [reloadList]);

	return (
		<div className="movies-list">
			<div className="title">
				<h1>Movies List</h1>
				{showList ? (
					<button onClick={() => setShowList(false)}>
						<i className="fas fa-plus" />
					</button>
				) : (
					<button
						onClick={() => setShowList(true)}
						style={{ backgroundColor: "#4A4A4A" }}
					>
						<i className="fas fa-times"></i>
					</button>
				)}
			</div>

			{showList ? (
				movies.map((movie, idx) => (
					<ListItem
						key={idx}
						setShowList={setShowList}
						setMovie={setMovie}
						movie={movie}
					/>
				))
			) : (
				<AddMovie
					setShowList={setShowList}
					setReloadList={setReloadList}
					movie={movie}
					setMovie={setMovie}
				/>
			)}
		</div>
	);
};
export default MoviesList;
