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

    const checkboxes = document.querySelectorAll(`input[type="checkBox"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    var totalPrice = 0;

    for (i = 0; i < values.length; i++) {

        var currentValue = parseInt(values[i]);

        totalPrice += currentValue;


    }
    document.getElementById('total').value = totalPrice;


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

function deleteMoviesFunction() {

    const checkboxes = document.querySelectorAll(`input[type="checkBox"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.name);


    });

    for (i = 0; i < values.length; i++) {

        var movieID = values[i];
        deleteMovies(movieID);




    }


}

function updateMovieFunction() {

    const checkboxes = document.querySelectorAll(`input[type="checkBox"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.name);

    });

    if (values.length > 1) {
        alert("You are ONLY allowed to update one movie at a time!");
        window.location.reload();

    } else {
        var movieID = values[0];

        getMovieObject(movieID);


    }
}






listMovies();