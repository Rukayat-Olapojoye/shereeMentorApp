import DefaultLayout from '../../layouts/default-layout';
import mentoringpic from '../Home/mentoring-pic.jpg';

// scoped style for this file
import './home.css';

function Home() {
	return (
		<DefaultLayout>
			<div className="homepage">
				<img src={clipart} alt="mentorship Pic" />
			<div className="home-container">
				<h2>Welcome to Find-A-Mentor App</h2>
			</div>
			</div>
		</DefaultLayout>
	);
}

export default Home;
