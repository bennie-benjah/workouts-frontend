import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
        <div className="container">
            <h1>Workout Buddy</h1>
            {/* <Link to="/"><h1>Workout Body</h1></Link>
            <Link to="/create">New Workout</Link> */}
        </div>
    </header>
  );
};

export default Navbar;
