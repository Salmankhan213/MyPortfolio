import React from "react";
import TailorImg from "/public/Tailor.png"; 
import POSImg from "/public/POS.png"; 
import YoutubeImg from "/public/Youtube.png"; 
import PortfolioImg from "/public/Portfolio.png"; 
import OnlineShopImg from "/public/OnlineShop.png"; 

const projects = [
  {
    id: 1,
    name: "Tailor Management System",
    technologies: "MERN Stack",
    image: TailorImg,
    github: "https://github.com/Salmankhan213/Tailor-Management-System",
    description:
      "A comprehensive system for managing tailor shops, including customer orders, inventory, and billing. Built with MongoDB, Express, React, and Node.js.",
  },
  {
    id: 2,
    name: "Point Of Sale",
    technologies: "MERN Stack",
    image: POSImg,
    github: "https://github.com/Salmankhan213/POS",
    description:
      "A point-of-sale system for retail businesses, enabling seamless transactions, inventory management, and sales reporting. Developed using the MERN stack.",
  },
  {
    id: 3,
    name: "Youtube Clone",
    technologies: "React JS",
    image: YoutubeImg,
    github: "https://github.com/Salmankhan213/Youtube-clone",
    description:
      "A YouTube clone application that allows users to watch, upload, and manage videos. Built with React JS and integrated with a backend API.",
  },
  {
    id: 4,
    name: "Portfolio",
    technologies: "React JS",
    image: PortfolioImg,
    github: "https://github.com/YouafKhan1",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience. Designed and developed using React JS and Bootstrap.",
  },
  {
    id: 5,
    name: "Online Shopping",
    technologies: "React JS",
    image: OnlineShopImg,
    github: "https://github.com/Salmankhan213/OnlineShopping",
    description:
      "An e-commerce platform for online shopping, featuring product listings, a shopping cart, and payment integration. Built with React JS and Firebase.",
  },
  {
    id: 6,
    name: "Contact App",
    technologies: "MERN Stack",
    image: OnlineShopImg,
    github: "https://github.com/Salmankhan213/OnlineShopping",
    description:
      "An e-commerce platform for online shopping, featuring product listings, a shopping cart, and payment integration. Built with React JS and Firebase.",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-5" id="project">
      <h2 className="text-center fs-1 fw-bold mb-5">My Projects</h2>
      <div className="container px-5">
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 col-xl-3">
              <div
                className="bg-dark p-4 rounded-3 h-100 d-flex flex-column 
                transition-all hover-shadow"
                onMouseOver={(e) => {
                  e.currentTarget.style.transition = "transform 0.6s ease-in-out";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="img-fluid rounded-3 mb-4"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <h3 className="fs-3 fw-bold mb-3">{project.name}</h3>
                <p className="text-secondary mb-2">{project.technologies}</p>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  className="btn btn-primary mt-auto align-self-start"
                  style={{
                    background: "linear-gradient(to right, #4ade80, #3b82f6)",
                    border: "none",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;