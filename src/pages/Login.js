import { useState, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import AuthCarousel from '../components/AuthCarousel';
import Footer from '../components/Footer';
import { useAuthContext } from '../hooks/useAuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Handle Google OAuth success
  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (token) {
      // Save token and user data
      const user = { token };
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN', payload: user });
      navigate('/dashboard', { replace: true });
    }

    if (error) {
      console.error('Google OAuth error:', error);
    }
  }, [searchParams, dispatch, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  };

  return (
    <>
      <div className="pages auth-page">
        <div className="auth-container">
          <AuthCarousel />
          
          <div className="auth-form-section">
            <div className="auth-form-wrapper">
              <form className="login" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>Welcome Back</h2>
                  <p>Sign in to your account</p>
                </div>

                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading} 
                  className="btn btn-primary"
                >
                  {isLoading ? 'Signing in...' : 'Log in'}
                </button>

                <div className="divider">OR</div>

                <button
                  type="button"
                  className="google-btn"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                >
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google Logo"
                  />
                  <p>Sign in with Google</p>
                </button>

                {error && <div className="error">{error}</div>}

                <div className="form-footer">
                  <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;