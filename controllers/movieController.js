const Movie = require('./../models/movieModel');

exports.getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();

        res.status(200).json({
            nResults: movies.length,
            status: 'success',
            data: movies
        });
    } catch (err) {
        console.error('Error', err);
        res.json({
            status: 'fail',
            err
        });
    }  
};

exports.createMovie = async (req, res, next) => {

    try{
        const newMovie = await Movie.create({
            name: req.body.name,
            rating: req.body.rating,
            released_date: req.body.released_date,   // yyyy-mm-dd
            actors: req.body.actors
        });
    
        res.status(201).json({
            status: 'success',
            data: newMovie
        });
    } catch(err) {
        console.error('Error', err);
        res.json({
            status: 'fail',
            err
        });
    }
};

exports.getMovie = async (req, res, next) => {
    try{
        const movie = await Movie.findOne({ _id: req.params.id });
    
        res.status(200).json({
            status: 'success',
            data: movie
        });
    } catch(err) {
        console.error(err);
        res.json({
            status: 'fail',
            err
        });
    }
};

exports.updateMovie = async (req, res, next) => {
    try{
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        res.status(200).json({
            status: 'success',
            data: updatedMovie
        });
    } catch(err) {
        console.error(err);
        res.json({
            status: 'fail',
            err
        });
    }
};

exports.deleteMovie = async (req, res, next) => {
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id);
    
        res.status(204).json({
            status: 'success'
        });
    } catch(err) {
        console.error(err);
        res.json({
            status: 'fail',
            err
        });
    }
};