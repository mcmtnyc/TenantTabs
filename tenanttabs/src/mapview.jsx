import { useEffect, useState } from 'react';
import axios from 'axios'
import cors from 'cors'
import './App.css';


function MapView() {

// Fetch Tenant data
  const [tenants, setTenants] = useState([])
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
// Fetch Floors data
const [floors, setFloors] = useState([])
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
const [apartments, setApartments] = useState([])
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

//Add logic for onClick filter to each div
//onClick building div => filter floors, show building info in building info box
//onClick floor div => filter Apartments, show floor info in floor info box
//onClick apartment div => filter tenant and show tenant info in tenant info box


  return (
    <div className="mapview">
{/* BUILDINGS*/}
<div className='largeContainer'>
Buildings... Start with buildings showing - selecting building populates floors and all tenants
{buildings.map((building) => (
    <div className='buildingContainer' key={building.id}>
      {building.name}
    </div>
  ))}  
<div className='infoContainer'>
Shows info for selected building
</div>

</div>

{/* FLOORS*/}
<div className='largeContainer'>
Floors - select floor populates rooms and filters to floor's tenants
{floors.map((floor) => (
    <div className='floorContainer' key={floor.id}>
      Floor {floor.number}
    </div>
  ))}  
<div className='infoContainer'>
Shows info for selected Floor
</div>
</div>

{/* APARTMENTS*/}
<div className='largeContainer'>
Apartments - select populates room info and filters to only tenant
{apartments.map((apartment) => (
    <div className='apartmentContainer' key={apartment.id}>
      Apartment {apartment.number}
    </div>
  ))}  

<div className='infoContainer'>
Shows info for selected Apartment
</div>
</div>

{/* TENANTS*/}
<div className='largeContainer'>
Tenants
{tenants.map((tenant) => (
    <div className='tenantContainer' key={tenant.id}>
      {tenant.name}
    </div>
  ))}  
<div className='infoContainer'>
Shows info for Selected Tenant


</div>

</div>



    </div>
  );
}

export default MapView;
