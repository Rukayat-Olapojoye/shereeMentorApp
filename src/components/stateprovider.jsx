import { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {

    // initial state stuffs here
    isLoggedIn: false,
    userId: null,
    userEmail: null,
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
