const axios = require("axios");

const defaultURL = 'https://movieschedule.herokuapp.com/';


const listOfMovies = async() => {
    const URL = `${defaultURL}getMovie`
    const movies = await axios.get(URL);

    return movies.data;
}

const detailsCountry = async() => {
    const URL = `${defaultURL}summary`;
    const result = await axios.get(URL);

    const countries = result.data;

    return countries.Countries;
}

const worldCases = async() => {
    const URL = `${defaultURL}summary`;
    const result = await axios.get(URL);

    const world = result.data;

    return world.Global
}