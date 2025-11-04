import { useState } from 'react';
import { useUserSignup } from '../hooks/userSignup';
import { Link } from 'react-router-dom';
import AuthCarousel from '../components/AuthCarousel';
import Footer from '../components/Footer';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useUserSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  // Google sign-up handler
  const handleGoogleSignUp = () => {
    // In production: redirect to your backend Google OAuth endpoint
    window.location.href = `${process.env.REACT_APP_API_BASE_URL}/api/auth/google`;
  };

  return (
    <>
      <div className="pages auth-page">
        <div className="auth-container">
          <AuthCarousel />
          
          <div className="auth-form-section">
            <div className="auth-form-wrapper">
              <form className="signup" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>Create Account</h2>
                  <p>Join Workout Buddy today</p>
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
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button disabled={isLoading} className="btn btn-primary">
                  {isLoading ? 'Creating Account...' : 'Sign up'}
                </button>

                <div className="divider">OR</div>

                <button
                  type="button"
                  className="google-btn"
                  onClick={handleGoogleSignUp}
                >
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google Logo"
                  />
                  <p>Sign up with Google</p>
                </button>

                {error && <div className="error">{error}</div>}

                <div className="form-footer">
                  <p>Already have an account? <Link to="/login">Log in</Link></p>
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

export default Signup;