const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables
const fs = require('fs');
const { parse } = require('json2csv');
const JkMysql = require('jkmysql-easy')

const path = require('path')

const resourceLimits = require('worker_threads');
const e = require('express');
const { stat } = require('fs');


const app = express();
const PORT = process.env.PORT || 8081

//file  upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images')
    }, 
    filename:(req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
})
  
const upload = multer({
    storage:storage
})


// make connection between server and mysql database
const connection = JkMysql.ConnectToDatabase('localhost', 'root', '1234', 'db_vue')

// configurate email sending 
const transporter = JkMysql.SendEmailConfig("Gmail", process.env.EMAIL_USER, process.env.EMAIL_PASSWORD)

// middleware
app.use(express.json())
app.use(cors())
app.use(express.static('public')); 


// all endpoint start

app.post('/SignUp', (req, res) => {
    // console.log(req.body)

    const tableName = "users"
    const columnData = {Email:req.body.email}

    JkMysql.SearchData(connection, tableName, columnData, (result) => {
        if(result.length === 0 ){
            bcrypt.hash(req.body.password, 10, (err, HashPass) => { 
                if(HashPass){
                    const tableName = "users"
                    const data = {
                        Username: req.body.username,
                        Email: req.body.email,
                        Password: HashPass,
                        Role: "Admin"
                    }
                    JkMysql.insertData(connection, tableName, data, (result) => {
                        if(result) {
                            return res.json({Status: "Success"})
                        }
                    })
                }
            })

        } 
        else{
            return res.json({Error: 'User Already in Database'})
        }
    })
})

// Login

app.post('/Login',(req, res) => {
    console.log(req.body)

    const tableName = "users"
    const columnData = { Email: req.body.email }

    // console.log(tableName, columnData)

    JkMysql.SelectData(connection, tableName, columnData, (result) => {
        if(result.length === 0){
            // console.log("Error")
            return res.json({Error: "User Not Found in Database..."})
        }
        else{
            // console.log(result[0].Password)
            // console.log("good to go")
            const password = req.body.password
            
            bcrypt.compare(password, result[0].Password, (err, PassMatch) => {
                if(err) throw err

                if(PassMatch) {
                    //generate JWT Token
                    const token = jwt.sign(
                        {email: result[0].Email, role: result[0].Role},
                        'your-secret-key',
                        {expiresIn: '1h'}
                    );
                    res.json({Token: token, Msg: "Success", LoginUser:result})
                    console.log(result)
                }
                else{
                    return res.json({Error: "Password Not Match"})
                }
            })
        }
    })
})

// all endpoints end

app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));