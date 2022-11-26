
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Login from './login';
import EditAdd from './editadd';
import MapView from './mapview';
import { useEffect, useState } from 'react';
import axios from 'axios'
import cors from 'cors'

function App() {
  // Fetch Building data
  const [buildings, setBuildings] = useState([])
  useEffect(() => {
    const fetchAllBuildings = async () => {
      try {
        const res = await axios.get('http://localhost:3001/buildings')
        setBuildings(res.data)
        console.log(res.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllBuildings()
  }, [])
  
  return (
    <div className="App">

      <Login/>

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
