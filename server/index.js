const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const bodyParser = require('body-parser')
// Set as not default Port
const PORT = 3001
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// Set up connection to db
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'TenantTabs'
})
// Connect and check connections
app.get('/', (req, res) => {
    res.send('Check.')
})
app.listen(PORT, () => {
    console.log('Server is up and running.')
})

// Route to GET all apartments
app.get("/apartments", (req,res)=>{
    db.query("SELECT * FROM apartments", (err,result) => {
        if(err) {
             console.log(err)
         } 
        res.send(result)
    });
});
// Route to GET all floors
app.get("/floors", (rerq,res)=>{
    db.query("SELECT * FROM floors", (err,result) => {
        if(err) {
             console.log(err)
         } 
        res.send(result)
    });
});
// Route to GET all buildings
app.get("/buildings", (req,res)=>{
    db.query("SELECT * FROM buildings", (err,result) => {
        if(err) {
             console.log(err)
         } 
        res.send(result)
    });
});
// Route to GET all tenants
app.get("/tenants", (req,res)=>{
    db.query("SELECT * FROM tenants", (err,result) => {
        if(err) {
             console.log(err)
         } 
        res.send(result)
    });
});

// Filter Floors by Building
app.get('/floorsinbuild/:id', (req, res) => {
    const values = [
        req.body.id
    ]
    const sql = "SELECT `floorID`, `buildingID`,`floors`.`number`,`buildings`.`name` FROM `building_floor` LEFT OUTER JOIN `floors` ON `building_floor`.`floorID` = `floors`.`id` LEFT OUTER JOIN `buildings` ON `building_floor`.`buildingID` = `buildings`.`id` WHERE `buildings`.`id` = (?)"
    db.query(sql, values, (err,result) => {
        if(err) {
            return res.json(err)
         } 
        // return res.json
        res.send(result)
    });
})

// Insert Room and Assign to Floor, Building

// var buildingId;
// var floorId;
// app.query('INSERT INTO building SET ?', {name: 'testbldg'}, function(err, result, fields) {
//  if (err) throw err;
// buildingId = result.insertId;
// };

// app.query('INSERT INTO floor SET ?', {name: 'testfloor', building_id: buildingId}, function(err, result, fields) {
//  if (err) throw err;
// floorId = result.insertId;
// };


// Assign person to room

// Filter Apartments by Floor, Building, Room





//Route to add tenant
// app.post('/tenants', (req, res) => {
//     const values = [
//         req.body.name
//     ]
//     db.query("INSERT INTO `tenants` (`name`) VALUES (?)",[values], (err,result) => {
//         if(err) {
//             return res.json(err)
//          } 
//         return res.json('Tenant has created.')
//     });
// })
