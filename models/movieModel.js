const moongose = require('mongoose');

const movieSchema = moongose.Schema({
    name: {
        type: String,
        required: [true, 'Movie name must require']
    },
    rating: {
        type: Number,
        reuired: [true, 'Movie rating must require']
    },
    released_date: {
        type: String,
        // required: [true, 'Movie released date must required']
    },
    actors: [String]
});

const Movie = moongose.model('Movie', movieSchema);

module.exports = Movie;