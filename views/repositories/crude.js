const defaultURL = 'https://movieschedule.herokuapp.com/';

// const axios = require("axios");

const listOfMovies = async(test) => {

    const URL = `${defaultURL}getMovie`;
    const movies = await axios.get(URL);
    console.log(test);
    console.log(movies.data);
    return movies.data;

}


const createMovie = async(movie) => {
    const URL = `${defaultURL}createMovie`;
    console.log(movie);
    axios.post(URL, {
            name: movie.name,
            genre: movie.genre,
            price: movie.price,
            duration: movie.duration,
            screen: movie.screen,
            showingTime: movie.showingTime
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error))

}