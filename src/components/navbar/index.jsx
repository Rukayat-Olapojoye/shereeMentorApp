import { useContext } from 'react';
import { AppContext } from '../stateprovider';
import { Link, useHistory } from 'react-router-dom';
//import { BrowserRouter as Router } from 'react-router-dom';

import './navstyle.css';

function Header() {
	const { state, dispatch } = useContext(AppContext);
	const history = useHistory();

	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		history.push('/home');
	};
	return (
		<header>
			<div className="header">
				<div>
					<Link to="/">
						<h1 className="head-text">FindAMentor.com</h1>
					</Link>
				</div>
				<div className="flex-head">
					<input
						type="text"
						name="search"
						id="search"
						placeholder="'Solape, 'Software Developer', or 'Microsoft'..."
					/>
					{/* <p>Become a member</p> */}

					{!state.isUserLoggedIn ? (
						<>
							<Link to="/login" className="login btn">
								Login
							</Link>
							<Link to="/register" className="signup btn">
								Sign up
							</Link>
						</>
					) : (
						<>
							<Link to="/mentors">
								<p>Find a mentor</p>
							</Link>
							<p onClick={logout}>Logout</p>
						</>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
