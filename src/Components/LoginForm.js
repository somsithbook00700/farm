import { React, useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
