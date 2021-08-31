import React, { useState } from "react";
import toast from "react-hot-toast";
import { addUserApi } from "../../APIs/users";
import "./register-form.css";

const RegisterForm = ({ setIsNewUser }) => {
	const [inputs, setInputs] = useState({ role: "USER_ROLE" });

	const handleChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const resp = await addUserApi(inputs);
			if (resp.ok) {
				toast.success(resp.msg, { position: "top-right" });
				setIsNewUser(false);
			} else {
				toast.error(resp.msg, { position: "top-right" });
			}
		} catch (error) {
			toast.error(error, { position: "top-right" });
		}
	};

	return (
		<form
			className="login-form-inputs"
			onSubmit={handleSubmit}
			onChange={handleChange}
		>
			<input
				type="text"
				name="full_name"
				placeholder="Full Name"
				autoFocus
				required
			/>
			<input type="text" name="username" placeholder="Username" required />
			<input type="password" name="password" placeholder="Password" required />

			<button className="btn" type="submit">
				Registrarse
			</button>
			<button className="btn btn-back" onClick={() => setIsNewUser(false)}>
				Volver
			</button>
		</form>
	);
};
export default RegisterForm;
