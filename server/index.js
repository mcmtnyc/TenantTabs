const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

// Set as not default Port
const PORT = 3001

app.use(cors());
app.use(express.json())

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


// Route to GET all tenants
app.get("/tenants", (req,res)=>{
    db.query("SELECT * FROM tenants", (err,result) => {
        if(err) {
             console.log(err)
         } 
        res.send(result)
    });
});

//Route to GET all of a Tenant's data in specific Apt
app.get("/tenants/", (req,res)=>{
    db.query("SELECT * FROM tenants", (err,result) => {
        if(err) {
             console.log(err)
         } 
        res.send(result)
    });
});





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
app.get("/floors", (req,res)=>{
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

// POST Route where Building is created
// GET Route for Floors, Apts, Tenants when Building is selected
// GET Route for Apts, Tenants when Floor is selected
// GET Route for Tenant when Apt is selected


//Route to add tenant
app.post('/tenants', (req, res) => {
    const values = ['test']
    db.query("INSERT INTO `tenants` (`name`) VALUES (?)",[values], (err,result) => {
        if(err) {
            return res.json(err)
         } 
        return res.json('Tenant has been created.')
    });
})

// Route to add building
// Route to add floor
// Route to add manager