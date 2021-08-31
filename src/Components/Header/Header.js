import React, { useContext } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { logout } from "../../APIs/auth";
import Login from "../../Pages/Login/Login";
import { AuthContext } from "../../Providers/authProvider";
import "./header.css";

const LoadRoutes = ({ routes }) => {
	return (
		<Switch>
			{routes.map((route, idx) => (
				<Route
					key={idx}
					path={route.path}
					exact={route.exact}
					component={route.component}
				/>
			))}
		</Switch>
	);
};

const Header = ({ routes }) => {
	const { user } = useContext(AuthContext);

	if (window.location.pathname === "/login") {
		return (
			<>
				<Route path="/login" component={Login} />
				<Redirect to="/login" />
			</>
		);
	}
	return (
		<>
			<header>
				<div className="container">
					<div className="nav-container">
						<Link to="/" className="logo">
							<img src="./Assets/logo.jpg" alt="Logo de la pagina" />
						</Link>
						<nav>
							<Link to="/movies">Peliculas</Link>
							{user ? <Link to="/favorites">Favoritas</Link> : ""}
							{user?.role === "ADMIN_ROLE" ? (
								<>
									<Link className="admin" to="/admin">
										<i className="fas fa-user-lock"></i>
									</Link>
								</>
							) : (
								""
							)}
						</nav>
					</div>
					<div className="login-container">
						{user ? (
							<a href="/movies" className="logout" onClick={logout}>
								Logout
							</a>
						) : (
							<Link to="/login">Login</Link>
						)}
					</div>
				</div>
			</header>
			<LoadRoutes routes={routes} />
		</>
	);
};
export default Header;
