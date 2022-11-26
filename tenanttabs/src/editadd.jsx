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

  return (
    <div className="EditAdd">

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
    <select name="buildings" required>
      <option value="" disabled selected hidden>Choose a building</option>
      {buildings.map((building) =>
      <option key={building.id} value={building.name}>{building.name}</option>
      )}
      {/*query from SQL for buildings*/}
    </select>
    <input type="number" name="flnumber"/>
  </label>
  <input type="submit" value="Submit" />
</form>


    {/* Add Apt by selecting Building and Floor */}
    {/* Add SQL logic to selection */}
    {/* Add SQL logic on send */}
<form>


    {/* Add Apt by selecting Building and Floor */}
    {/* Add SQL logic to selection */}
  <label>
ADD Apt
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

    <input type="number" name="rmnumber" />
    <input type="text" name="occupyingtenant" />
  </label>
  <input type="submit" value="Submit" />
</form>


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
