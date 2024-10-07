import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <div className="login-signup-form animated fadeInDown">
        <div className="form">
          <form onSubmit={onSubmit}>
            <h3 className="title">Login into your account</h3>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <button className="btn btn-block">Login</button>
            <p className="message">
              Not Registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
