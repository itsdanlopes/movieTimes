const defaultURL = 'https://movieschedule.herokuapp.com/';

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

const deleteMovies = async(movieID) => {
    const URL = `${defaultURL}deleteMovie/${movieID}`;

    axios.delete(URL)
        .then((res) => {
            console.log(res);
            window.location.reload();
        })
        .catch((error) => console.log(error));

}

const getMovieByID = async(movieID) => {


    const URL = `${defaultURL}getSingleMovie/${movieID}`;
    const movie = await axios.get(URL);
    return movie.data;


}

const updateSelectedMovie = async(movie, movieID) => {
    const URL = `${defaultURL}updateMovie/${movieID}`;
    console.log(movie);
    axios.put(URL, {
            _id: movieID,
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