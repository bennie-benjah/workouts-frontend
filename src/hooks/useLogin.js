import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const API_BASE = process.env.REACT_APP_API_BASE_URL; // Your Render backend URL

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setIsLoading(false);
      } else {
        // save the user to the auth context
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
        setIsLoading(false);
      }
    } catch (err) {
      setError('Network error');
      setIsLoading(false);
      console.error(err);
    }
  };

  return { login, error, isLoading };
};

export default useLogin;
