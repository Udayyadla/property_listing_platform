import { useState } from "react";
import "../../Styles/About/InquiryForm.css";

export const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We have received your message!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="enquiry-form-container">
      <h2 className="enquiry-form-title">Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="enquiry-form">
        <div className="enquiry-form-group">
          <label className="qf-label" htmlFor="name">Name</label>
          <input className="qf-input"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="enquiry-form-group">
          <label className="qf-label" htmlFor="email">Email</label>
          <input className="qf-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="enquiry-form-group">
          <label className="qf-label" htmlFor="message">Message</label>
          <textarea className="eq-textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="enquiry-submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};


