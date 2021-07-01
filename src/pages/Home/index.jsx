import DefaultLayout from '../../layouts/default-layout';
import mentoringpic from '../Home/mentoring-pic.jpg';

// scoped style for this file
import './home.css';

function Home() {
	return (
		<DefaultLayout>
			<div className="home-container">
				<div className="home-img" >
					<img src={mentoringpic} alt="mentorship Pic"
					/>
				</div>

				<div>
					<h1>Welcome to Find-A-Mentor App</h1>
					<h3>....Mentorship at its best!</h3>

				</div>
			</div>
		</DefaultLayout>
	);
}

export default Home;