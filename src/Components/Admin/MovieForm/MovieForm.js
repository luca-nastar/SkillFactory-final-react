import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAccessToken } from "../../../APIs/auth";
import { addMovieApi, editMovieApi } from "../../../APIs/movies";
import { formValidate } from "../../../Utils/formValidator";
import "./movie-form.css";

const AddMovie = ({ setShowList, setReloadList, movie, setMovie }) => {
	const [inputs, setInputs] = useState({
		...movie,
		cover_img:
			movie.cover_img ||
			"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png",
	});

	useEffect(() => {
		return () => {
			setMovie({});
		};
	}, [setMovie]);

	const handleChangeForm = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = async (e) => {
		e.preventDefault();

		const token = getAccessToken();
		const validator = formValidate(inputs);

		if (!validator.ok) {
			toast.error(validator.msg);
		}

		if (validator.ok) {
			if (Object.keys(movie).length === 0) {
				try {
					const resp = await addMovieApi(token, inputs);
					if (!resp.ok) {
						toast.error(resp.msg);
					} else {
						toast.success(resp.msg);
						setShowList(true);
						setReloadList(true);
					}
				} catch (error) {
					toast.error(error);
				}
			} else {
				try {
					const resp = await editMovieApi(token, inputs, movie.id);
					if (!resp.ok) {
						toast.error(resp.msg);
					} else {
						toast.success(resp.msg);
						setShowList(true);
						setReloadList(true);
					}
				} catch (error) {
					toast.error(error);
				}
			}
		}
	};

	return (
		<form className="add-movie-form" onSubmit={handleSubmitForm}>
			<div>
				<label>Nombre de la pelicula:</label>
				<input
					type="text"
					name="name"
					value={inputs.name}
					onChange={handleChangeForm}
					placeholder="Nombre de la pelicula"
					autoFocus
					required
				/>
			</div>
			<div>
				<label>Imagen de la pelicula (URL):</label>
				<input
					type="text"
					name="cover_img"
					value={inputs.cover_img}
					onChange={handleChangeForm}
					placeholder="Imagen de la pelicula (URL)"
				/>
			</div>
			<div>
				<label>Una frase de la pelicula:</label>
				<input
					type="text"
					name="quote"
					value={inputs.quote}
					onChange={handleChangeForm}
					placeholder="Una frase de la pelicula"
					required
				/>
			</div>
			<div>
				<label>Año de estreno</label>
				<input
					type="number"
					name="release_date"
					value={inputs.release_date}
					onChange={handleChangeForm}
					placeholder="Año de estreno"
					required
				/>
			</div>
			<button className="btn-add-movie">Enviar</button>
		</form>
	);
};
export default AddMovie;
