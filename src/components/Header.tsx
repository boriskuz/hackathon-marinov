import { Link } from "react-router-dom";
import CartIcon from "./Misc/CartIcon";

const Header = () => {
  const collapseNavbar = () => {
    const navbarToggler = document.querySelector(
      ".navbar-toggler"
    ) as HTMLElement;
    if (
      navbarToggler &&
      window.getComputedStyle(navbarToggler).display !== "none"
    ) {
      navbarToggler.click();
    }
  };
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
        <Link
          to="/"
          onClick={collapseNavbar}
          className="navbar-brand text-uppercase header-title"
        >
          Marinov
        </Link>

        <CartIcon />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
            <li className="nav-item">
              <Link to="/" onClick={collapseNavbar} className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={collapseNavbar}
                to="/product-page"
                className="nav-link "
              >
                Jewelry
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                onClick={collapseNavbar}
                to="/product-page-home-decor"
                className="nav-link "
              >
                Home Decor
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={collapseNavbar}
                to="/custom-orders"
                className="nav-link "
              >
                Custom Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={collapseNavbar}
                to="/our-story"
                className="nav-link "
              >
                Our story
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={collapseNavbar} to="/faq" className="nav-link ">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={collapseNavbar}
                to="/contact"
                className="nav-link "
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={collapseNavbar}
                to="/profile"
                className="nav-link "
              >
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
