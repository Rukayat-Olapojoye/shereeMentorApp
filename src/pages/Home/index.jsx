import DefaultLayout from '../../layouts/default-layout';
import mentoringpic from '../Home/home2.jpeg';

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
					<h1 className="message">Welcome to FindAMentor</h1>
					<h3 className="message-small">....Mentorship at its best!</h3>

				</div>
			</div>
		</DefaultLayout>
	);
}

export default Home;