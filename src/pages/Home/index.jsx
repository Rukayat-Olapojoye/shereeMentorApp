import DefaultLayout from '../../layouts/default-layout';
//import mentoringpic from '../Home/home2.jpeg';

// scoped style for this file
import './home.css';

function Home() {
	return (
		<DefaultLayout>
			<div className="home-container">
				<h1>Welcome to<br /> FindAMentor</h1>
				<h3>...Mentorship at its best!</h3>
			</div>
		</DefaultLayout>
	);
}

export default Home;