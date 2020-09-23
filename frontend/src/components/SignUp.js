import React from "react";
import "./SignUp.css";
import Navbar from "./Navbar";

export default function SignUp() {
  return (
    <div className="main">
      <Navbar />
      <div className="signup">
        <h1> Sign Up</h1>
        <form>
          <p>Name</p>
          <input
            className="mail"
            type="text"
            name=""
            placeholder=" Full name"
          />
          <p>Phone</p>
          <input
            className="mail"
            type="number"
            name=""
            placeholder=" Phone number"
          />
          <p>Email</p>
          <input
            className="mail"
            type="email"
            name=""
            placeholder="sherlock@gmail.com"
          />
          <p>Password</p>
          <input
            className="password"
            type="password"
            name=""
            placeholder="Enter Password"
          />
          <p>Confirm Password</p>
          <input
            className="password"
            type="password"
            name=""
            placeholder="Re-enter Password"
          />
          <input
            type="submit"
            className="btn btn-primary signup-btn"
            value="Signup"
          />
        </form>
      </div>
    </div>
  );
}
