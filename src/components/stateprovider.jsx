import { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {

    // initial state stuffs here
};

function reducer(state, action) {


    if (action.type === 'LOGOUT') {


    };
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
