import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useUserSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/signup`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, displayName }),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setError(json.error || 'Signup failed');
      } else {
        // save the user to the auth context and local storage
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};

export default useUserSignup;
