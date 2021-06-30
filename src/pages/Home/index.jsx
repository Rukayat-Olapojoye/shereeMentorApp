import DefaultLayout from '../../layouts/default-layout';
import Mentorship3 from '../Home/Mentorship3.png';

// scoped style for this file
import './home.css';

function Home() {
	return (
		<DefaultLayout>
			<div className="homepage">
				<img src={Mentorship3} alt="mentorship Pic" />
				<h2>Welcome to Find-A-Mentor App</h2>
				<h3>Use the NavBar to Navigate your Way!!!</h3>
			</div>
		</DefaultLayout>
	);
}

export default Home;
