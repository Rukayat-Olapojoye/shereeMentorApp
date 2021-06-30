import { useContext, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';

import linkedin from '../../images/linkedin.svg';
import heart from '../../images/heart.svg';
import DefaultLayout from '../../layouts/default-layout';

//import styles
import './mentorprofile.css';

function MentorProfile({ key }) {
	const {
		state: { mentors },
	} = useContext(AppContext);
	// using params to get the value of the dynamic route parameter.
	// In this case, /mentors/:mentorid
	const params = useParams();
	const currentMentor = useRef(
		mentors.find(mentor => mentor.id === parseInt(params.mentorid)),
	);

	return (
		<DefaultLayout>
			<div className="show-mentor">
				<div className="green-div"></div>
				<div className="mentor-image">{currentMentor.current.image}</div>
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
						<li>Ask a question</li>
					</ul>
				</div>
				<div className="inline-headlist">
					<ul>
						<li><Link to="/About">About me</Link></li>
						<li><Link to="/Reviews">Reviews</Link></li>
						<li><Link to="/Sessions">Group Sessions</Link></li>	
					</ul>
				</div>
				<div className="show-session">No upcoming session</div>
			</div>
		</DefaultLayout>
	);
}

export default MentorProfile;
