const mongoose = require('mongoose');
require("dotenv").config();

let MONGO_CONNECTION = process.env.MONGO;

let database;
let movieSchema;

const connectDatabase = async() => {
    database = database || mongoose.connect(MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return database;
}


const createMovieSchema = async(database) => {
    if (movieSchema) {
        return;
    }

    movieSchema = new database.Schema({
        name: String,
        genre: String,
        price: Number,
        duration: String,
        screen: String,
        showingTime: String
    }, {
        timestamps: true
    });

    database.model('Movie', movieSchema);
}

const getMovie = async() => {
    const database = await connectDatabase();

    await createMovieSchema(database);

    const {
        Movie
    } = database.models;

    const movies = Movie.find();

    return movies;
};

const createMovie = async({

    name,
    genre,
    price,
    duration,
    screen,
    showingTime


}) => {
    const database = await connectDatabase();

    await createMovieSchema(database);

    const {
        Movie
    } = database.models;

    const movie = new Movie({
        name,
        genre,
        price,
        duration,
        screen,
        showingTime
    });

    return movie.save();
};

const updateMovie = async({
    id
}, {
    name,
    genre,
    price,
    duration,
    screen,
    showingTime
}) => {
    const database = await connectDatabase();

    await createMovieSchema(database);

    const {
        Movie
    } = database.models;

    return Movie.update({
        _id: id
    }, {
        name,
        genre,
        price,
        duration,
        screen,
        showingTime
    });
};

const deleteMovie = async({
    id
}) => {
    const database = await connectDatabase();

    await createMovieSchema(database);

    const {
        Movie
    } = database.models;

    return Movie.deleteOne({
        _id: id
    });
};

const getSingleMovie = async({ id }) => {
    const database = await connectDatabase();

    await createMovieSchema(database);

    const {
        Movie
    } = database.models;

    const movie = Movie.findOne({ _id: id });

    return movie;
};

module.exports = {
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie,
    getSingleMovie
}