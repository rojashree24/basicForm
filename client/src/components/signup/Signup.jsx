import React, { useState } from "react";

import Signin from "../signin/Signin";



const Signup = () => {
  

  return (
    <div>
      <div className="container p-4 border rounded-3 bg-light shadow w-50 mt-3 mb-2">
        <form>
          <>
            <h1 class="text-black mb-4">Sign Up</h1>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-circle text-primary"></i>
              </span>
              <div className="form-floating">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="floatingFirstName"
                  placeholder="First Name"
                />
                <label htmlFor="floatingText">First Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="floatingLastName"
                  placeholder="Last Name"
                />
                <label htmlFor="floatingText">Last Name</label>
              </div>
            </div>
          </>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-envelope-fill text-danger"></i>
            </span>
            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
              />
              <label htmlFor="floatingEmail">Email</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-pass-fill text-warning"></i>
            </span>
            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Register
          </button>

          <a style={{cursor:"pointer"}} class="text-black mb-10 mt-10">Already have an account?</a>

          <hr className="my-4" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
