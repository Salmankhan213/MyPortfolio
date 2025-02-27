import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import './Contact.css'; // Ensure this file exists and contains the necessary styles

const Contact = () => {
  return (
    <div className="contact-section bg-black text-white py-5" id="contact">
      <h2 className="text-center fs-1 fw-bold mb-5">Contact Me</h2>
      <div className="container px-5">
        <div className="row align-items-center w-100">
          {/* Contact Info */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="contact-heading fw-bold mb-4">Let's Talk</h3>
            <p className="text-gray-400 mb-4">
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>

            <div className="contact-detail mb-3">
              <FaEnvelope className="icon me-2" />
              <a
                href="mailto:salmankh3343@gmail.com"
                className="text-white text-decoration-none"
              >
                salmankh3343@gmail.com
              </a>
            </div>
            <div className="contact-detail mb-3">
              <FaPhone className="icon me-2" />
              <a
                href="https://wa.me/923144234243" 
                className="text-white text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                +923144234243
              </a>
            </div>
            <div className="contact-detail mb-3">
              <FaMapMarkedAlt className="icon me-2" />
              <span className="text-white">
                Dheria, Kanju Swat, KPK, Pakistan
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control bg-dark text-white"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bg-dark text-white"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">
                  Message
                </label>
                <textarea
                  className="form-control bg-dark text-white"
                  rows="5"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button
                className="btn btn-gradient text-white w-15 btn-sm"
                style={{
                  background: "linear-gradient(to right, #4ade80, #3b82f6)",
                  border: "none",
                }}
                onClick={() =>
                  alert("Contact us salmankh3343@gmail.com on Gmail")
                }
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;