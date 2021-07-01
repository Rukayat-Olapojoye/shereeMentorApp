import { useEffect } from 'react';
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
        saveState.mentors = [action.payload.mentorUser, ...saveState.mentors];
        //saveState.mentorUser = action.payload.mentorUser;
        //saveState.mentors.unshift(action.payload.mentorUser)
    }

    if (action.type === 'UPDATE_MENTORLIST') {
        saveState.isLoggedIn = false;
        saveState.mentors = [...action.payload, ...saveState.mentors];
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

    useEffect(() => {
        let storage = localStorage.getItem('mentor-list');
        let mentorListInStorage = storage ? JSON.parse(storage) : [];

        dispatch({
            type: 'UPDATE_MENTORLIST',
            payload: mentorListInStorage
        })

    }, [])

    return (
        <AppContext.Provider value={ContextObject}>
            {children}
        </AppContext.Provider>
    );
}
