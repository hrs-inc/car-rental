import React from "react";
import Navbar from "./Navbar";
import "./Login.css";

function Login() {
  return (
    <div className="hero">
      <Navbar />
      <div className="loginbox">
        <img src="../image/login.png" className="avatar" />
        <h1>Login Here</h1>
        <form>
          <p>Email</p>
          <input
            className="mail"
            type="email"
            name=""
            placeholder="Enter Email id"
          />
          <p>Password</p>
          <input
            className="password"
            type="password"
            name=""
            placeholder="Enter Password"
          />
          <input type="submit" name="" value="Login" />
          <a href="#">Forget password?</a>
          <a href="">Dont have an account?</a>
        </form>
      </div>
    </div>
  );
}
export default Login;
