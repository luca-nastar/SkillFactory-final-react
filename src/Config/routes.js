//Header
import Header from "../Components/Header/Header";

//Pages
import Login from "../Pages/Login/Login";
import Movies from "../Pages/Movies";
import Favorites from "../Pages/Favorites";
import Admin from "../Pages/Admin";

const routes = [
	{
		path: "/",
		component: Header,
		exact: false,
		routes: [
			{
				path: "/login",
				component: Login,
				exact: true,
			},
			{
				path: "/movies",
				component: Movies,
				exact: true,
			},
			{
				path: "/favorites",
				component: Favorites,
				exact: true,
			},
			{
				path: "/admin",
				component: Admin,
				exact: true,
			},
		],
	},
];

export default routes;
