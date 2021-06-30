import { createContext, useReducer } from 'react';
import mentorData from '../store/mentor-data';

export const AppContext = createContext();

const initialState = {
	isLoggedIn: false,
	userId: null,
	userEmail: null,
	mentors: mentorData,
};

function reducer(state, action) {
<<<<<<< HEAD

    let saveState = { ...state };


    if (action.type === 'REGISTER') {
        saveState.isLoggedIn = false;
        saveState.userEmail = action.payload.userEmail;
        saveState.userId = action.payload.userId;

    }

    if (action.type === 'SELECT_IMAGE') {
        saveState.imageSelected = action.payload.imageSelected;

    }
    if (action.type === 'SAVE_IMAGE') {
        saveState.imageUploaded = action.payload.imageUploaded;

    }
    if (action.type === 'REGISTER_MENTOR') {
        saveState.isLoggedIn = false;

        // We need to push new mentor here
        saveState.mentorUser = action.payload.mentorUser;


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

=======
	let saveState = { ...state };

	if (action.type === 'REGISTER') {
		saveState.isLoggedIn = false;
		saveState.userEmail = action.payload.userEmail;
		saveState.userId = action.payload.userId;
	}

	if (action.type === 'SELECT_IMAGE') {
		saveState.imageSelected = action.payload.imageSelected;
	}
	if (action.type === 'SAVE_IMAGE') {
		saveState.imageUploaded = action.payload.imageUploaded;
	}
	if (action.type === 'REGISTER_MENTOR') {
		saveState.isLoggedIn = false;
		saveState.mentorUser = action.payload.mentorUser;
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
>>>>>>> c97247ac5e5ef689a7b4822d65b09c5cd7f50ebd
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
