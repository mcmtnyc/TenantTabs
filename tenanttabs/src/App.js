
import './App.css';
import Login from './Login';
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom"
import AddApt from './AddApt';
import TenantManage from './TenantManage';
import MapView from './mapview';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLogin] = useState (false)

  if (isLoggedIn === true){
    return <Dashboard/>
  }
  return (
    <Login updateLogin={setLogin}/>
  )
}

export default App;
