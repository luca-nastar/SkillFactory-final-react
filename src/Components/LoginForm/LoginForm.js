import React, { useState } from "react";
import toast from "react-hot-toast";
import { loginApi } from "../../APIs/users";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../Utils/constants";
import "./login-form.css";

const LoginForm = ({ setIsNewUser }) => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});

	const handleChangeForm = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();

		loginApi(inputs).then((resp) => {
			if (!resp.ok) {
				return toast.error(resp.msg, {
					duration: 1000,
					position: "top-center",
				});
			} else {
				const { accessToken, refreshToken } = resp;

				localStorage.setItem(ACCESS_TOKEN, accessToken);
				localStorage.setItem(REFRESH_TOKEN, refreshToken);

				toast.success("Acceso correcto!", {
					duration: 1000,
					position: "top-center",
				});

				window.location.href = "/movies";
			}
		});
	};

	return (
		<>
			<form
				className="login-form-inputs"
				onChange={handleChangeForm}
				onSubmit={handleSubmitForm}
			>
				<input
					type="text"
					name="username"
					placeholder="Username"
					autoFocus
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
				/>
				<button className="btn" type="submit">
					Ingresar
				</button>
				<button className="btn btn-register" onClick={() => setIsNewUser(true)}>
					Registrarse
				</button>
			</form>
		</>
	);
};
export default LoginForm;
