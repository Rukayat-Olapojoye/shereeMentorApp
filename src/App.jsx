import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Mentors from './pages/Mentors/mentors';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import FourOhFour from './pages/FourOhFour/404';
import AppStates from './components/stateprovider';
import MentorProfile from './pages/MentorProfile';
import RegisterMentor from './pages/RegisterMentor/registermentor';

function App() {
	return (
		<AppStates>
			<Router>
				<Switch>
					<Switch>
						{/*render Home Component when we hit /home */}
						<Route exact path="/home">
							<Home />
						</Route>
						{/* render Login Component when we hit /login */}
						<Route exact path="/login">
							<Login />
						</Route>
						{/* render Register Component when we hit /register */}
						<Route exact path="/register">
							<Register />
						</Route>

						{/* render Mentors Page Component when we hit /mentorspage*/}

						<Route exact path="/mentors">
							<Mentors />
						</Route>

						{/* render Mentors Page Component when we hit /mentorspage*/}

						<Route exact path="/mentors/:mentorid">
							<MentorProfile />
						</Route>

						<Route exact path="/registermentor">
							<RegisterMentor />
						</Route>

						<Route exact path="/">
							<Home />
						</Route>

						{/* fallback to a 404 if a route is not matched */}
						<Route>
							<FourOhFour />
						</Route>
					</Switch>
				</Switch>
			</Router>
		</AppStates>
	);
}

export default App;
