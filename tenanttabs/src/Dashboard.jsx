
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from './Login';
import MapView from './mapview';
import { useEffect, useState } from 'react';
import axios from 'axios'
import cors from 'cors'
import AddApt from "./AddApt";
import TenantManage from "./TenantManage";
import { Navigate } from "react-router-dom"

function Dashboard(props) {
const [selectTM, setSelectTM] = useState([false])
const [selectPO, setSelectPO] = useState([false])
// Handle picking tab menu item to coniditonally render component into infoContainer
// Need to figure out how to conditionally render
const handlePOTabClick = (event) => {
  setSelectPO([true])
  event.preventDefault()
}
const handleTMTabClick = (event) => {
  setSelectTM([true])
  event.preventDefault()
}

const [authenticated, setauthenticated] = useState(null);
useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
    setauthenticated(loggedInUser);
    }
}, []);

  return (
    <div className="Dashboard">
      <div className="menuContainer">
        <div className="profilePic">

        </div>
          <div className="navContainer">
          </div>
        </div>

      <div className="rightContainer">

        <div className="fileTabNameContainer1" onClick={handlePOTabClick}>
            <h1 className="tabName">Property Overview</h1>
        </div>

        <div className="fileTabNameContainer2" onClick={handleTMTabClick}>
          <h1 className="tabName">Tenant Manage</h1>
        </div>

        <div className="fileTabNameContainer3">
          <h1 className="tabName">Icon</h1>
        </div>

        <div className="fileTabNameContainer4">
          <h1 className="tabName">Icon</h1>
        </div>

        <div className="fileTabNameContainer5">
          <h1 className="tabName">Icon</h1>
        </div>

        <div className="fileBG">
          <div className="infoContainer">
<MapView/>

          </div>
        </div>

      </div>


      <br/>
      
      <br/>

    </div>
  )
}

export default Dashboard;
