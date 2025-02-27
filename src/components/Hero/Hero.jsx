import React from 'react';
import {ReactTyped} from 'react-typed'
import './Hero.css'
const Hero = () => {
  return (
    <div className="bg-black text-white text-center hero-section">
      <img
        src='/public/profileImg.png'
        alt=""
        className="mx-auto mb-8 rounded-circle"
        style={{
          width: '12rem',
          height: '12rem',
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
      <h1 className="display-4 fw-bold">
        <ReactTyped
        strings={[
          'I am Salman Khan',
          'MERN-Stack Developer'
        ]}
        typeSpeed={60}
        backSpeedSpeed={80}
        loop
        style={{
          background: 'linear-gradient(to right, #4ade80, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        >

        </ReactTyped>
      </h1>
      <p className="mt-4 fs-5 text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-4">
        <a href='/CV.pdf.pdf'
        download='/CV.pdf.pdf'
          className="btn me-3"
          style={{
            background: 'linear-gradient(to right, #4ade80, #3b82f6)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Download CV
        </a>
        <a href='https://drive.google.com/file/d/1xR9jkt5AmINm9fi4MVWQR8bSBHEN9xU5/view?usp=drive_open' 
        target='_blank'
          className="btn"
          style={{
            background: 'linear-gradient(to right, #ec4899, #f59e0b)',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;