import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container px-md-2 px-lg-5">
        {/* Top Section */}
        <div className="row align-items-center mb-4">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fs-2 fw-bold mb-3">Salman Khan</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in the Islamabad, specializing in web and
              software development.
            </p>
          </div>
          <div className="col-lg-5 col-md-7 mt-md-3 mt-lg-0 ms-2">
            <form className="d-flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="form-control bg-dark text-white rounded-start"
                style={{ border: "1px solid #444" }}
              />
              <button
                type="submit"
                className="btn btn-gradient rounded-end"
                style={{
                  background: "linear-gradient(to right, #4ade80, #3b82f6)",
                  border: "none",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-top border-gray-600 pt-4">
          <div className="row align-items-center">
            <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
              <p className="text-gray-400 mb-0">
                &copy; {new Date().getFullYear()} Salman. All rights reserved.
              </p>
            </div>
            <div className="col-md-4 text-center mb-3 mb-md-0">
              <div className="d-flex justify-content-center gap-3">
                <a href="https://web.facebook.com/salman.mp.988/" className="text-gray-400 hover-white">
                  <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/malaksalmanmp/" className="text-gray-400 hover-white">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/Salmankhan213" className="text-gray-400 hover-white">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-gray-400 hover-white">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;