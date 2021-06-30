import { useContext, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';

import linkedin from '../../images/linkedin.svg';
import DefaultLayout from '../../layouts/default-layout';

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
				<div>{currentMentor.current.image}</div>
				<h1 className="mentor-name">
					History, I'm {currentMentor.current.name} from{' '}
					{currentMentor.current.country}
				</h1>
				<p>
					Experience {currentMentor.current.role} at{' '}
					{currentMentor.current.company}
				</p>
				<div className="SM-Link">
					<img src={linkedin} alt="" />
				</div>
				<div className="small-boxes">
					<ul>
						<li>...</li>
						<li>
							<img src="heart.svg" alt="" />
						</li>
						<li>Ask a question</li>
					</ul>
				</div>
				<div className="inline-headlist">
					<ul>
						<Link to="/About">About me</Link>
						<Link to="/Reviews">Reviews</Link>
						<Link to="Sessions">Group Sessions</Link>
					</ul>
				</div>
				<div className="show-session">No upcoming session</div>
			</div>
		</DefaultLayout>
	);
}

export default MentorProfile;
