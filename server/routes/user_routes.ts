export {}
const router = require('express').Router();
const database = require('../config/dbConfig');
import { Request, Response } from "express";
const bcrypt = require('bcrypt');
const { addUser } = require('../models/user');
const jwt = require('jsonwebtoken');


router.post('/register', async (req:Request,res:Response) => {
   return addUser(req)
   .then( async (user:any) => {
       let token = jwt.sign(user[0], process.env.TOKEN_SECRET);
       delete user[0].password
       res.json({
           user: user[0],
           token: token,
        })
   })
   .catch((error:any) =>{
       if(error.detail.includes('already exists')){
          res.status(200).json({error: "Username already exists"})
       }
   })
})
router.post('/login', async (req:Request,res:Response) => {
    database('users').where({'username': req.body.username})
    .then( async (user:any) => {
       if(user.length === 0){
           res.json({error: "Invalid username and password"})
       }else{
           let token
           const match = await bcrypt.compareSync(req.body.password,user[0].password);
           if(match){
               token = jwt.sign(user[0], process.env.TOKEN_SECRET)
               delete user[0].password
               console.log(user[0])
               res.json({
                 user: user[0],
                 token: token
               })
            }else{
                res.json({
                    error: "Invalid username and password"
                })
            }
        }
    })
})

module.exports = router;