import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Homepage = () => {
  return (
    <>
      <section className=" website-pages-look">
        <div className=" homepage overlay">
          <h1 className="title-color my-name-font"> Tracey Thomas </h1>
          <p>Fullstack Software Engineer</p>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/tracey-thomas"
                target="_blank"
                rel="noopenner noreferrer"
              >
                {" "}
                <FaLinkedin />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/Mfstat27"
                target="_blank"
                rel="noopenner noreferrer"
              >
                {" "}
                <FaGithub />{" "}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Homepage;
