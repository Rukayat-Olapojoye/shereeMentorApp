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
				<hr className="top-hr" />
				<h1>Our Mentors</h1>
				<p className="first-para">Browse our network of mentors to find the right fit.</p>
				<hr />
			</div>
			<div className="mentor-list">

				{state.mentors.map(mentor => {
					return <MentorCard mentor={mentor} key={mentor.id} />;
				})}

			</div>
		</DefaultLayout>
	);
}

export default MentorList;
