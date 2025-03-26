import { useState } from "react";
import "./myContact.css";

export default function MyContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "frontend",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = { firstName: "", lastName: "", email: "", phone: "", message: "" };

    if (formData.firstName.length < 2) {
      newErrors.firstName = "Length 2+";
    }

    if (formData.lastName.length < 4) {
      newErrors.lastName = "Length 3+";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Example: info@gmail.com";
    }

    const phonePattern = /^380\d{9}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Example: 380XXXXXXXXX";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('firstName', formData.firstName);
      formDataToSubmit.append('lastName', formData.lastName);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('service', formData.service);
      formDataToSubmit.append('message', formData.message);

      fetch('https://formspree.io/f/mvgkqqee', {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then((response) => {
          if (response.ok) {
            alert("Message sent successfully!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              service: "frontend",
              message: "",
            });
          } else {
            alert("There was an error sending the message.");
          }
        })
        .catch((error) => {
          alert("There was an error sending the message.");
        });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="myContact flex alignCenter justifyCenter">
      <form onSubmit={handleSubmit} method="POST">
        <h1 className="orange">Let's work together</h1>
        <p>Fill out the form, and I'll get in touch with you soon! Let's discuss how to bring your vision to life!</p>
        <div className="flex formInfo alignCenter justifyCenter">
          <input type="text" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span>{errors.firstName}</span>}
          <input type="text" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div className="flex formInfo alignCenter justifyCenter">
          <input type="text" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
          <input type="text" name="phone" placeholder="Enter Phone Number" value={formData.phone} onChange={handleChange} />
          {errors.phone && <span>{errors.phone}</span>}
        </div>
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="uxuidesign">UX/UI Design</option>
          <option value="frontend">Front-end Developer</option>
          <option value="web">Web Developer</option>
          <option value="logodesign">Logo Design</option>
        </select>
        <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
        {errors.message && <span>{errors.message}</span>}
        <input type="submit" className="btn" value="Send message" />
      </form>
      <div>
        <div className="flex alignCenter myContact2">
          <div className="iconsCard">
            <img src="./icons/phone.svg" alt="Icons" />
          </div>
          <div>
            <p>Phone</p>
            <h2>+380 63 765 3883</h2>
          </div>
        </div>
        <div className="flex alignCenter myContact2">
          <div className="iconsCard">
            <img src="./icons/mail.svg" alt="Icons" />
          </div>
          <div>
            <p>Email</p>
            <h2>DenysYkr135@gmail.com</h2>
          </div>
        </div>
        <div className="flex alignCenter myContact2">
          <div className="iconsCard">
            <img src="./icons/location.svg" alt="Icons" />
          </div>
          <div>
            <p>Location</p>
            <h2>Lviv Saharova 23</h2>
          </div>
        </div>
      </div>
    </div>
  );
}