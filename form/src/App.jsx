import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleName(name) {
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    if (!nameRegex.test(name)) {
      setNameError("Enter valid name");
      return;
    }
    setNameError("");
    setName(name);
  }

  function handleEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    setEmailError("");
    setEmail(email);
  }

  function handlePassword(password) {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      setPasswordError("Enter valid password");
      return;
    }
    setPasswordError("");
    setPassword(password);
  }

  return (
    <div className="container">
      <form action="" className="form" onSubmit={(e) => {e.preventDefault()}}>
        <div className="field">
          <label className="label name">Name</label>
        <input
          type="text"
          className="input name"
          value={name}
          onBlur={(e) => handleName(e.target.value)}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setNameError("")}
        />
        <div className="errorbox">
          <p className="error name">{nameError}</p>
        </div>
        </div>

        <div className="field">
          <label className="label email">Email</label>
        <input
          type="email"
          className="input email"
          value={email}
          onBlur={(e) => handleEmail(e.target.value)}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailError("")}
        />
        <div className="errorbox">
          <p className="error email">{emailError}</p>
        </div>
        </div>

        <div className="field">
          <label className="label password">Password</label>
        <input
          type="password"
          className="input password"
          value={password}
          onBlur={(e) => handlePassword(e.target.value)}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordError("")}
        />
        <div className="errorbox">
          <p className="error password">{passwordError}</p>
        </div>
        </div>

        <div className="btn">
          <button className="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;
