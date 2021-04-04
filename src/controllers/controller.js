const mongoose = require('mongoose');

// const {
//     MONGO: {
//         SRV
//     }
// } = require('./../helper/settings');

let database;
let movieSchema;

const connectDatabase = async() => {
    database = database || mongoose.connect(SRV, {
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
        name: String
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
    name
}) => {
    const database = await connectDatabase();

    await createMovieSchema(database);

    const {
        Movie
    } = database.models;

    const movie = new Movie({
        name
    });

    return movie.save();
};

const updateMovie = async({
    id
}, {
    name
}) => {
    const database = await connectDatabase();

    await createMovieSchema(database);

    const {
        Movie
    } = database.models;

    return Movie.update({
        _id: id
    }, {
        name
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

module.exports = {
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}