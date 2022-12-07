
import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import Dashboard from "./Dashboard";
import Home from "./Home"
import { Route, Routes, Link} from "react-router-dom"
import axios from 'axios';
import AddApt from './AddApt';
import TenantManage from './TenantManage';
import NotFound from './NotFound';

function App() {

  return (
    <div className='App'>
      <Home/>
    </div>
  )
}

export default App;
