import { useState } from "react";
import "./mainScreen.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function MainScreen() {
  const [github, setGithub] = useState("./icons/githubOrange.png");
  const [youtube, setYoutube] = useState("./icons/youtubeOrange.png");
  const [linkedin, setLinkedin] = useState("./icons/linkedinOrange.png");
  const [twiter, setTwiter] = useState("./icons/twiterOrange.png");
  const [year, setYear] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [lines, setLines] = useState(0);

  const handleMouseEnterGithub = () => {
    setGithub("./icons/githubBlack.png");
  };
  const handleMouseLeaveGithub = () => {
    setGithub("./icons/githubOrange.png");
  };

  const handleMouseEnterYoutube = () => {
    setYoutube("./icons/youtubeBlack.png");
  };
  const handleMouseLeaveYoutube = () => {
    setYoutube("./icons/youtubeOrange.png");
  };

  const handleMouseEnterLinkedin = () => {
    setLinkedin("./icons/linkedinBlack.png");
  };
  const handleMouseLeaveLinkedin = () => {
    setLinkedin("./icons/linkedinOrange.png");
  };

  const handleMouseEnterTwiter = () => {
    setTwiter("./icons/twiterBlack.png");
  };
  const handleMouseLeaveTwiter = () => {
    setTwiter("./icons/twiterOrange.png");
  };

  useEffect(() => {
    const targetValueYear = 1;
    const durationYear = 5000;
    const incrementTimeYear = 5;
    const incrementValueYear = Math.ceil(
      targetValueYear / (durationYear / incrementTimeYear)
    );

    const targetValueProjects = 20;
    const durationProjects = 5000;
    const incrementTimeProjects = 50;
    const incrementValueProjects = Math.ceil(
      targetValueProjects / (durationProjects / incrementTimeProjects)
    );

    const targetValueTechnologies = 10;
    const durationTechnologies = 5000;
    const incrementTimeTechnologies = 50;
    const incrementValueTechnologies = Math.ceil(
      targetValueTechnologies /
        (durationTechnologies / incrementTimeTechnologies)
    );

    const targetValueLines = 50000;
    const durationLines = 3000;
    const incrementTimeLines = 50;
    const incrementValueLines = Math.ceil(
      targetValueLines / (durationLines / incrementTimeLines)
    );

    const interval = setInterval(() => {
      setYear((prevYear) => {
        const newValue = Math.min(
          prevYear + incrementValueYear,
          targetValueYear
        );
        if (newValue === targetValueYear) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, incrementTimeYear);
    const intervalProjects = setInterval(() => {
      setProjects((prevProjects) => {
        const newValue = Math.min(
          prevProjects + incrementValueProjects,
          targetValueProjects
        );
        if (newValue === targetValueProjects) {
          clearInterval(intervalProjects);
        }
        return newValue;
      });
    }, incrementTimeProjects);
    const intervalTechnologies = setInterval(() => {
      setTechnologies((prevTechnologies) => {
        const newValue = Math.min(
          prevTechnologies + incrementValueTechnologies,
          targetValueTechnologies
        );
        if (newValue === targetValueTechnologies) {
          clearInterval(intervalTechnologies);
        }
        return newValue;
      });
    }, incrementTimeTechnologies);
    const intervalLines = setInterval(() => {
      setLines((prevLines) => {
        const newValue = Math.min(
          prevLines + incrementValueLines,
          targetValueLines
        );
        if (newValue === targetValueLines) {
          clearInterval(intervalLines);
        }
        return newValue;
      });
    }, incrementTimeLines);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="firstScreen db-none">
      <div className="mainScreen flex alignCenter justifyBetween">
        <div>
          <h3>Front-end Developer</h3>
          <h1>
            Hello I'm <br /> <span>Denys Romanyshyn</span>
          </h1>
          <p>
            I am a frontend developer who creates modern and user-friendly
            websites. My goal is to make your site attractive, functional, and
            easy to use. I will help you build a web resource that meets all
            your needs. Contact me, and together we will make your project
            successful!
          </p>
          <div className="flex alignCenter iconsNetwork">
            <NavLink to="/contact">
              <input type="button" className="btn2" value="CONTACT ME" />
            </NavLink>
            <div className="flex alignCenter">
              <a href="https://github.com/Den4ik-2003">
              <img
                src={github}
                alt="Github"
                className="github"
                onMouseEnter={handleMouseEnterGithub}
                onMouseLeave={handleMouseLeaveGithub}
              />
            </a>
            <a href="https://www.linkedin.com/in/%D0%B4%D0%B5%D0%BD%D0%B8%D1%81-%D1%80%D0%BE%D0%BC%D0%B0%D0%BD%D0%B8%D1%88%D0%B8%D0%BD-029460257/">
              <img
                src={linkedin}
                alt="Linkedin"
                className="linkedin"
                onMouseEnter={handleMouseEnterLinkedin}
                onMouseLeave={handleMouseLeaveLinkedin}
              />
            </a>
            <a href="https://www.youtube.com/?app=desktop&gl=UA&hl=uk">
              <img
                src={youtube}
                alt="Youtube"
                className="youtube"
                onMouseEnter={handleMouseEnterYoutube}
                onMouseLeave={handleMouseLeaveYoutube}
              />
            </a>
            <a href="https://x.com/">
              <img
                src={twiter}
                alt="Twiter"
                className="twiter"
                onMouseEnter={handleMouseEnterTwiter}
                onMouseLeave={handleMouseLeaveTwiter}
              />
            </a>
            </div>
          </div>
        </div>
        <img
          className="programistPhoto"
          src="./images/Programist.png"
          alt="Circle"  
        />
      </div>
      <div className="flex alignCenter justifyBetween information">
        <div className="flex alignCenter info">
          <h1>{year}</h1>
          <p>
            Year of <br /> experience
          </p>
        </div>
        <div className="flex alignCenter info">
          <h1>{projects}</h1>
          <p>
            Projects <br /> completed
          </p>
        </div>
        <div className="flex alignCenter info">
          <h1>{technologies}</h1>
          <p>
            Technologies <br /> mastered
          </p>
        </div>
        <div className="flex alignCenter info">
          <div className="flex lines">
            <h1>{lines}</h1>
            <h1>+</h1>
          </div>
          <p>
            Lines of <br /> code
          </p>
        </div>
      </div>
    </div>
  );
}
