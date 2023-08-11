import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">MyHealth</h1>
      <ul className="nav-menu">
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/healthInfo">
          <li>HealthInfo</li>
        </Link>
        <Link className="nav-link" to="/medicines">
          <li>Medicines</li>
        </Link>
        <Link className="nav-link" to="/doctorVisit">
          <li>DoctorVisit</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Navbar
