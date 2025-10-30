import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useNavigate, Link } from 'react-router-dom';
import AuthCarousel from '../components/AuthCarousel';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);

    // redirect if successful login
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      navigate('/', { replace: true });
    }
  };

  const handleGoogleSignIn = () => {
    // In a real app you'd redirect to your backend route for Google OAuth
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
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button disabled={isLoading} className="btn btn-primary">
                  {isLoading ? 'Signing in...' : 'Log in'}
                </button>

                <div className="divider">OR</div>

                <button
                  type="button"
                  className="google-btn"
                  onClick={handleGoogleSignIn}
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