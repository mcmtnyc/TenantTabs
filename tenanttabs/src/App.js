
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from './login';
import MapView from './mapview';
import { useEffect, useState } from 'react';
import axios from 'axios'
import cors from 'cors'
import AddApt from "./AddApt";
import TenantManage from "./TenantManage";

function App() {
  
  return (
    <div className="App">

      <Login/>
      <AddApt/>
      <TenantManage/>
      <br/>
      <MapView/>
      <br/>

    </div>
  )
}

export default App;
