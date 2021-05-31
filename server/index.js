const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mysql=require('mysql');

const db = mysql.createConnection({
    host: 'localhost' ,
    user:'root',
    password:'root',
    database:'patientrecords'
});
db.connect(err=>{
    if(err){
        throw err;
    }
        console.log('MySQL Connected');
});



const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());

app.get("/api/patients",(req,res)=>{
    db.query("SELECT * FROM patient",(err,result)=>{
        res.send(result);
        console.log(result)
        console.log(err)
        
    })
})

app.get("/api/",(req,res)=>{
    console.log('API is working properly')
    res.send('Api is working properly')
    })

    const path = require('path');
    const express = require('express');
    
    
    
    // Have Node serve the files for our built React app
    app.use(express.static(path.resolve(__dirname, '../client/build')));
    
    
    // All other GET requests not handled before will return our React app
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });



app.get("/api/visits/:mobile",(req,res)=>{
    const mobile=req.params.mobile

    db.query("SELECT * FROM visits WHERE mobile=?",mobile,(err,result)=>{
        res.send(result);
        console.log(result)
        console.log(err)
        
    })
})

app.post("/api/insertpatient",(req,res)=>{
const name=req.body.name
const age=req.body.age
const gender=req.body.gender
const mobile=req.body.mobile
const email=req.body.email

    const sqlInsert="INSERT INTO patient (name,age,gender,mobile,email) VALUES (?,?,?,?,?);";
    
    db.query(sqlInsert,[name,age,gender,mobile,email],(err,result)=>
    {
        console.log(err)
        
    })
})



app.delete("/api/delete/:mobile",(req,res)=>{
    const mobile=req.params.mobile


    const sqlDelete="DELETE FROM patient WHERE mobile= ?;";
    
    db.query(sqlDelete,mobile,(err,result)=>{console.log(err)})
   

    const sqlDelete2="DELETE FROM visits WHERE mobile= ?;";
    db.query(sqlDelete2,mobile,(err,result)=>{console.log(err)})
    
})

app.get('/api/login/:username',(req,res)=>{
    
    const username=req.params.username

    const sqlLogin="SELECT * FROM login where username=?;";
console.log(sqlLogin)

    db.query(sqlLogin,username,(err,result)=>{
        res.send(result);
        
    })
})


app.listen(3002,()=>console.log('API is running on http://localhost:3002/login'))

