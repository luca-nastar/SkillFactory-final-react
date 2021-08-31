import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { getAccessToken } from "../../APIs/auth";
import LoginForm from "../../Components/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";
import "./login.css";

const Login = () => {
	const [isNewUser, setIsNewUser] = useState(false);

	if (getAccessToken()) {
		return <Redirect to="/movies" />;
	}

	return (
		<div className="login__container">
			<Link to="/movies">
				<i className="fas fa-chevron-left back-button"></i>
			</Link>
			<div className="login-form">
				<div className="login-form-logo">
					<img src="./Assets/logo.jpg" alt="Logo de la pagina" />
				</div>
				{isNewUser ? (
					<RegisterForm setIsNewUser={setIsNewUser} />
				) : (
					<LoginForm setIsNewUser={setIsNewUser} />
				)}
			</div>
		</div>
	);
};
export default Login;
