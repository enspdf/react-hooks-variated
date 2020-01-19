import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});

const initialState = { fruits: [] };

function reducer(state, action) {
    switch (action.type) {
        case "addFruit":
            if (!state.fruits) {
                return { fruits: [action.payload] };
            }

            return {
                fruits: [...state.fruits, action.payload]
            };
        case "addVegatable":
            return {
                vegetables: [...state.vegetables, action.payload]
            };
        default:
            throw new Error("Action type must be defined");
    }
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};

export default Store;