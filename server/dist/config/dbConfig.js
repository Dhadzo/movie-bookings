"use strict";
var knex = require('knex');
var knexConfig = require('../knexfile');
var environment = process.env.NODE_ENV || "development";
module.exports = knex(knexConfig[environment]);
