import { Toaster } from "react-hot-toast";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import routes from "./Config/routes";
import AuthProvider from "./Providers/authProvider";

const RouterWithSubRoutes = ({ route }) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => <route.component routes={route.routes} {...props} />}
		/>
	);
};

function App() {
	return (
		<AuthProvider>
			<Toaster />
			<Router>
				<Switch>
					{routes.map((route, idx) => (
						<RouterWithSubRoutes key={idx} route={route} />
					))}
				</Switch>
				<Route exact path="/" component={() => <Redirect to="/movies" />} />
			</Router>
		</AuthProvider>
	);
}

export default App;
