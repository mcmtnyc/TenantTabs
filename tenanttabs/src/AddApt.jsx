import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function AddApt() {

// Set Options state
  const [buildings, setBuildings] = useState([])
  const [selectedBuilding, setSelectedBuilding] = useState([])
  const [filteredFloors, setFilteredFloors] = useState([])
  const [selectedFloor, setSelectedFloor] = useState([])
  const [disableInput, setDisableInput] = useState([true])
  const [disableSubmit, setDisableSubmit] = useState([true])
  const [aptNumber, setAptNumber] = useState([])

// Fetch Building data
  useEffect(() => {
    const fetchAllBuildings = async () => {
      try {
        const res = await axios.get('http://localhost:3001/buildings')
        setBuildings(await res.data)
        console.log('fetched Buildings')
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllBuildings()
  }, [])

// Handle select Building, Fetch Floors by BuildingID data
  const handleBuilding= (event) => {
    const selection = event.target.value
    setSelectedBuilding(selection)
    event.preventDefault()
  } 

// Fetch Filtered Floor data
useEffect(() => {
  const fetchFilteredFloors = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/floorsinbuild/${selectedBuilding}`)
      setFilteredFloors(await res.data)
      console.log(res.data)
    }
    catch(err){
      console.log(err)
    }
  }
  fetchFilteredFloors()
}, [selectedBuilding])

// Handle select Floor
const handleFloor= (event) => {
  const selection = event.target.value
  setSelectedFloor(selection)
  setDisableInput(false)
  event.preventDefault()
}

// Check that Floor is selected and aptNumber is unput
const validate = () => {
  return selectedFloor.length & aptNumber.length
}

// Enable submit
useEffect(() => {
  const disableSubmit = validate()
  setDisableSubmit(disableSubmit)
  console.log({selectedFloor})
  console.log({selectedBuilding})
}, [selectedFloor, aptNumber])

// Handle submit
const handleSubmit= async (event) => {
  console.log({aptNumber})
  event.preventDefault()
  try {
    let url =`http://localhost:3001/newapt/${aptNumber}/${selectedBuilding}/${selectedFloor}`
    await axios.post(url)
    console.log(url)
    alert('You created Apt.')
  }
  catch (err) {
    console.log(err)
  }
}


// Create Apt

    return (<div>
        <form onSubmit={handleSubmit}>
        {/* Add Apt by selecting Building and Floor */}
        <label>
        Add an Apt
        </label>

        {/* select Building */}
        <select name="buildings" onChange= {(e) => handleBuilding(e)}>
        <option value="" disabled selected hidden>Choose a Building</option>
          {buildings.map((buildings) =>
          <option key={buildings.id} value={buildings.id}>{buildings.name}</option>
          )}
          {/*Populate options from buildings, set value to selected Building*/}
        </select>

        {/* select Floor */}
        <select name="floors" onChange= {(e) => handleFloor(e)}>
        <option value="" disabled selected hidden>Choose a Floor</option>
          {filteredFloors.map((floor) =>
          <option key={floor.id} value={floor.id}>Floor {floor.number}</option>
          )}
          {/*Populate options from buildings, set value to selected Building*/}
        </select>

        <input type="text" name="apartment" disabled={disableInput} placeholder='Input Apt' value={aptNumber} onChange= {(e) => setAptNumber(e.target.value)}/>
        <input type="submit" disabled={!disableSubmit} onSubmit={handleSubmit}/>
        </form>
        
        </div>)
        }
        
        export default AddApt;