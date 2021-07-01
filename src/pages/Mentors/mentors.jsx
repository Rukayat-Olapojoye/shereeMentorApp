import { useContext } from 'react';
import { AppContext } from '../../components/stateprovider';
import MentorCard from '../../components/mentor-card';

import './mentors.css';
import DefaultLayout from '../../layouts/default-layout';

function MentorList() {
	const { state } = useContext(AppContext);
	return (
		<DefaultLayout>
			<div className="heading-text">
				<h1>Our Mentors</h1>
				<p className="first-para">Browse our network of mentors to find the right fit.</p>
			</div>
			<div className="mentor-list">
				<ul>
					{state.mentors.map(mentor => {
						return <MentorCard mentor={mentor} key={mentor.id} />;
					})}
				</ul>
			</div>
		</DefaultLayout>
	);
}

export default MentorList;
