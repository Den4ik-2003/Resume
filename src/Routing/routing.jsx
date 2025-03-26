import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./routing.css";
import Header from "../Components/Header/header"
import Home from "../Pages/Home/home";
import Services from "../Pages/Services/services";
import Resume from "../Pages/Resume/resume";
import Work from "../Pages/Work/work";
import Contact from "../Pages/Contact/contact";
import NotFound from "../Pages/NotFound/notfound";

function Routing() {
  return (
    <div className="routing">
      <Router>   
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
