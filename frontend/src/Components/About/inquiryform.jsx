import { useState } from "react";
import "../../Styles/About/inquiryform.css";

export const InquiryForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !description) {
      setError("All fields are mandatory!");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
    }
  };

  return (
    <>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          value={email}
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <textarea
          className="textarea-field"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="submit-btn" type="submit">Submit</button>
      </form>

      {error && <p className="message error">{error}</p>}
      {success && <p className="message success">Form submitted successfully!</p>}
    </>
  );
};