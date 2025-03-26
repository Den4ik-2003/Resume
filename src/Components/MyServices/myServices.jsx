import "./myServices.css";

export default function MyServices() {
  return (
    <div className="services">
      <div className="flex justifyCenter">
        <div className="card">
          <div className="flex alignCenter justifyCenter">
            <h1 className="number">01</h1>
            <div className="arrowContainer">
              <a href="https://www.instagram.com/__d.e.n.4.i.k__21?igsh=MXZuenVodWhsdGk5Yg%3D%3D&utm_source=qr">
              <img
                className="arrowBlack"
                src="./icons/arrowBlack.svg"
                alt="Arrow"
              />
              </a>
            </div>
          </div>
          <h1 className="cardSkill">Front-end Developer</h1>
          <p className="textCard">
            I am a frontend developer, and my goal is to create a stylish,
            user-friendly, and functional website that will impress users. I use
            modern technologies and best practices to ensure every project looks
            flawless and works smoothly. With me, your website will not only
            look beautiful but also be highly efficient!
          </p>
          <div className="lineCard"></div>
        </div>
        <div className="card">
          <div className="flex alignCenter justifyCenter">
            <h1 className="number">02</h1>
            <div className="arrowContainer">
            <a href="https://www.instagram.com/__d.e.n.4.i.k__21?igsh=MXZuenVodWhsdGk5Yg%3D%3D&utm_source=qr">
              <img
                className="arrowBlack"
                src="./icons/arrowBlack.svg"
                alt="Arrow"
              />
              </a>
            </div>
          </div>
          <h1 className="cardSkill">Logo Design</h1>
          <p className="textCard">
            I am a logo designer, and my goal is to create unique and memorable
            logos that reflect the essence of your brand. I focus on crafting
            designs that are professional and easy to remember. My logos will
            help your brand stand out from the competition and leave a lasting
            impression!
          </p>
          <div className="lineCard"></div>
        </div>
      </div>
      <div className="flex justifyCenter">
        <div className="card">
          <div className="flex alignCenter justifyCenter">
            <h1 className="number">03</h1>
            <div className="arrowContainer">
            <a href="https://www.instagram.com/__d.e.n.4.i.k__21?igsh=MXZuenVodWhsdGk5Yg%3D%3D&utm_source=qr">
              <img
                className="arrowBlack"
                src="./icons/arrowBlack.svg"
                alt="Arrow"
              />
              </a>
            </div>
          </div>
          <h1 className="cardSkill">Web Developer </h1>
          <p className="textCard">
            I am a web developer, and my goal is to create functional and
            efficient websites that perform fast and provide a great user
            experience. I use modern technologies to ensure high performance and
            optimization for every project. With my skills, your website will
            not only look great but also be reliable and easy to use!
          </p>
          <div className="lineCard"></div>
        </div>
        <div className="card">
          <div className="flex alignCenter justifyCenter">
            <h1 className="number">04</h1>
            <div className="arrowContainer">
            <a href="https://www.instagram.com/__d.e.n.4.i.k__21?igsh=MXZuenVodWhsdGk5Yg%3D%3D&utm_source=qr">
              <img
                className="arrowBlack"
                src="./icons/arrowBlack.svg"
                alt="Arrow"
              />
              </a>  
            </div>
          </div>
          <h1 className="cardSkill">UX/UI Design</h1>
          <p className="textCard">
            I am a UI/UX designer, and my mission is to create intuitive,
            aesthetically pleasing, and user-centered designs. I focus on
            crafting seamless experiences that are not only visually appealing
            but also highly functional. With my designs, your product will stand
            out while being easy and enjoyable for users to navigate!
          </p>
          <div className="lineCard"></div>
        </div>
      </div>
    </div>
  );
}