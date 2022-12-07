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
    const sql = "SELECT `apartments`.`number` AS `_apartmentNumber`, `apartments`.`id`, `floors`.`number`, `buildings`.`name` FROM `apartments` LEFT OUTER JOIN `floors` ON `apartments`.`floorID` = `floors`.`id` LEFT OUTER JOIN `buildings` ON `floors`.`buildingID` = `buildings`.`id`"
    db.query(sql, (err,result) => {
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
// Route to GET Floors by Building
app.get('/floorsinbuild/:id', (req, res) => {
    console.log(req.query.id)
    const values = [
        req.params.id
    ]
    const sql = "SELECT `floors`.`number`, `floors`.`hasGym`, `floors`.`id`, `floors`.`buildingID` FROM `floors` WHERE `floors`.`buildingID` = (?)"
    db.query(sql, values, (err,result) => {
        if(err) {
            return res.json(err)
         } 
        // return res.json
        res.send(result)
    });
})
// Route to GET Apt by Floor
app.get('/aptsonfloor/:id', (req, res) => {
    console.log(req.query.id)
    const values = [
        req.params.id
    ]
    const sql = "SELECT `apartments`.`id`, `apartments`.`number`, `apartments`.`buildingID`, `apartments`.`floorID` FROM `apartments` WHERE `apartments`.`floorID` = (?)"
    db.query(sql, values, (err,result) => {
        if(err) {
            return res.json(err)
         } 
        // return res.json
        res.send(result)
    });
})
// Route to GET Tenant by Apt
app.get('/tenantsinapt/:id', (req, res) => {
    console.log(req.query.id)
    const values = [
        req.params.id
    ]
    const sql = "SELECT `aptID`, `tenantID`,`tenants`.`name`,`apartments`.`number` FROM `apt_tenant` LEFT OUTER JOIN `tenants` ON `apt_tenant`.`tenantID` = `tenants`.`id` LEFT OUTER JOIN `apartments` ON `apt_tenant`.`aptID` = `apartments`.`id` WHERE `apt_tenant`.`aptID` = (?)"
    db.query(sql, values, (err,result) => {
        if(err) {
            return res.json(err)
         } 
        // return res.json
        res.send(result)
    });
})

// Route to POST new Apt
app.post("/newApt/:number/:buildingID/:floorID", (req, res) => {
    const sql = "INSERT INTO `apartments`(`number`, `buildingID`, `floorID`) VALUES (?)"
    const values = [
      req.params.number,
      req.params.buildingID,
      req.params.floorID,
    ]
    db.query(sql, [values], (err, data) => {
      if (err) return res.send(err)
      return res.json(data)
    })
  })
// Route to POST assiging Apt to Tenant
app.post("/assigntenantapt/:tenant/:apt", (req, res) => {
    const sql = "INSERT INTO `apt_tenant`(`tenantID`, `aptID`) VALUES (?)"
    const values = [
      req.params.tenant,
      req.params.apt,
    ]
    db.query(sql, [values], (err, data) => {
      if (err) return res.send(err)
      return res.json(data)
    })
  })

  // Register and Login
  app.post('/register', (req, res) => {
    console.log(req.body)
    const sql = "INSERT INTO `users` (`username`, `password`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.password,
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.send(err)
        return res.json(data)
    })
  })
  app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(username, password)
    db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result)=> {
            if (err) {
                res.send({err: err});
                console.log(err)
            }
    
            if (result.length > 0) {
                res.send("Success")
                }else({message: "Wrong username/password comination!"});
            }
        )
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
