const listMovies = async() => {


    const list = await listOfMovies();
    const divList = document.getElementById("list-props");
    const listMovies = [];
    list.forEach(element => { listMovies.push(element) });

    listMovies.forEach(item => {
        const movie = createList(item);
        divList.insertAdjacentHTML('afterbegin', movie);
    });
};

function calculateBill() {
    let values = document.getElementById("item");

    console.log(values.length)
    for (let i = 0; i < 10; i++) {
        console.log(values[0].value)
    }
}

function insertMovie() {
    const name = document.getElementById("name").value;
    const genre = document.getElementById("genre").value;
    const price = document.getElementById("price").value;
    const duration = document.getElementById("duration").value;
    const screen = document.getElementById("screen").value;
    const showingTime = document.getElementById("showingTime").value;

    const movie = {
        name: name,
        genre: genre,
        price: price,
        duration: duration,
        screen: screen,
        showingTime: showingTime
    }

    createMovie(movie);
}

listMovies();