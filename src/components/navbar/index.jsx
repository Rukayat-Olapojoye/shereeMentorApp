import { useContext } from 'react';
import { AppContext } from '../stateprovider';
import { Link, useHistory } from 'react-router-dom';
import Search from '../search';
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
					<Search />
					{/* <p>Become a member</p> */}
					<Link className="signup btn" to='/home'>
						Home
					</Link>

					{!state.isLoggedIn ? (
						<>
							<Link to="/login" className="login btn">
								Login
							</Link>
							<Link to="/register" className="signup btn">
								Sign up
							</Link>

							<Link to="/registermentor" className="signup btn">
								Become a Mentor
							</Link>
							<Link to="/mentors" className="signup btn">
								Find a mentor
							</Link>

						</>
					) : (
						<>
							<Link to="/mentors" className="signup btn">
								Find a mentor
							</Link>
							<button className="signup btn" onClick={logout}>Logout</button>
						</>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
