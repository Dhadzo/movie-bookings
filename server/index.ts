const express = require('express');
const PORT = process.env.PORT || 5000;
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const { Client } = require('pg');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/api', require('./routes/user_routes'));
app.use('/api', require('./routes/booking_routes'));

server.listen(PORT, () => {
    console.log(`Sever has started running on Port ${PORT}.`);
})