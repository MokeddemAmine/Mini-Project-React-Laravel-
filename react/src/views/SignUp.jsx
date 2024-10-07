import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h3 className="title">Sign up for free</h3>
          <input type='text' placeholder='Full Name'/>
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <input type='password' placeholder='Password Confirmation'/>
          <button className="btn btn-block">Sign UP</button>
          <p className="message">
            Already Registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  )
}
