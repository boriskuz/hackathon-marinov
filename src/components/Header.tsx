import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid spacing">
        <button
          className="navbar-toggler px-0 color-brown"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand text-uppercase header-title">
          Marinov
        </Link>

        <i className="fa-solid fa-cart-shopping fs-5"></i>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
            <li className="nav-item">
              <Link to="/" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jewelry" className="nav-link ">
                Jewelry
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/home-decor" className="nav-link ">
                Home Decor
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/custom-orders" className="nav-link ">
                Custom Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-story" className="nav-link ">
                Our story
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link ">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link ">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link ">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
