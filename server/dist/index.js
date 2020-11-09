"use strict";
var express = require('express');
var PORT = process.env.PORT || 5000;
var http = require('http');
var app = express();
var server = http.createServer(app);
var cors = require('cors');
var Client = require('pg').Client;
// const client = new Client({
//     user: 'postgres',
//     password: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres'
// })
// client.connect()
// .then(() => {
//     console.log('Connected successfully.')
// })
// .catch((e:any) => console.log(e))
// .finally(() => client.end())
// app.use('/', (req:any,res:any) => {
//     res.send("Hello world today");
// })        
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use('/api', require('./routes/user_routes'));
app.use('/api', require('./routes/booking_routes'));
server.listen(PORT, function () {
    console.log("Sever has started running on Port " + PORT + ".");
});
