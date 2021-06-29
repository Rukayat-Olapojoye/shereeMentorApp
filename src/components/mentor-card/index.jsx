import { Link } from 'react-router-dom'

function MentorCard({ mentor }) {


    
    return (
      <li className="card">
          <div>{ mentor.image }
              <div className="overlay">
              <Link className="mentor-link" to={`/mentorpage/${mentor.id}`}>
                <h1>{ mentor.name }</h1>
              </Link>
              <span>{ mentor.country }</span>
              <p>{ mentor.company}</p>
              <p>{ mentor.role }</p>
              <p>{ mentor.advice }</p>
              <p>{ mentor.languages }</p>
              </div>
          </div>
      </li>
    );
}

export default MentorCard;