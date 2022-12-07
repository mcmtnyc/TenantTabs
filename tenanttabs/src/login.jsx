import axios from 'axios';
import { useState } from 'react';
import './Login.css';

function Login() {
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState ()
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
        setAuthenticated(true)
      }
    })
  }
  
  //Handle typing
  const handleUreg= (event) => {
    const selection = event.target.value
    setUsernameReg(selection)
    event.preventDefault()
  } 
  const handlePreg= (event) => {
    const selection = event.target.value
    setPasswordReg(selection)
    event.preventDefault()
  } 
  const handleUsername= (event) => {
    const selection = event.target.value
    setUsername(selection)
    event.preventDefault()
  } 
  const handlePassword= (event) => {
    const selection = event.target.value
    setPassword(selection)
    event.preventDefault()
  } 

  return (
    <div className="Login">
<form>
  <label>
  Property Manager Register
    <input type="text" name="username" placeholder="Username" onChange={handleUreg}/>
    <input type="password" name="password" placeholder="Password" onChange={handlePreg}/>
  </label>
  <input type="submit" value="Submit" onClick={register} />
</form>
<form>
  <label>
  Property Manager Login
    <input type="text" name="username" placeholder="Username" onChange={handleUsername}/>
    <input type="password" name="password" placeholder="Password" onChange={handlePassword}/>
  </label>
  <input type="submit" value="Submit" onClick={login} />
</form>
    </div>
  );
}

export default Login;
