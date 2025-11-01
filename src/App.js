import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import AuthSuccess from './pages/AuthSuccess';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
             <Route path="/" element={<LandingPage />} />

            <Route path="/dashboard" element={ user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={ !user ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/signup" element={ !user ? <Signup /> : <Navigate to="/dashboard" />} />
            
<Route path="/auth/success" element={<AuthSuccess />} />
            {/* <Route path="/create" element={<Create />} />
            <Route path="/workouts/:id" element={<WorkoutDetails />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
