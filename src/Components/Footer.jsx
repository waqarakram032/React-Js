import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">About ShopCart</h5>
            <p className="small text-secondary">
              Eduaid theme number one world class university in the world.
              There are students studying always in this university for all time.
            </p>
            <p className="mb-1">
              <i className="bi bi-geo-alt me-2"></i>New York, USA
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone me-2"></i>+880 123 456 789
            </p>
            <p className="mb-3">
              <i className="bi bi-envelope me-2"></i>info@shopcart.com
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-primary rounded-circle">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-sm btn-info rounded-circle">
                <FaTwitter />
              </a>
              <a href="#" className="btn btn-sm btn-primary rounded-circle">
                <FaLinkedinIn />
              </a>
              <a href="#" className="btn btn-sm btn-danger rounded-circle">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-sm btn-danger rounded-circle">
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Categories</h5>
            <ul className="list-unstyled text-secondary small">
              <li><a href="#" className="text-decoration-none text-light">All Products</a></li>
              <li><a href="#" className="text-decoration-none text-light">Shop</a></li>
              <li><a href="#" className="text-decoration-none text-light">Blog</a></li>
              <li><a href="#" className="text-decoration-none text-light">About</a></li>
              <li><a href="#" className="text-decoration-none text-light">Policy</a></li>
              <li><a href="#" className="text-decoration-none text-light">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled text-secondary small">
              <li><a href="#" className="text-decoration-none text-light">Summer Sessions</a></li>
              <li><a href="#" className="text-decoration-none text-light">Events</a></li>
              <li><a href="#" className="text-decoration-none text-light">Gallery</a></li>
              <li><a href="#" className="text-decoration-none text-light">Forums</a></li>
              <li><a href="#" className="text-decoration-none text-light">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-light">Terms of Use</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Recent Tweets</h5>
            <div className="small text-secondary">
              <p>
                <FaTwitter className="text-info me-2" />
                Aminur Islam<br />
                @ShopCart Greetings! #HTML_Template <br />
                Grab your item, 50% Big Sale Offer !!
              </p>
              <hr className="border-secondary" />
              <p>
                <FaTwitter className="text-info me-2" />
                Somrat Islam<br />
                @ShopCart Hey! #HTML_Template <br />
                Grab your item, 50% Big Sale Offer !!
              </p>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} ShopCart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
