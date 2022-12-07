import './App.css';
import MapView from "./mapview"
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import AddApt from './AddApt';
import tenantsImg from './assets/images/users-alt.png'
import envelopeImg from './assets/images/envelope.png'
import chartIng from './assets/images/chart-histogram.png'
import TenantManage from './TenantManage';
import userImg from './assets/images/user.png'
import logo from './assets/images/logo.png'

function Dashboard(props) {
const [selectTM, setSelectTM] = useState(false)
const [selectPO, setSelectPO] = useState(false)
const [selectAA, setSelectAA] = useState(false)
// Handle picking tab menu item to coniditonally render component into infoContainer
// Need to figure out how to conditionally render
const handlePOTabClick = (event) => {
  setSelectPO(true)
  setSelectTM(false)
  setSelectAA(false)
  event.preventDefault()
}
const handleTMTabClick = (event) => {
  setSelectTM(true)
  setSelectPO(false)
  setSelectAA(false)
  event.preventDefault()
}
const handleAddApt = (event) => {
  setSelectTM(false)
  setSelectPO(false)
  setSelectAA(true)
  event.preventDefault()
}
let component
if (selectTM === true){
  component = <TenantManage/>
}
else if (selectPO === true){
  component = <MapView/>
}
else if (selectAA === true){
  component = <AddApt/>
}
  return (
    <div className="Dashboard">
      {component}
      <div className="menuContainer">
        <center>
      <img src={logo} alt="logo" className='menuLogo'/>
        <div className="profilePic">
        <img src={userImg} alt="userIcon" className='userIcon'/>
        </div>
        <div className="navContainer">
          <h3>UserName</h3>
          <h4>Property Manager</h4>
            <p>Tasks</p>
            <p>Work Orders</p>
            <p>Calendars</p>
            <p>Financials</p>
            <p>Staff Time Sheets</p>
        </div>
        <button>Log Out</button>
        </center>
        </div>

      <div className="rightContainer">

        <div className="fileTabNameContainer1" >
        <h1 className="tabName" onClick={handlePOTabClick}>Properties View</h1>
        </div>

        <div className="fileTabNameContainer2" onClick={handleAddApt}>
        <h1 className="tabName">Add an Apt</h1>
        </div>

        <div className="fileTabNameContainer3" onClick={handleTMTabClick}>
          <img src={tenantsImg} alt="tenants" className='icon'/>
        </div>

        <div className="fileTabNameContainer4">
        <img src={envelopeImg} alt="mail" className='icon'/>
        </div>

        <div className="fileTabNameContainer5">
        <img src={chartIng} alt="finances" className='icon'/>
        </div>

        <div className="fileBG">
          <div className="infoContainer">

          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;
