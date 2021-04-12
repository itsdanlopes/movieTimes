const defaultURL = 'https://movieschedule.herokuapp.com/';

// const axios = require("axios");

const listOfMovies = async() => {

    const URL = `${defaultURL}getMovie`;
    const movies = await axios.get(URL);
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
        .then((res) => {
            console.log(res)
            window.location.reload();
        })
        .catch((error) => console.log(error))

}