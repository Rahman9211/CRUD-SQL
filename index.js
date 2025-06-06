PORT=5250
const express =require('express');
const app=express();
const db=require('./models/connection');
app.use(express.json());// accepts json data


app.post('/addUser',(req,res)=>{
    const user={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.mobile,
        city:req.body.city
    }
    // console.log(user);
    const sql="INSERT INTO `employee` SET ?"
    db.query(sql,user,(err,result)=>{
        if(err) console.log(err.sqlMessage);
        else res.json(user)
        
    })
    
})

app.listen(PORT,()=>[
    console.log(`server is running on port ${PORT}`)
    
])