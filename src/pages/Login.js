import React from "react";

// * imgaes
import logo from "../assets/logo.png";
import pablo from "../assets/pablo-sign-in.png";

// * styles
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      {/* <header className="login-logo">
        <img src={logo} alt="Logo Icon" />
      </header> */}

      {/* <section className="login-section"> */}
      <div className="login-image">
        <div className="login-logo">
          <img src={logo} alt="Logo Icon" />
        </div>

        <div className="pablo-sign-in">
          <img src={pablo} alt="" />
        </div>
      </div>

      <form className="form-login">
        <div className="form-login-field">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <div className="input-field">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-field">
            <input type="password" placeholder="Password" />
          </div>

          <div className="forgot-password">
            <span>FORGOT PASSWORD?</span>
          </div>

          <div className="btn">
            <button>LOG IN</button>
          </div>
        </div>
      </form>
      {/* </section> */}
    </div>
  );
}
