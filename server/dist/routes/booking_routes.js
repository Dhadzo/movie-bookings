"use strict";
var router = require('express').Router();
var database = require('../config/dbConfig');
router.get('/bookings', function (req, res) {
    database('bookings')
        .where({ 'user_assigned': req.username })
        .then(function (bookings) {
        res.json(bookings);
    });
});
module.exports = router;
