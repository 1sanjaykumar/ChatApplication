const express = require('express');
const bcryptjs = require('bcryptjs');
const app = express();
const port = 3000;

//import files
const users=require('./models/users')

//connect DB
require('./connection');

//app Use
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/api/register', async (req,res,next)=>{
    try{
        const {fullname,email,password}=req.body;
        if(!fullname||!email||!password){
            return res.status(400).json('please fill all fields');
        }
        else{
            const isAlreadyExist = await users.findOne({email});
            if(isAlreadyExist){ 
                res.status(400).send('user already exists');
            }else{
                const newUser = new users({email,fullname});
                
                bcryptjs.hash(password, 10, (err,hashedPassword)=>{
                    newUser.set('password',hashedPassword);
                    newUser.save();
                    next();
                })
                console.log("hello ji");
                return res.status(200).send('User registered Successfully');
            }

        }
    }
    catch (error){

    }

})

//routes
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
