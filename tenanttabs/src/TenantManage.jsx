import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function TenantManage() {

    const [tenants, setTenants] = useState([])
    const [selectedTenant, setSelectedTenant] = useState([])
    const [apartments, setApartments] = useState([])
    const [selectedApartment, setSelectedApartment] = useState([])
    const [disableSubmit, setDisableSubmit] = useState([true])

// Fetch Tenant data
useEffect(() => {
    const fetchAllTenants = async () => {
      try {
        const res = await axios.get('http://localhost:3001/tenants')
        setTenants(await res.data)
        console.log('fetched tenants')
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllTenants()
  }, [])
// Fetch Apartment data
  useEffect(() => {
    const fetchAllApartments = async () => {
      try {
        const res = await axios.get('http://localhost:3001/apartments')
        setApartments(await res.data)
        console.log('fetched apartments')
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllApartments()
  }, [])

// Handle Selections
  const handleTenant= (event) => {
    const selection = event.target.value
    setSelectedTenant(selection)
    event.preventDefault()
  } 
  const handleApartment= (event) => {
    const selection = event.target.value
    setSelectedApartment(selection)
    event.preventDefault()
  } 

// Check that Tenant and Apartment are
const validate = () => {
    return selectedTenant.length & selectedApartment.length
  }
  
// Enable submit
  useEffect(() => {
    const disableSubmit = validate()
    setDisableSubmit(disableSubmit)
    console.log({selectedTenant})
    console.log({selectedApartment})
  }, [selectedTenant, selectedApartment])

//Handle Submit
const handleSubmit= async (event) => {
    event.preventDefault()
    try {
      let url =`http://localhost:3001/assigntenantapt/${selectedTenant}/${selectedApartment}`
      await axios.post(url)
      console.log(url)
      alert('You assigned a Tenant to an Apt.')
    }
    catch (err) {
      console.log(err)
    }
  }


  return (<div>
    <form onSubmit={handleSubmit}>
    {/* Add Apt by selecting Building and Floor */}
    <label>
    Assign Tenants to Apartments
    </label>

    {/* select Building */}
    <select name="tenants" onChange= {(e) => handleTenant(e)}>
    <option value="" disabled selected hidden>Choose a Tenant</option>
      {tenants.map((tenant) =>
      <option key={tenant.id} value={tenant.id}>{tenant.name}</option>
      )}
      {/*Populate options from buildings, set value to selected Building*/}
    </select>

    {/* select Floor */}
    <select name="apartments" onChange= {(e) => handleApartment(e)}>
    <option value="" disabled selected hidden>Choose an Apartment</option>
      {apartments.map((apartment) =>
      <option key={apartment.id} value={apartment.id}>Apt {apartment._apartmentNumber} | Floor {apartment.number} | {apartment.name}</option>
      )}
      {/*Populate options from buildings, set value to selected Building*/}
    </select>

    <input type="submit" disabled={!disableSubmit} onSubmit={handleSubmit}/>
    </form>
    
    </div>)

}
export default TenantManage;