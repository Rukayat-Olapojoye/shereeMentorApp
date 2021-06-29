import { useContext } from 'react';
import { AppContext } from '../stateprovider';
import { Link, useHistory } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';

import './navstyle.css';

function Navbar() {

	const { state, dispatch } = useContext(AppContext);
	const history = useHistory();

	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		history.push('/home');
	}
	return (
		// <nav>
		// 	<ul>
		// 		<li>
		// 			<Link to="/">Home</Link>
		// 		</li>
		// 		<li>
		// 			<Link to="/test-page">Mentors Page</Link>
		// 		</li>
		// 	</ul>
		// </nav>

		<nav className="navbar">
			<Link className="navlink" to='/home'>
				Home
			</Link>

			{!state.isLoggedIn ? (
				<>
					<Link className="navlink" to='/registermentor'>
						Become a Mentor
					</Link>
					<Link className="navlink" to='/register'>
						Sign Up
					</Link>

					<Link className="navlink" to='/login'>
						Login
					</Link>
				</>
			) : (
				<>
					<Link className="navlink" to='/mentorspage'>
						View all Mentors
					</Link>

					<span onClick={logout} className="navlink">
						Logout
					</span>

				</>
			)}

		</nav>


	);
}

export default Navbar;
