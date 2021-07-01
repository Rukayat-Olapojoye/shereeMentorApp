import DefaultLayout from '../../layouts/default-layout';
import clipart from '../Home/clip-art.jpg';

// scoped style for this file
import './home.css';

function Home() {
	return (
		<DefaultLayout>
			<div className="homepage">
				<img src={clipart} alt="mentorship Pic" />
				<h2>Welcome to Find-A-Mentor App</h2>
				<h3>Use the NavBar to Navigate your Way!!!</h3>
			</div>
		</DefaultLayout>
	);
}

export default Home;
