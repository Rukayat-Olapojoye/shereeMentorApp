import { useContext } from 'react';
import { AppContext } from '../../components/stateprovider';
import MentorCard from '../../components/mentor-card';



function MentorList() {
    const { state } = useContext(AppContext);

    return (
        <div className="mentor-list">
            <ul>
                {state.mentors.map(mentor => {
                    return ( <MentorCard mentor={mentor} key={mentor.id} />);
                })}
            </ul>
        </div>
    );
}

export default MentorList;
