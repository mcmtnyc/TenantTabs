import { useEffect, useState } from 'react';
import axios from 'axios'
import './MapView.css';


function MapView() {
const [buildings, setBuildings] = useState([])
const [floors, setFloors] = useState([])
const [apartments, setApartments] = useState([])
const [tenants, setTenants] = useState([])
const [selectedTenant, setSelectedTenant] = useState([])
const [selectedApartment, setSelectedApartment] = useState([])
const [selectedFloor, setSelectedFloor] = useState([])
const [selectedBuilding, setSelectedBuilding] = useState([])


  // Fetch Building data
  useEffect(() => {

    const fetchAllBuildings = async () => {
      try {
        const res = await axios.get('http://localhost:3001/buildings')
        setBuildings(res.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllBuildings()
  }, [])

  // Fetch Floor data
  useEffect(() => {
    const fetchAllFloors = async () => {
      try {
        const res = await axios.get('http://localhost:3001/floors')
        setFloors(res.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllFloors()
  }, [])

  // Fetch Apartment data
  useEffect(() => {
    const fetchAllApartments = async () => {
      try {
        const res = await axios.get('http://localhost:3001/apartments')
        setApartments(res.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllApartments()
  }, [])

  // Fetch Tenant data
  useEffect(() => {
    const fetchAllTenants = async () => {
      try {
        const res = await axios.get('http://localhost:3001/tenants')
        setTenants(res.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllTenants()
  }, [])

  // Fetch Filtered Floor data
  useEffect(() => {
    const fetchFilteredFloors = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/floorsinbuild/${selectedBuilding}`)
        console.log(res)
        setFloors(await res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchFilteredFloors()
  }, [selectedBuilding])

  // Fetch Filtered Apt data
  useEffect(() => {
    const fetchFilteredApartments = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/aptsonfloor/${selectedFloor}`)
        console.log(res)
        setApartments(await res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchFilteredApartments()
  }, [selectedFloor])

  // Fetch Filtered Tenant data
  useEffect(() => {
    const fetchFilteredTenants = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/tenantsinapt/${selectedApartment}`)
        console.log('Just returned from tenantsinapt')
        console.log(res)
        setTenants(await res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchFilteredTenants()
  }, [selectedApartment])

// Handle Clicks
const handleBuildingClick = (event) => {
  event.preventDefault()
  const selection = event.target.value
  setSelectedBuilding(selection)
  setApartments([])
  setSelectedApartment([])
  setTenants([])
  setSelectedTenant([])
  
}

const handleBuildingReset = (e) => {
  e.preventDefault()
  setSelectedBuilding([])       // reset selectedBuilding to blank array - We are not clearing the list of buildings because we still want to display it
  setFloors([])                 // clear the list of floors
  setSelectedFloor([])          // reset the selected floor to blank array since the list of floors is empty
  setApartments([])             // clear the list of apartments
  setSelectedApartment([])      // reset the selected apartment since the list of apartments is empty
  setTenants([])                // clear the list of tenants
  setSelectedTenant([])         // reset the selected tenant since the list of tenants is empty
}

const handleFloorClick = (event) => {
  event.preventDefault()
  const selection = event.target.value
  setSelectedFloor(selection)
  setTenants([])                // clear the list of tenants
  setSelectedTenant([])  
}

const handleFloorReset = (event) => {
  event.preventDefault()
  const selection = event.target.value
  setSelectedFloor([])
  setApartments([])
  setSelectedApartment([])
  setTenants([])
  setSelectedTenant([])
}

const handleApartmentClick = (event) => {
  event.preventDefault()
  const selection = event.target.value
  setSelectedApartment(selection)
  
}

const handleApartmentReset = (event) => {
  event.preventDefault()
  const selection = event.target.value
  setSelectedApartment([])
  setTenants([])
  setSelectedTenant([])
}


const handleTenantClick = (event) => {
  event.preventDefault()
  const selection = event.target.value
  setSelectedTenant(selection)
}

const handleTenantReset = (event) => {
  event.preventDefault()
  const selection = event.target.value
  setSelectedTenant([])
}

var selectedBuildingInfo ={}
{/* Retrieve selected building*/}
if (selectedBuilding.length != 0){
  for (let index = 0, len = buildings.length; index < len; ++index){
    if (buildings[index].id == selectedBuilding){
      selectedBuildingInfo  = buildings[index]
      break;
    }
  }
}

var selectedFloorInfo ={}
{/* Retrieve selected floor*/}
if (selectedFloor.length != 0){
  for (let index = 0, len = floors.length; index < len; ++index){
    if (floors[index].id == selectedBuilding){
      selectedFloorInfo  = floors[index]
      break;
    }
  }
}

var selectedAptInfo ={}
{/* Retrieve selected floor*/}
if (selectedApartment.length != 0){
  for (let index = 0, len = apartments.length; index < len; ++index){
    if (apartments[index].id == selectedApartment){
      selectedAptInfo  = apartments[index]
      break;
    }
  }
}

var selectedTenantInfo ={}
{/* Retrieve selected floor*/}
if (selectedTenant.length != 0){
  for (let index = 0, len = tenants.length; index < len; ++index){
    if (tenants[index].id == selectedTenant){
      selectedTenantInfo  = tenants[index]
      break;
    }
  }
}

  return (
    <div className="infoContainer">
<div className='directionsContainer'>
  <p>Select Boxes to filter info display~</p>
  <button className='filterOptions'>Filter Options</button>
</div>
<div className="flexContainer">
{/* BUILDINGS*/}
<div className='largeContainer'>
  <div className='infoBox'>
<p> Selected BuildingID {selectedBuilding}</p>
<p>Name: {selectedBuildingInfo.name}</p>
<p>SqFt: {selectedBuildingInfo.sqft}</p>
<p>&nbsp;</p>
<center><button className='customizeView'>Customize View</button></center>
</div>
<center>
{buildings.map((building) => {
    if((selectedBuilding == building.id)){
      // When a building has been selected, we will have building.id in selectedBuild in one of the records
      // We will only render the button for the selected building id
      // Note the button attached to this single button to be display is to reset the selection to none
      return (
        <button className='buildingContainer' key={building.id} value={building.id} onClick={handleBuildingReset}>
          {building.name} | SQFT {building.sqft} | BuildingID {building.id}
        </button>
      )
    } else if (selectedBuilding.length == 0) {
      // Display each button when there is no selected building
      return(
        <button className='buildingContainer' key={building.id} value={building.id} onClick={handleBuildingClick}>
          {building.name} | SQFT {building.sqft} | BuildingID {building.id}
        </button>        
      )
    }
    }
  )} 
</center>
</div>

{/* FLOORS*/}
<div className='largeContainer'>
<div className='infoBox'>
<p> Selected FloorID {selectedFloor}</p>
<p>Number: {selectedFloorInfo.number}</p>
<p>Has Gym: {selectedFloorInfo.hasGym}</p>
<p> &nbsp;</p>
<center><button className='customizeView'>Customize View</button></center>
</div>
<center>
{floors.map((floor) => {
    if((selectedFloor == floor.id)){
      return(
        <button className='floorContainer' key={floor.id} value={floor.id} onClick={handleFloorReset}>
          Floor {floor.number} | hasGym = {floor.hasGym} | FloorID {floor.id}
        </button>
      )
    } else if (selectedFloor.length == 0) {
      return(
        <button className='floorContainer' key={floor.id} value={floor.id} onClick={handleFloorClick}>
          Floor {floor.number} | hasGym = {floor.hasGym} | FloorID {floor.id}
        </button>
      )
    }  
}
)} 
</center>
</div>

{/* APARTMENTS*/}
<div className='largeContainer'>
<div className='infoBox'>
<p> Selected AptID {selectedApartment}</p>
<p>Number: {selectedAptInfo.number}</p>
<p> &nbsp;</p>
<p> &nbsp;</p>
<center><button className='customizeView'>Customize View</button></center>
</div>
<center>
{apartments.map((apartment) => {
    if((selectedApartment == apartment.id)){
      return(
        <button className='apartmentContainer' key={apartment.id} value={apartment.id} onClick={handleApartmentReset}>
          Apartment {apartment.number} | ApartmentID {apartment.id}
        </button>
      )
    } else if (selectedApartment.length == 0) {
      return(
        <button className='apartmentContainer' key={apartment.id} value={apartment.id} onClick={handleApartmentClick}>
          Apartment {apartment.number} | ApartmentID {apartment.id}
        </button>
      )      
    }
}

  )}  
  </center>
</div>

{/* TENANTS*/}
<div className='largeContainer'>
<div className='infoBox'>
<p> Selected TenantID {selectedTenant}</p>
<p>Tenant Name: {selectedTenantInfo.name}</p>
<p> &nbsp;</p>
<p> &nbsp;</p>
<center><button className='customizeView'>Customize View</button></center>
</div>
<center>
{tenants.map((tenant) => {
    if((selectedTenant == tenant.id)){
      return(
        <button className='tenantContainer' key={tenant.id} value={tenant.id} onClick={handleTenantReset}>
          {tenant.name} | TenantID {tenant.id}
        </button>
      )
    } else if (selectedTenant.length == 0) {
      return(
        <button className='tenantContainer' key={tenant.id} value={tenant.id} onClick={handleTenantClick}>
        {tenant.name} | TenantID {tenant.id}
      </button>
      )      
    }
}

  )}  
  </center>
</div>


</div>
    </div>
  );
}

export default MapView;