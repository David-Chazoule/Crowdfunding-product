import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Appstate } from "../types/Types";

const initialState: Appstate = {
  totalAmount: 85000,
  bambooStandQuantity: 101,
  blackEditionQuantity: 64,
  bamboPrice: 25,
  blackEditionPrice: 75,
  totalBackers: 5007,
};

function appReducer(
  state: Appstate,
  action: { type: string; payload: any }
): Appstate {
  switch (action.type) {
    case "ADD_TO_TOTAL_AMOUNT":
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload,
      };
    case "ADD_TO_BACKERS":
      return {
        ...state,
        totalBackers: state.totalBackers + action.payload,
      };

    case "SUBTRACT_BAMBO_QUANTITY":
      return {
        ...state,
        bambooStandQuantity: state.bambooStandQuantity - action.payload,
      };

    case "SUBTRACT_BLACK_EDITION_QUANTITY":
      return {
        ...state,
        blackEditionQuantity: state.blackEditionQuantity - action.payload,
      };

    default:
      return state;
  }
}

const AppContext = createContext<
  { state: Appstate; dispatch: React.Dispatch<any> } | undefined
>(undefined);

export const AppProdiver = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
};
