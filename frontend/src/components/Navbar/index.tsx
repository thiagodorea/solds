import ImgLogo from 'assets/img/sold.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center  px-md-4 mb-3 bg-light border-bottom shadow-sm">
      <div className="container-fluid">
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to="/">
            <img src={ImgLogo} alt="Solds" width="120" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;