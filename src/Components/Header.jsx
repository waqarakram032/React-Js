import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container">
      
        <a className="navbar-brand fw-bold fs-3 text-dark" href="#">
          <span className="text-warning">B</span>logify
        </a>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold text-dark" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
