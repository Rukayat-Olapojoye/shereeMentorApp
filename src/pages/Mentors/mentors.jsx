import { useContext } from 'react';
import { AppContext } from '../../components/stateprovider';
import MentorCard from '../../components/mentor-card';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';


import './mentors.css';
import DefaultLayout from '../../layouts/default-layout';

function MentorList() {

	const history = useHistory();
	const { state } = useContext(AppContext);

	if (!state.isLoggedIn) {
		history.push('/login');
		return toast.error("Please Login to access page",
			{
				position: toast.POSITION.TOP_CENTER
			});

	}
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
