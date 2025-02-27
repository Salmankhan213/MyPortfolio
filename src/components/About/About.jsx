import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-5" id="about">
        <div className="row mb-5">
          <div className="col-12">
           <h1 className="text-center fs-1  fw-bold ">About Me</h1>
          </div>
        </div>
      <div className="container px-4">
        <div className="row">
          <div className="col-md-3 mb-4 mb-md-0 offset-1">
            <img
              src="/public/Profile2.png"
              alt=""
              className="img-fluid rounded"
              style={{ width: "18rem", height: "20rem", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <p className="fs-5 mb-5">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="mb-5">
              <div className="d-flex align-items-center mb-3">
                <label className="w-25">HTML & CSS</label>
                <div className="progress flex-grow-1 bg-dark" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "83%",
                      background: "linear-gradient(to right, #4ade80, #3b82f6)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className="w-25">Bootstrap</label>
                <div className="progress flex-grow-1 bg-dark" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "83%",
                      background: "linear-gradient(to right, #4ade80, #3b82f6)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className="w-25">React JS</label>
                <div className="progress flex-grow-1 bg-dark" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "92%",
                      background: "linear-gradient(to right, #4ade80, #3b82f6)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className="w-25">Node JS</label>
                <div className="progress flex-grow-1 bg-dark" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "50%",
                      background: "linear-gradient(to right, #4ade80, #3b82f6)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className="w-25"> Express JS</label>
                <div className="progress flex-grow-1 bg-dark" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "75%",
                      background: "linear-gradient(to right, #4ade80, #3b82f6)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <label className="w-25">MongoDb</label>
                <div className="progress flex-grow-1 bg-dark" style={{ height: "10px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: "75%",
                      background: "linear-gradient(to right, #4ade80, #3b82f6)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4 mb-4 mb-md-0">
                <h3 className="display-6 fw-bold gradient-text">  1+</h3>
                <p>Years Experience</p>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h3 className="display-6 fw-bold gradient-text">5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="col-md-4">
                <h3 className="display-6 fw-bold gradient-text">10+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;