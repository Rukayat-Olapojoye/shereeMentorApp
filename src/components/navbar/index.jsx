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
				<div className="flex-head">
					{!state.isLoggedIn ? (
						<>
							<div className="div-head">
								<Link to="/home">
									<h1 className="head-text">FindAMentor.com</h1>
								</Link>
								{/* <Link className="home btn" to='/home'>
									Home
								</Link> */}
								<Search />
							</div>
							<div className="tel home-tel">+202-11246-12900</div>
							<Link to="/login" className="login btn">
								Login
							</Link>
							<Link to="/register" className="signup btn">
								Sign up
							</Link>

							<Link to="/registermentor" className="signup btn">
								Become a Mentor
							</Link>
						</>
					) : (
						<>
							<div className="div-head fixed">
								<Link to="/">
									<h1 className="head-text">FindAMentor.com</h1>
								</Link>
								{/* <Link className="home btn" to='/home'>
									Home
								</Link> */}
								<Search />
							</div>
							<div className="tel">+202-11246-12900</div>
							<Link to="/mentors" className="signup btn nav-end">
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
