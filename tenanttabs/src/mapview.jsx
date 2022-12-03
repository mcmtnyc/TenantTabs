import { useEffect, useState } from 'react';
import axios from 'axios'
import cors from 'cors'
import './App.css';


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


// Handle Clicks
const handleBuildingClick = (event) => {
  const selection = event.target.value
  setSelectedBuilding(selection)
  event.preventDefault()
}

const handleFloorClick = (event) => {
  const selection = event.target.value
  setSelectedFloor(selection)
  event.preventDefault()
}

const handleApartmentClick = (event) => {
  const selection = event.target.value
  setSelectedApartment(selection)
  event.preventDefault()
}

const handleTenantClick = (event) => {
  const selection = event.target.value
  setSelectedTenant(selection)
  event.preventDefault()
}




  return (
    <div className="mapview">


<p>Building {selectedBuilding}</p>
<p>Floor {selectedFloor}</p>
<p>Aptt {selectedApartment}</p>
<p>Tenant {selectedTenant}</p>


{/* BUILDINGS*/}
<div className='largeContainer'>
Buildings... Start with buildings showing - selecting building populates floors and all tenants
{buildings.map((building) => (
    <button className='buildingContainer' key={building.id} value={building.id} onClick={handleBuildingClick}>
      {building.name}
    </button>
  ))}  
<div className='infoContainer'>
Shows info for selected building
</div>

</div>
{/* FLOORS*/}
<div className='largeContainer'>
Floors - select floor populates rooms and filters to floor's tenants
{floors.map((floor) => (
    <button className='floorContainer' key={floor.id} value={floor.id} onClick={handleFloorClick}>
      Floor {floor.number}
    </button>
  ))}  
<div className='infoContainer'>
Shows info for selected Floor
</div>
</div>

{/* APARTMENTS*/}
<div className='largeContainer'>
Apartments - select populates room info and filters to only tenant
{apartments.map((apartment) => (
    <button className='apartmentContainer' key={apartment.id} value={apartment.id} onClick={handleApartmentClick}>
      Apartment {apartment.number}
    </button>
  ))}  

<div className='infoContainer'>
Shows info for selected Apartment
</div>
</div>

{/* TENANTS*/}
<div className='largeContainer'>
Tenants
{tenants.map((tenant) => (
    <button className='tenantContainer' key={tenant.id} value={tenant.id} onClick={handleTenantClick}>
      {tenant.name}
    </button>
  ))}  
<div className='infoContainer'>
Shows info for Selected Tenant


</div>

</div>



    </div>
  );
}

export default MapView;
