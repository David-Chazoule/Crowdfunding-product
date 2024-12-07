import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Appstate } from "../types/Types";

const initialState: Appstate = {
  totalAmount: 55000,
  bambooStandQuantity: 101,
  blackEditionQuantity: 64,
  bamboPrice: 25,
  blackEditionPrice: 75,
  totalBackers: 3007,
};
// Reducer function to update the state based on the dispatched actions
function appReducer(
  state: Appstate,
  action: { type: string; payload: any }
): Appstate {
  switch (action.type) {
    // If action type is 'ADD_TO_TOTAL_AMOUNT', update totalAmount by adding the payload value
    case "ADD_TO_TOTAL_AMOUNT":
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload,
      };
    // If action type is 'ADD_TO_BACKERS', increase totalBackers by the payload value
    case "ADD_TO_BACKERS":
      return {
        ...state,
        totalBackers: state.totalBackers + action.payload,
      };
    // If action type is 'SUBTRACT_BAMBO_QUANTITY', decrease bambooStandQuantity by the payload value
    case "SUBTRACT_BAMBO_QUANTITY":
      return {
        ...state,
        bambooStandQuantity: state.bambooStandQuantity - action.payload,
      };

    // If action type is 'SUBTRACT_BLACK_EDITION_QUANTITY', decrease blackEditionQuantity by the payload value
    case "SUBTRACT_BLACK_EDITION_QUANTITY":
      return {
        ...state,
        blackEditionQuantity: state.blackEditionQuantity - action.payload,
      };
    // Default case to return the current state if the action type doesn't match any case
    default:
      return state;
  }
}

// Creating the context to hold the global state and the dispatch function
const AppContext = createContext<
  { state: Appstate; dispatch: React.Dispatch<any> } | undefined
>(undefined);
// The AppProvider component provides the global state and dispatch function to all child components
export const AppProdiver = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
// Custom hook to access the state and dispatch function from the context
export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
};
