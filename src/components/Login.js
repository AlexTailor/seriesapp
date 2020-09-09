import React, { useState, useContext } from "react";
import axios from "axios";
import { DetailContext } from "../contexts/DetailProvider";
import { useCookies } from "react-cookie";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState([]);
  // const { token, setToken } = useContext(DetailContext);
  const [cookies, setCookie] = useCookies(["token"]);

  const loggedInName =
    cookies.token === "" ? "Sign in!" : "You are logged in as " + userName;

  const getUserName = (e) => {
    setUserName(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const postSingInDetailsDetails = (event) => {
    axios
      .post("http://localhost:8080/signin", {
        username: userName,
        password: password,
      })
      .then((data) => {
        console.log(data.data.token);
        setCookie("token", data.data.token, { path: "/" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <span>{loggedInName}</span>
      <form>
        <input type="text" onChange={getUserName} placeholder="Name" />
        <br />
        <input
          type="text"
          name="name"
          onChange={getPassword}
          placeholder="Password"
        />
        <br />
        <input
          type="button"
          value="Submit"
          onClick={postSingInDetailsDetails}
        />
      </form>
    </div>
  );
}
