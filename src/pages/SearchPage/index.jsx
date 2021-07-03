import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';
import MentorCard from '../../components/mentor-card';

import './mentors.css';
import DefaultLayout from '../../layouts/default-layout';


const parseSearchString = (str) => str.replace('?', '').split('=')[1];


function SearchPage() {
	const searchLocation = useLocation();
	const { state } = useContext(AppContext);
	const [searchresult, setSearchresult] = useState(state.mentors)
	//state.isUserLoggedIn = true;


	useEffect(() => {
		const searchString = parseSearchString(searchLocation.search) || "";
		setSearchresult(() => {
			let filteredsearch = state.mentors.filter((mentor) => {
				return mentor.name.toLowerCase().includes(searchString)

			})
			return filteredsearch;
		})

	}, [searchLocation, state.mentors])

	return (
		<DefaultLayout>
			<div className="heading-text">
				<hr className="top-hr" />
				<h1>Our Mentors</h1>
				<p className="first-para">Browse our network of mentors to find the right fit.</p>
				<hr />
			</div>
			<div className="mentor-list">

				{searchresult.map(mentor => {
					return <MentorCard mentor={mentor} key={mentor.id} />;
				})}

			</div>
		</DefaultLayout>
	);
}

export default SearchPage;
