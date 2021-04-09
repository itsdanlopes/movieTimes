let listMovies = async() => {
    const listar = await listOfMovies();
    console.log(listar)
    return listar;
};