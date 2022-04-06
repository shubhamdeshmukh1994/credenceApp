var express = require('express');
let MovieModel = require('../models/MovieModel')

function movieRoutes() {
    var router = express.Router();
    router.get('/delete/:_id',async (req, res, next) =>{
        try {
            let movieId = req.params._id;
            let deletedMovie = await MovieModel.findByIdAndDelete({_id: movieId}, {upsert: true});
            if(deletedMovie!=null){
                res.status(200).send({
                    "status":"success",
                    "messege":"Movie deleted successfully",
                    "deletedMovie":deletedMovie
                });
            }else{
                res.status(422).send({"status":"failed","messege":"No data found"});
            }
        } catch (error) {
            res.status(422).send({error});
        }
    });
    router.get('/get',async (req, res, next) =>{
        try {
            let movies = await MovieModel.find();
            if(movies.length>0){
                res.status(200).send({
                    "status":"success",
                    "messege":"",
                    "movies":movies
                });
            }else{
                res.status(422).send({"status":"failed","messege":"No data found"});
            }
        } catch (error) {
            res.status(422).send({error});
        }
    });

    router.get('/',(req, res, next) =>{
        console.log(" middleware");
        res.send('<h1>Hello Shubham....<h1>');
    });

    router.post('/update/:_id',async(req, res, next) =>{
        try {
            let movieId = req.params._id;
            let movieBody = req.body;
            let updatedMovie = await MovieModel.findByIdAndUpdate(movieId, movieBody, {new: true});
            if(updatedMovie!=undefined){
                res.status(200).send({
                    "status":"success",
                    "messege":"Movie updated successfully",
                    "updated_data":updatedMovie
                });
            }else{
                res.status(422).send({"status":"failed","messege":"No data found"});
            }
        } catch (error) {
            res.status(422).send({error})
        }
        
    });
    router.post('/insert',async (req, res, next) =>{
        try {
            let body = req.body;
            if(req.body.data.length>0){
                let movie = await MovieModel.insertMany(body.data);
                if(movie.length>0){
                    res.status(200).send({
                        "status":"success",
                        "messege":"Movie updated successfully",
                        "data":movie
                    });
                }else{

                }
                res.status(422).send({"satus":"failed","messege":"No data found"});
            }else{
                
            }
        } catch (error) {
            res.status(422).send({error});
        }
    });
    return router;
}

module.exports = movieRoutes;