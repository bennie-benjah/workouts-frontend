import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/create" element={<Create />} />
            <Route path="/workouts/:id" element={<WorkoutDetails />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
