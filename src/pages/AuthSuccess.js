// src/pages/AuthSuccess.js
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const AuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (token) {
      const user = { token };
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN', payload: user });
      
      // Redirect after a brief delay to show success message
      setTimeout(() => {
        navigate('/dashboard', { replace: true });
      }, 2000);
    } else {
      navigate('/login', { replace: true });
    }
  }, [searchParams, dispatch, navigate]);

  return (
    <div className="pages">
      <div className="auth-success">
        <h2>🎉 Success!</h2>
        <p>You have been successfully signed in. Redirecting...</p>
      </div>
    </div>
  );
};

export default AuthSuccess;