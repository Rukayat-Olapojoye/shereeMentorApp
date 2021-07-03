import { useContext, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';
import linkedin from '../../images/linkedin.svg';
import heart from '../../images/heart.svg';
import DefaultLayout from '../../layouts/default-layout';
import banner from './profile.jpeg';

//import styles
import './mentorprofile.css';

function MentorProfile({ key }) {

	const {
		state: { mentors },
	} = useContext(AppContext);
	const [currentlyViewing, setCurrentlyViewing] = useState('about');

	// using params to get the value of the dynamic route parameter.
	// In this case, /mentors/:mentorid
	const params = useParams();
	const currentMentor = useRef(
		mentors.find(mentor => mentor.id === parseInt(params.mentorid)),
	);

	const viewSection = (section) => {
		setCurrentlyViewing(section)
	}



	return (
		<DefaultLayout>
			<div className="show-mentor">
				<div className="blue-div">
					<img className="banner-img" src={banner} alt="" />
				</div>
				<div className="mentor-image">
					<img src={currentMentor.current.image} alt={currentMentor.current.name} />
				</div>
				<h1 className="mentor-name">
					Hi, I'm {currentMentor.current.name} from{' '}
					{currentMentor.current.country}
				</h1>
				<p className="experience-para">
					Experienced {currentMentor.current.role} at{' '}
					{currentMentor.current.company}
				</p>
				<div className="SM-Link">
					<img className="linkedin icon" src={linkedin} alt="linkedin" />
				</div>
				<div className="small-boxes">
					<ul>
						<li className="ellipses">...</li>
						<li>
							<img className="icon" src={heart} alt="heart" />
						</li>
						<li><Link to='/chatmentor'><span>Ask a question</span></Link></li>
					</ul>
				</div>
				<div className="inline-headlist">
					<ul>
						<li onClick={() => viewSection("about")}><span className="list-span">About me</span></li>
						<li onClick={() => viewSection("reviews")}><span className="list-span">Reviews</span></li>
						<li onClick={() => viewSection("session")}><span className="list-span">Group Sessions</span></li>
					</ul>
				</div>
				{currentlyViewing === "about" &&
					<section>
						<div className="about">
							<h2 id="about-heading">About me</h2>
							<ul id="about-info">
								<li>
									{currentMentor.current.role} at {currentMentor.current.company}.
									Passionate about building, development and creating solutions<br></br>
									that make people's lives easier.
								</li>
								<li>I enjoy <strong>{currentMentor.current.hobbies}</strong></li>
								<li>I'm mentoring in <strong>{currentMentor.current.expertise}</strong></li>
								<li>I speak <strong>{currentMentor.current.languages}</strong></li>
								<li>Ask me about <strong>{currentMentor.current.advice}</strong></li>
							</ul>
							<hr className="Profile-hr" />
							<p id="contact">+{currentMentor.current.contact}</p>
							<p><strong>Joined</strong><span className="date">June, 2021</span></p>
							<hr className="Profile-hr" />
						</div>
					</section>
				}
				{currentlyViewing === "reviews" &&
					<section>
						<div className="reviews">
							<h2>Reviews</h2>
							<p>No reviews yet</p>
						</div>
					</section>
				}
				{currentlyViewing === "session" &&
					<section>
						<div className="session">
							<h2>Session</h2>
							<p>No upcoming Sessions</p>
						</div>
					</section>
				}
			</div>
		</DefaultLayout>
	);
}

export default MentorProfile;
