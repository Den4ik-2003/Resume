import "./myWork.css";
import React, { useState } from "react";

export default function MyWork() {
  const [index, setIndex] = useState(0);
  const [arrow, setArrow] = useState("./icons/arrowCircleWhite.png");
  const [github, setGithub] = useState("./icons/githubCircleWhite.png");
  
  const projects = [
    {
      id: "01",
      name: "Frontend Project",
      text: "GetBazar is a website built with HTML, CSS, and JavaScript, where users can order headphones. The simple interface allows users to quickly choose a model, add it to the cart, and complete the purchase.",
      skills: "Html 5, Css 3, JavaScript",
      link: "https://gadget-bazar1.netlify.app/",
      linkGitHub: "https://github.com/Den4ik-2003/Gadget-Bazar",
      image: "./images/gadgetBazar.jpg",
    },
    {
      id: "02",
      name: "Frontend Project",
      text: "Cars is a website built with React and a JSON server, where users can register and choose a car. The platform offers an easy registration process and allows users to browse and select a car model from the available list retrieved from the server.",
      skills: "Angular",
      link: "",
      linkGitHub: "https://github.com/Den4ik-2003/Car-shop",
      image: "./images/carsProject.jpg",
    },
    {
      id: "03",
      name: "Frontend Project",
      text: "Local Face is an online store built with React, where users can browse and purchase perfumes. The platform offers a wide selection of fragrances with detailed descriptions and a user-friendly interface for a smooth shopping experience.",
      skills: "React",
      link: "",
      linkGitHub: "https://github.com/Den4ik-2003/Local-Face",
      image: "./images/localFace.jpg",
    },
    {
      id: "04",
      name: "UX/UI Design Project",
      text: "My club website design features a clean and modern aesthetic, with a focus on simplicity and usability. The intuitive interface ensures a smooth and engaging experience for all users.",
      skills: "Figma",
      link: "https://www.figma.com/design/QQHdKHh8JS5v4YdCwuwBdl/%D0%9D%D1%96%D1%87%D0%BD%D1%8F-%D0%BA%D0%BB%D1%83%D0%B1?node-id=0-1&p=f&t=kFXUFGjWAWhIW2nT-0",
      linkGitHub: "",
      image: "./images/nightFly.jpg",
    },
  ];

  const projectLength = projects.length;

  const goBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goNext = () => {
    if (index < projectLength - 1) {
      setIndex(index + 1);
    }
  };

  const handleIconHover = (setIcon, image) => {
    return () => setIcon(image);
  };

  const handleIconLeave = (setIcon, image) => {
    return () => setIcon(image);
  };

  return (
    <div className="myWork flex alignCenter justifyBetween">
      <div>
        <h1 className="projectNumber">{projects[index].id}</h1>
        <h2 className="projectName">{projects[index].name}</h2>
        <p className="projectText">{projects[index].text}</p>
        <p className="projectSkills orange">{projects[index].skills}</p>
        <hr />
        <div className="flex">
          <img
            className="projectIcon"
            src={arrow}
            alt="Arrow"
            onClick={() => window.location.href = projects[index].link}
            onMouseEnter={handleIconHover(setArrow, "./icons/arrowCircleOrange.png")}
            onMouseLeave={handleIconLeave(setArrow, "./icons/arrowCircleWhite.png")}
          />
          <img
            className="projectIcon"
            src={github}
            alt="Github"
            onClick={() => window.location.href = projects[index].linkGitHub}
            onMouseEnter={handleIconHover(setGithub, "./icons/githubCircleOrange.png")}
            onMouseLeave={handleIconLeave(setGithub, "./icons/githubCircleWhite.png")}
          />
        </div>
      </div>
      <div className="flex arrows">
        <img className="projectImage" src={projects[index].image} alt="Project" />
        <div className="flex">
          <img src="./icons/arrowLeft.svg" className="left" alt="Arrow Left" onClick={goBack} />
          <img src="./icons/arrowRight.svg" className="right" alt="Arrow Right" onClick={goNext} />
        </div>
      </div>
    </div>
  );
}
