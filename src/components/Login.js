import React, { useState, useRef } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [errorMessage, setErrorMessage] = useState("");
  const usern = useRef(null);
  const passw = useRef(null);

  const loggedInName =
    cookies.token === undefined
      ? "Sign in!"
      : "You are logged in as " + userName;

  const postSingInDetailsDetails = (event) => {
    setErrorMessage("");
    setUserName(usern.current.value);
    axios
      .post("http://localhost:8080/signin", {
        username: usern.current.value,
        password: passw.current.value,
      })
      .then((data) => {
        setCookie("token", data.data.token, { path: "/" });
      })
      .catch((error) => {
        setErrorMessage("Wrong username or password!");
        console.error("Error:", error);
      });
  };

  const logout = () => {
    setErrorMessage("");
    removeCookie("token");
    setUserName("");
  };

  return (
    <div className="login-field">
      <span>{loggedInName}</span>
      <form>
        <input type="text" ref={usern} />
        {errorMessage}
        <br />
        <input type="password" ref={passw} />
        <br />
        <input type="reset" value="Submit" onClick={postSingInDetailsDetails} />
        <input type="reset" value="Logout" onClick={logout} />
      </form>
    </div>
  );
}
