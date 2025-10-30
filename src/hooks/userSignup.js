import {useState} from 'react';
import {useAuthContext} from './useAuthContext';
export const useUserSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    const signup = async (email, password, displayName) => {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, displayName }),
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
            setIsLoading(false);
        }
        if (response.ok) {
            // save the user to the auth context
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            setIsLoading(false);
        }
    };
    return { signup, error, isLoading };
};
export default useUserSignup;