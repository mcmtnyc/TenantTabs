import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function AddApt() {

// Set Options state
    const [selectedBuilding, setSelectedBuilding] = useState([])
    const [filteredFloors, setFilteredFloors] = useState([])

// Fetch Building data
  const [buildings, setBuildings] = useState([])
  useEffect(() => {
    const fetchAllBuildings = async () => {
      try {
        const res = await axios.get('http://localhost:3001/buildings')
        setBuildings(res.data)
        console.log('fetched Buildings')
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllBuildings()
  }, [])
// Fetch Filtered Floor data
  const fetchFilteredFloors = async () => {
    try {
      let url = `http://localhost:3001/floorsinbuild/:${selectedBuilding}`
      const res = await axios.get(url)
      console.log('fetched floors data')
      setFilteredFloors(res.data)
      console.log(res.data)
    }
    catch(err){
      console.log(err)
    }
  }
// Handle select Building, Fetch Floors by BuildingID data
  const handleBuilding= (event) => {
    const selection = event.target.value
    console.log(selection)
    setSelectedBuilding(selection)
    fetchFilteredFloors()
  } 
// Handle select Floor

    return (<div>
        <form>
        {/* Add Apt by selecting Building and Floor */}
        <label>
        ADD Apt
        </label>

        {/* select Building */}
        <select name="buildings" onChange= {(e) => handleBuilding(e)}>
        <option value="" disabled selected hidden>Choose a Building</option>
          {buildings.map((buildings) =>
          <option key={buildings.id} value={buildings.id}>{buildings.name}</option>
          )}
          {/*Populate options from buildings, set value to selected Building*/}
        </select>

       <p>Selected Building: {selectedBuilding}</p> 

        {/* select Floor */}
        <select name="floors">
        <option value="" disabled selected hidden>Choose a Floor</option>
          {filteredFloors.map((floor) =>
          <option key={floor.id} value={floor.id}>{floor.number}</option>
          )}
          {/*Populate options from buildings, set value to selected Building*/}
        </select>

        <input type="number" name="rmnumber" placeholder='Input Room #' />
        <input type="submit" value="Submit"/>
        </form>
        
        </div>)
        }
        
        export default AddApt;