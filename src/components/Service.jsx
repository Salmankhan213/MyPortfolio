import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs using HTML, CSS, and Bootstrap.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React JS and Redux Toolkit.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and APIs using Node JS and Express JS.",
  },
  {
    id: 4,
    title: "MongoDB Database",
    description: "Designing and managing scalable NoSQL databases with MongoDB.",
  },
  {
    id: 5,
    title: "Full-Stack Development",
    description: "Combining frontend and backend skills to build complete MERN stack applications.",
  },
  {
    id: 6,
    title: "API Integration",
    description: "Seamlessly integrating third-party APIs for enhanced functionality.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-5" id="service">
        <h2 className="text-center fs-1 fw-bold mb-5">My Services</h2>
      <div className="container px-5">
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4"
            onMouseOver={(e)=>{
              console.log(e.target.style)
              e.target.style.transition = 'transform 0.6s ease-in-out';
              e.currentTarget.style.transform = 'scale(1.05)'
            }
            }
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
            >
              <div
                className=" p-4 rounded-3 h-100 d-flex flex-column " 
                style={{backgroundColor:'rgba(166, 177, 229, 0.28)'}}

              >
                <div
                  className="text-end fs-2 fw-bold"
                  style={{
                    background: 'linear-gradient(to right, #4ade80, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {service.id}
                </div>
                <h3
                  className="mt-3 fs-3 fw-bold"
                  style={{
                    background: 'linear-gradient(to right, #4ade80, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {service.title}
                </h3>
                <p className="mt-2 text-secondary flex-grow-1">
                  {service.description}
                </p>
                <a href="#" className="mt-3 text-decoration-none text-success hover-text-primary">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;