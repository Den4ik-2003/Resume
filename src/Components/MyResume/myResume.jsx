import { useState } from "react";
import "./myResume.css";

export default function MyResume() {
  const [html, setHtml] = useState("./images/htmlNotActive.jpg");
  const [css, setCss] = useState("./images/cssNotActive.jpg");
  const [js, setJs] = useState("./images/jsNotActive.jpg");
  const [react, setReact] = useState("./images/reactNotActive.jpg");
  const [angular, setAngular] = useState("./images/angularNotActive.jpg");
  const [bootstrap, setBootstrap] = useState("./images/bootstrapNotActive.jpg");
  const [node, setNode] = useState("./images/nodeNotActive.jpg");
  const [figma, setFigma] = useState("./images/figmaNotActive.jpg");

  const [experience, setExperience] = useState("active");
  const [certificates, setCertificates] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");

  const [experienceContent, setExperienceContent] = useState("hireMe2");
  const [certificatesContent, setCertificatesContent] = useState("none");
  const [skillsContent, setSkillsContent] = useState("none");
  const [aboutContent, setAboutContent] = useState("none");

  const experienceClick = () => {
    setExperience("active");
    setCertificates("");
    setSkills("");
    setAbout("");

    setExperienceContent("hireMe2");
    setCertificatesContent("none");
    setSkillsContent("none");
    setAboutContent("none");
  };

  const certificatesClick = () => {
    setExperience("");
    setCertificates("active");
    setSkills("");
    setAbout("");

    setExperienceContent("none");
    setCertificatesContent("content");
    setSkillsContent("none");
    setAboutContent("none");
  };

  const skillsClick = () => {
    setExperience("");
    setCertificates("");
    setSkills("active");
    setAbout("");

    setExperienceContent("none");
    setCertificatesContent("none");
    setSkillsContent("content");
    setAboutContent("none");
  };

  const aboutClick = () => {
    setExperience("");
    setCertificates("");
    setSkills("");
    setAbout("active");

    setExperienceContent("none");
    setCertificatesContent("none");
    setSkillsContent("none");
    setAboutContent("content");
  };

  return (
    <div className="myResume flex justifyBetween">
      <div className="hireMe">
        <h1>Why Hire Me?</h1>
        <p>
          Here are a few reasons why you should choose me. Below, you'll find
          the main advantages I can offer.
        </p>
        <ul>
          <li className={experience} onClick={experienceClick}>
            Experience
          </li>
          <li className={certificates} onClick={certificatesClick}>
            Certificates
          </li>
          <li className={skills} onClick={skillsClick}>
            Skills
          </li>
          <li className={about} onClick={aboutClick}>
            About Me
          </li>
        </ul>
      </div>

      <div className={experienceContent}>
      <h1 className="experienceTtile">My Experience</h1>

        <div className="flex cards alignCenter justyfyBetween">
          <div className="card2">
            <p className="cardYear">2018 - Present</p>
            <h1 className="cardExperience">
              Information systems and technologies
            </h1>
            <div className="flex alignCenter">
              <img src="./icons/circle.png" alt="Icons" />
              <h3>University</h3>
            </div>
          </div>
          <div className="card2">
            <p className="cardYear">2024 - 2025</p>
            <h1 className="cardExperience">Front-end Developer</h1>
            <div className="flex alignCenter">
              <img src="./icons/circle.png" alt="Icons" />
              <h3>It Step (Course)</h3>
            </div>
          </div>
        </div>
        <div className="flex alignCenter cards justifyCenter">
          <div className="card2">
            <p className="cardYear">2019 - 2020</p>
            <h1 className="cardExperience">UX/UI Design</h1>
            <div className="flex alignCenter">
              <img src="./icons/circle.png" alt="Icons" />
              <h3>Studied by myself</h3>
            </div>
          </div>
          <div className="card2">
            <p className="cardYear">2014 - 2018</p>
            <h1 className="cardExperience">Software Engineering</h1>
            <div className="flex alignCenter">
              <img src="./icons/circle.png" alt="Icons" />
              <h3>College</h3>
            </div>
          </div>
        </div>
      </div>

      <div className={certificatesContent}>
        <div className="certificates">
          <h1>My Sertificates</h1>
          <img className="diploma" src="./images/diploma.jpg" alt="Diploma" />
          <a href="https://fs1.itstep.org/api/v1/files/707A6q1UeS_Hbps5zJWyDaaJQ4adJ2SQ?inline">
            View my Diploma
          </a>
        </div>
      </div>

      <div className={skillsContent}>
        <div className="skills">
          <h1>My Skills</h1>
          <p>
            I have skills in HTML, CSS, JavaScript, React, Angular, Node.js, and
            Figma, enabling me to build efficient and visually appealing web
            applications with great user interfaces.
          </p>
          <div className="flex alignCenter justifyBetwenn skillsCards">
            <img
              className="skillsCard"
              src={html}
              alt="Images"
              onMouseEnter={() => setHtml("./images/htmlActive.jpg")}
              onMouseLeave={() => setHtml("./images/htmlNotActive.jpg")}
            />
            <img
              className="skillsCard"
              src={css}
              alt="Images"
              onMouseEnter={() => setCss("./images/cssActive.jpg")}
              onMouseLeave={() => setCss("./images/cssNotActive.jpg")}
            />
            <img
              className="skillsCard"
              src={js}
              alt="Images"
              onMouseEnter={() => setJs("./images/jsActive.jpg")}
              onMouseLeave={() => setJs("./images/jsNotActive.jpg")}
            />
            <img
              className="skillsCard"
              src={react}
              alt="Images"
              onMouseEnter={() => setReact("./images/reactActive.jpg")}
              onMouseLeave={() => setReact("./images/reactNotActive.jpg")}
            />
          </div>
          <div className="flex alignCenter justifyBetwenn skillsCards">
            <img
              className="skillsCard"
              src={angular}
              alt="Images"
              onMouseEnter={() => setAngular("./images/angularActive.jpg")}
              onMouseLeave={() => setAngular("./images/angularNotActive.jpg")}
            />
            <img
              className="skillsCard"
              src={bootstrap}
              alt="Images"
              onMouseEnter={() => setBootstrap("./images/bootstrapActive.jpg")}
              onMouseLeave={() =>
                setBootstrap("./images/bootstrapNotActive.jpg")
              }
            />
            <img
              className="skillsCard"
              src={node}
              alt="Images"
              onMouseEnter={() => setNode("./images/nodeActive.jpg")}
              onMouseLeave={() => setNode("./images/nodeNotActive.jpg")}
            />
            <img
              className="skillsCard"
              src={figma}
              alt="Images"
              onMouseEnter={() => setFigma("./images/figmaActive.jpg")}
              onMouseLeave={() => setFigma("./images/figmaNotActive.jpg")}
            />
          </div>
        </div>
      </div>   

      <div className={aboutContent}>
        <div className="aboutMe2">
          <h1>About Me</h1>
          <p>
            I’m Denys, a frontend developer from Ukraine, and my passion is
            creating elegant and functional user interfaces.
          </p>

          <div className="allResume flex alignCenter justifyBetween">
            <div className="resumeAboutMe">
              <div className="flex alignCenter">
                <p>Name</p>
                <h1>Denys Romanyshyn</h1>
              </div>

              <div className="flex alignCenter">
                <p>Experience</p>
                <h1>0 Year</h1>
              </div>

              <div className="flex alignCenter">
                <p>Nationality</p>
                <h1>Ukrainian</h1>
              </div>
              <div className="flex alignCenter">
                <p>Freelance</p>
                <h1>Available</h1>
              </div>
            </div>

            <div className="resumeAboutMe">
              <div className="flex alignCenter">
                <p>Phone</p>
                <h1>(+380) 63 765 3883</h1>
              </div>
              <div className="flex alignCenter">
                <p>Telegram</p>
                <h1>@den4ik_2003</h1>
              </div>
              <div className="flex alignCenter">
                <p>Email</p>
                <h1>DenysYkr135@gmail.com</h1>
              </div>
              <div className="flex alignCenter">
                <p>Languages</p>
                <h1>Ukrainian</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
