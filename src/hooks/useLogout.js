import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';
export const useLogout = () => {
    const { dispatch } = useContext(AuthContext);
    const { dispatch: workoutDispatch } = useWorkoutsContext();
    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('user');
        // dispatch logout action if using context or state management
        dispatch({ type: 'LOGOUT' });
        workoutDispatch({ type: 'SET_WORKOUTS', payload: [] });
    };
    return { logout };
};
export default useLogout;