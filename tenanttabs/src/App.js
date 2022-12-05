
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from './login';
import MapView from './mapview';
import { useEffect, useState } from 'react';
import axios from 'axios'
import cors from 'cors'
import AddApt from "./AddApt";
import TenantManage from "./TenantManage";
import Dashboard from "./Dashboard";

function App() {

// If Logged in, remove Login layer render, render Dashboard
const [isLoggedIn, setIsLoggedIn] = useState([true])

  return (
    <div className="App">

<Login/>
<Dashboard/>

      </div>

  )
}

export default App;
