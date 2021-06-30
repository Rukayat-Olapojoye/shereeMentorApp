import { useContext } from 'react';
import { AppContext } from '../../components/stateprovider';
import MentorCard from '../../components/mentor-card';

import './mentors.css';
import DefaultLayout from '../../layouts/default-layout';

function MentorList() {
	const { state } = useContext(AppContext);
	state.isUserLoggedIn = true;

	return (
		<DefaultLayout>
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
