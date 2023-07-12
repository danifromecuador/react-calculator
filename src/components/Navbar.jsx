import { Outlet, Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => (
  <div>
    <div className="navbar-container">
      <h1>Math Magicians</h1>
      <nav className="Navbar ul">
        <Link to="/" className="li">Home</Link>
        <Link to="/calculator" className="li">Calculator</Link>
        <Link to="/quotes" className="li">Quotes</Link>
      </nav>
    </div>
    <Outlet />
  </div>
);

export default Navbar;
