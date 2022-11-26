import './App.css';


function Login() {
  return (
    <div className="Login">


<form>
  <label>
  Property Manager Login
    <input type="text" name="username" />
    <input type="password" name="password" />
  </label>
  <input type="submit" value="Submit" />
</form>


    </div>
  );
}

export default Login;
