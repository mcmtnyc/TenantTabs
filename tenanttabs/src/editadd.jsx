import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function EditAdd() {

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

    // Fetch Floor data By building
    const [floorrs, setFloors] = useState([])
    useEffect(() => {
      const fetchAllFloors = async () => {
        try {
          const res = await axios.get('http://localhost:3001/apartments')
          setFloors(res.data)
          console.log(res.data)
        }
        catch(err) {
          console.log(err)
        }
      }
      fetchAllFloors()
    }, [])

  return (
    <div className="EditAdd">

    {/* Assign Tenant to Room*/}
    {/* Add SQL logic on send*/}


    {/* Add Building by entering form*/}
    {/* Add SQL logic on send */}
<form>
  <label>
ADD BUILDING
    <input type="text" name="bdname" />
    <input type="number" name="sqft" />
  </label>
  <input type="submit" value="Submit" />
</form>

    {/* Add Floor by selecting Building */}
    {/* Add SQL logic to selection */}
    {/* Add SQL logic on send */}
<form>
  <label>
ADD FLOOR TO BUILDING
</label>
    <select name="buildings" required>
      <option value="" disabled selected hidden>Choose a building</option>
      {buildings.map((building) =>
      <option key={building.id} value={building.id}>{building.name}</option>
      )}
      {/*Populate options from buildings, set value to selected Building*/}
    </select>
  <input type="number" name="flnumber" placeholder='Input Floor #'/>
  <input type="submit" value="Submit" />
</form>
<div className='resultDiv'></div>


    {/* Add Apt by selecting Building and Floor */}
    {/* Add SQL logic to selection */}
    {/* Add SQL logic on send */}


    {/* Add Tenant by selecting Building and Floor and Apt */}
    {/* Add SQL logic to selection */}
    {/* Add SQL logic on send */}
<form>
  <label>
 ADD TENANT
  </label>

      {/* select Building */}
      <select name="buildings" required>
      <option value="" disabled selected hidden>Choose a building</option>
      <option value="coffee">Coffee</option>
      <option value="tea">Tea</option>
      <option value="milk">Milk</option>
      {/*query from SQL for buildings*/}
      </select>

          {/* select Floor */}
    <select name="floors" required>
      <option value="" disabled selected hidden>Choose a building</option>
      <option value="coffee">Coffee</option>
      <option value="tea">Tea</option>
      <option value="milk">Milk</option>
      {/*query from SQL for floors in selected building*/}
      </select>

          {/* select Apt */}
    <select name="floors" required>
      <option value="" disabled selected hidden>Choose a Apt</option>
      <option value="coffee">Coffee</option>
      <option value="tea">Tea</option>
      <option value="milk">Milk</option>
      {/*query from SQL for rooms in selected floor*/}
      </select>
  <input type="text" name="tenantname" />
  <input type="submit" value="Submit" />

</form>
    </div>
  );
}

export default EditAdd;
