import { useContext } from 'react';
import { MyContext } from './contextProvider';
import MentorCard from '../components/mentor-card';


function MentorList() {
    const { state } = useContext(MyContext);

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
