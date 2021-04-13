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
    //let values = document.getElementById("item");
    var numberOfBoxesSelected = $('input:checkbox:checked').length;


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
    console.log(totalPrice);

    return totalPrice;



    // var myTable = document.getElementById('movieTable');
    // var rowsLenght = myTable.rows.length;

    // console.log(rowsLenght);

    // for (i = 0; i < rowsLenght; i++) {
    //     var oCells = myTable.rows.item(i).cells;
    //     var columnLength = oCells.length


    //     for (var j = 0; j < columnLength; j++) {

    //         var cellValue = oCells.item(j).innerHTML;


    //         console.log(cellValue);
    //     }
    // }


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