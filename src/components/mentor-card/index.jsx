import { Link } from 'react-router-dom';
import './card.css';
function MentorCard({ mentor }) {
	return (
		<div className="card">
			<div>
				<img src={mentor.image} alt="mentor" />
				<div className="overlay">
					<Link className="mentor-link" to={`/mentors/${mentor.id}`}>
						<h1 className="name-link">{mentor.name}</h1>
					</Link>
					<span>{mentor.country}</span>
					<p>{mentor.company}</p>
					<p>{mentor.role}</p>
					<p>{mentor.advice}</p>
					<p>{mentor.languages}</p>
				</div>
			</div>
		</div>
	);
}

export default MentorCard;
