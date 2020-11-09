const router = require('express').Router();
const database = require('../config/dbConfig');
import { Request, Response, NextFunction } from "express";

router.post('/bookings', (req:Request,res:Response) => {
    database('bookings')
    .where({'user_assigned': req.body.username})
    .then((bookings: any) => {
         res.json(bookings);
    })
})
router.post('/book-movie', (req:Request,res:Response) => {
    database('bookings').insert({
        user_assigned: req.body.username,
        movie_title: req.body.movie.Title,
        movie_image: req.body.movie.Poster,
        movie_summary: req.body.movie.Plot,
        movie_year: req.body.movie.Released,
    })
    .then((bookings:any) => {
        res.json({success:true})
    })
    .catch((error:any) => {
        if(error.detail.includes('already exists')){
            res.json({error: "Movie has been booked already."})
        }
    })
})

module.exports = router;