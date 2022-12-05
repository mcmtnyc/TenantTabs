import './Login.css';


function Login() {
  return (
    <div className="Login">


<form>
  <label>
  Property Manager Login
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password"/>
  </label>
  <input type="submit" value="Submit" />
</form>

    </div>
  );
}

export default Login;
