import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

export default function SignUp() {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const {setUser,setToken} = useStateContext();
  const [errors,setErrors] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    
    axiosClient.post('/signup',data)
    .then(({data}) => {
      setUser(data.user);
      setToken(data.token);
    })
    .catch(err => {
      const response = err.response;
      if(response && response.status == 422){
        setErrors(response.data.errors);
      }
    })

  }
  return (
    <div>
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h3 className="title">Sign up for free</h3>
          {
            errors && <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
          <input ref={nameRef} type='text' placeholder='Full Name'/>
          <input ref={emailRef} type='email' placeholder='Email'/>
          <input ref={passwordRef} type='password' placeholder='Password'/>
          <input ref={passwordConfirmationRef} type='password' placeholder='Password Confirmation'/>
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
