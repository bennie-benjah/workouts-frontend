import { createContext, useReducer } from "react";
export const WorkoutsContext = createContext();
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { ...state, workouts: action.payload };
    case "CREATE_WORKOUT":
      return { ...state, workouts: [action.payload, ...state.workouts] };
    case "DELETE_WORKOUT":
      return {
        ...state,
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };

    case "UPDATE_WORKOUT":
      const updatedWorkouts = state.workouts.map((w) =>
        w._id === action.payload._id ? action.payload : w
      );
      return { ...state, workouts: updatedWorkouts };
    default:
      return state;
  }
};
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: [] });
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
