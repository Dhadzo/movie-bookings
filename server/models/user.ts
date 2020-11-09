export {}
const database = require('../config/dbConfig');
const bcrypt = require('bcrypt');


const addUser =  async (req:any) => {
   const { username, password } = req.body;
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hashSync(password, salt);
   return database('users').insert({
       username: username,
       password: hashedPassword
   })
   .returning('*')
} 

module.exports = { addUser }