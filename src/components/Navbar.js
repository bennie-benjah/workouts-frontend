import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    logout();
  };

  const handleGoBack = () => {
  navigate('/');
};


  const showBackButton = location.pathname !== '/dashboard' && location.pathname !== '/';

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          {showBackButton && (
            <button className="back-button" onClick={handleGoBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back
            </button>
          )}
          <h1 className="nav-logo">
            <Link to="/dashboard"><img src="/workouts-buddy-logo.png" alt="Workout Buddy Logo"/></Link>
          </h1>
        </div>

        <nav className="nav-menu">
          {user && (
            <div className="nav-user-section">
              <span className="user-email">{user.email}</span>
              <button onClick={handleClick} className="logout-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
                </svg>
                Logout
              </button>
            </div>
          )}
          {!user && (
            <div className="nav-auth-section">
              <Link to="/login" className="nav-link login-link">Log in</Link>
              <Link to="/signup" className="nav-link signup-link">Sign up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;