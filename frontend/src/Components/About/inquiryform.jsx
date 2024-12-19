import { useState } from "react";
import "../../Styles/About/inquiryform.css"

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
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          value={password}
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Form submitted successfully!</p>}
    </>
  );
};
