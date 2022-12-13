import axios from 'axios';
import React, { useState } from 'react';

import './Login.css';
import logo from './assets/images/logo.png'
import PropTypes from 'prop-types'

const Login = ({updateLogin}) =>  {
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // Register on send
  const register = (e) => {
    axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }) .then((res) => {
      console.log(res)
      console.log("reg user")
      alert("Registered!")
    })
  }
  const login = (e) => {
    e.preventDefault()
    console.log(username)
    console.log(password)
    axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }) .then((res) => {
      console.log(res.data)
      if (res.data === "Success"){
        updateLogin(true)
      }
      else {
        updateLogin(false)
      }
    })
  }
  
  return (
    <div className="Login">
      <img src={logo} className="logo"></img>
<div className='loginContainer'>

<form>
  <label>
  Property Manager Register
    <input type="text" name="username" placeholder="Username" onChange={e => setUsernameReg(e.target.value)}/>
    <input type="password" name="password" placeholder="Password" onChange={e => setPasswordReg(e.target.value)}/>
  </label>
  <input type="submit" value="Submit" onClick={register} />
</form>
<form>
  <label>
  Property Manager Login
    <input type="text" name="username" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
    <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
  </label>
  <input type="submit" value="Submit" onClick={login} />
</form>
    </div>
  </div>
  );
}
export default Login;

Login.propTypes = {
  updateLogin: PropTypes.func.isRequired
}