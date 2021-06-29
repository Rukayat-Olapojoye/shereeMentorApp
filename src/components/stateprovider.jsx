import { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {

    // initial state stuffs here
    isLoggedIn: false,
    userId: null,
    userEmail: null,
    mentors: [
        {
            id: 1,
            name: "Sheryl Coker",
            country: "Poland",
            company: "Bez Inc",
            role: "Product Manager",
            advice: "Career Advice, Interview techniques, Team-building",
            hobbies: "Fishing",
            contact: "315-456-800",
            image: <img src="../images/img-1" alt=""/>,
            languages: "Igbo, English"
        },
    
        {
            id: 2,
            name: "Tobi Lawson",
            country: "Nigeria",
            company: "Lakes Company Ltd",
            role: "UI/UX Design",
            advice: "Career Advice, Design, Leadership",
            hobbies: "Playing the guitar",
            contact: "315-456-800",
            image: <img src="../images/img-25" alt={""}/>,
            languages: "Yoruba, English"
        },
    
        {
            id: 3,
            name: "Tamara James",
            country: "Ghana",
            company: "Talom",
            role: "Product Designer",
            advice: "Interview Techniques, Design, Career Advice",
            hobbies: "Shopping",
            contact: "233-345-675",
            image: <img src="../images/img-5" alt={""}/>,
            languages: "English"
        },
    
        {
            id: 4,
            name: "Sarah Rice",
            country: "Canada",
            company: "Perky",
            role: "Software Developer",
            advice: "Career advice, Interview techniques, Agile Development",
            hobbies: "Planting",
            contact: "123-456-789",
            image: <img src="../images/img-3" alt={""}/>,
            languages: "English, French"
        },
    
        {
            id: 5,
            name: "Tess Gold",
            country: "Kenya",
            company: "Microsoft",
            role: "Data Scientist",
            advice: "Career growth, Interview techniques, Leadership",
            hobbies: "Dancing",
            contact: "345-789-234",
            image: <img src="../images/img-7" alt={""}/>,
            languages: "English",
        },
    
        {
            id: 6,
            name: "Bilal Mishra",
            country: "India",
            company: "Chaudray Inc",
            role: "Data Administrator",
            advice: "Data Managaement, Career growth",
            hobbies: "Hockey",
            contact: "989-766-222",
            image: <img src="../images/img-12" alt={""}/>,
            languages: "Hindi, English"
        },
    
        {
            id: 7,
            name: "James Carter",
            country: "Netherlands",
            company: "Facebook",
            role: "DevOps",
            advice: "Training, Career growth, Interview Techniques",
            hobbies: "Ice-Skating",
            contact:"100-233-675",
            image: <img src="../images/img-21" alt={""}/>,
            languages: "English, Italian"
        },
    
        {
            id: 8,
            name: "Mia Ahmad",
            country: "Egypt",
            company: "Amazon",
            role: "Systems Analyst",
            advice: "Career growth, Agile",
            hobbies: "Reading",
            contact: "767-432-267",
            image: <img src="../images/img-4" alt={""}/>,
            languages: "Arabic, English"
        },
    
        {
            id: 9,
            name: "Gesty France",
            country: "France",
            company: "Twitter",
            role: "Project Manager",
            advice: "Project Development, Career growth, Leadership",
            hobbies: "Painting",
            contact: "555-212-377",
            image:<img src="../images/img-2" alt={""}/>,
            languages: "French, English"
        },
    
        {
            id: 10,
            name: "Larry Mistra",
            country: "UAE",
            company: "Linkedin",
            role: "Network Engineer",
            advice: "Network Management, Career growth, training",
            hobbies: "Painting",
            contact: "545-567-121",
            image: <img src="../images/img-15" alt={""}/>,
            languages: "Arabic"
        },
    
        {
            id: 11,
            name: "Rajesh Sandeep",
            country: "India",
            company: "Microsoft",
            role: "Web developer",
            advice: "Career growth, interview techniques",
            hobbies: "Snorkelling",
            contact: "221-212-454",
            image: <img src="../images/img-13" alt={""}/>,
            languages: "Arabic"
        },
    
        {
            id: 12,
            name: "Ikechukwu Nwankwo",
            country: "Nigeria",
            company: "Google",
            role: "UI/UX Design",
            advice: "Design, Career growth",
            hobbies: "Basketball",
            contact: "234-801-3422",
            image: <img src="../images/img-23" alt={""}/>,
            languages: "Igbo, Hausa, English"
        },
    
        {
            id: 13,
            name: "Rachael Thandile",
            country: "South Africa",
            company: "PZ cussons",
            role: "Product Manager",
            advice: "Leadership, Carer growth",
            hobbies: "Traveling",
            contact: "367-777-211",
            image: <img src="../images/img-6" alt={""}/>,
            languages: "Zulu, English"
        },
    
        {
            id: 14,
            name: "Clay Thompson",
            country: "United Kingdom",
            company: "Tesla",
            role: "System Analyst",
            advice: "Career growth, team-building",
            hobbies: "Ice Skating",
            contact: "446-222-899",
            image: <img src="../images/img-20" alt={""}/>,
            languages: "English"
        },
    
        {
            id: 15,
            name: "Troy James",
            country: "Germany",
            company: "Developer's World",
            role: "DevOps",
            advice:"Systems management, Career growth, Agile",
            hobbies: "Ice Skating",
            contact: "211-322-211",
            image: <img src="../images/img-17" alt={""}/>,
            languages: "German, English"
        },
    
        {
            id: 16,
            name: "Matthew Jones",
            country: "Scotland",
            company: "Microsoft",
            role: "Web developer", 
            advice: "Career growth, Leadership, Team building",
            hobbies: "Photography",
            contact: "989-676-897",
            image: <img src="../images/img-19" alt={""}/>,
            languages: "English"
        },
    
        {
            id: 17,
            name: "Thomas Foyer",
            country: "Italy",
            company: "Apple",
            role: "Mobile App Developer",
            advice: "Design, Career growth, Interview techniques",
            hobbies: "Designing",
            contact: "212-787-211",
            image: <img src="../images/img-14" alt={""}/>,
            languages: "Italian, English"
        },
    
        {
            id: 18,
            name: "Mark Fisher",
            country: "United States",
            company: "Microsoft",
            role: "Software Developer",
            advice: "Career growth, Team building",
            hobbies: "Painting",
            contact: "122-452-121",
            image: <img src="../images/img-16" alt={""}/>,
            languages: "English"
        },
    
        {
            id: 19,
            name: "Ray Brown",
            country: "United States",
            company: "Twitter",
            role: "Network Engineer",
            advice: "Career growth, Agile",
            hobbies: "Sky-diving",
            contact: "232-121-423",
            image: <img src="../images/img-10" alt={""}/>,
            languages: "English, French"
        },
    
        {
            id: 20,
            name: "Frank Sawyer",
            country: "Canada",
            company: "Australia",
            role: "Freelis",
            advice: "Career growth, Interview techniques, Team building",
            hobbies: "Skating",
            contact: "366-212-121",
            image: <img src="../images/img-24" alt={""}/>,
            languages: "English"
        },
    
        {
            id: 21,
            name: "Justin Mangwa",
            country: "South Africa",
            company: "Google",
            role: "Systems Analyst",
            advice: "Leadership, Career growth",
            hobbies: "Planting",
            contact: "323-121-422",
            image: <img src="../images/img-9" alt={""}/>,
            languages: "English"
        },
    
        {
            id: 22,
            name: "Henry King",
            country: "Austria",
            company: "Facebook",
            role: "Software Developer",
            advice: "Career growth, Agile Development",
            hobbies: "Surfing",
            contact: "212-288-787",
            image: <img src="../images/img-22" alt={""}/>,
            languages: "English"
        },
    
        {
            id: 23,
            name: "Timothy Raymond",
            country: "United Kingdom",
            company: "Amazon",
            role: "Systems Manager",
            advice: "Career growth, Leadership",
            hobbies: "Cooking",
            contact: "212-323-121",
            image: <img src="../images/img-18" alt={""}/>,
            languages: "English"
        },
    
        {
            id: 24,
            name: "Ahmad Fehy",
            country: "Canada",
            company: "Microsoft",
            role: "Product Designer",
            advice: "Design, Agile, Career advice",
            hobbies: "Hiking",
            contact: "219-321-908",
            image: <img src="../images/img-8" alt={""}/>,
            languages: "English, French"
        },
    
        {
            id: 25,
            name: "Michael Smith",
            country: "Switzerland",
            company: "Apple Inc",
            role: "Product designer",
            advice: "Design, Team building, Career growth",
            hobbies: "Ice-Skating",
            contact: "567-212-799",
            image: <img src="../images/img-11" alt={""}/>,
            languages: "English"
        }
    ]
};

function reducer(state, action) {

    let saveState = { ...state };


    if (action.type === 'REGISTER') {
        saveState.isLoggedIn = false;
        saveState.userEmail = action.payload.userEmail;
        saveState.userId = action.payload.userId;

    }
    if (action.type === 'LOGIN') {
        saveState.isLoggedIn = true;
        saveState.userEmail = action.payload.userEmail;
        saveState.userId = action.payload.userId;

    }

    if (action.type === 'LOGOUT') {
        saveState.isLoggedIn = false;
        saveState.userEmail = null;
        saveState.userId = null;
    }
    return saveState;

}


export default function AppStates({ children }) {
    const [appstate, dispatch] = useReducer(reducer, initialState);

    const ContextObject = {
        state: appstate,
        dispatch: dispatch,
    };


    return (
        <AppContext.Provider value={ContextObject}>
            {children}
        </AppContext.Provider>
    );
}
