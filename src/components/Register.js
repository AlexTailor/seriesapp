import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);

  const getUserName = (e) => {
    setUserName(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const postUserDetails = () => {
    axios.post("http://localhost:8080/register", {
      username: userName,
      password: password,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>hello</h1>
      <h1>hello</h1>
      <form>
        <label>Name:</label>
        <br />
        <input type="text" onChange={getUserName} />
        <br />
        <label>
          Password:
          <br />
        </label>
        <input type="password" name="name" onChange={getPassword} />
        <br />
        <input type="submit" value="Submit" onClick={postUserDetails} />
      </form>
    </div>
  );
}