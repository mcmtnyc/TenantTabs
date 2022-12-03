
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from './login';
import EditAdd from './editadd';
import MapView from './mapview';
import { useEffect, useState } from 'react';
import axios from 'axios'
import cors from 'cors'
import AddApt from "./AddApt";

function App() {
  
  return (
    <div className="App">

      <Login/>
      <AddApt/>
      <br/>
      <br/>
      <EditAdd/>
      <br/>
      <br/>
      <MapView/>
      <br/>
      <br/>

    </div>
  );
}

export default App;
