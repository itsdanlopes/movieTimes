function draw_table() {
    $("#results").empty();
    $.getJSONuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
                select_row();
            }
        });
    };
    $.getJSONuncached("/get/html")
};

function select_row() {
    $("#movieTable tbody tr[id]").click(function() {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        var title = $(this).prevAll("tr").children("td[colspan='6']").length - 1;
        var movie = $(this).attr("id") - 1;
        delete_row(title, movie);
    })
};

function delete_row(tit, mov) {
    $("#delete").click(function() {
        $.ajax({
            url: "/post/delete",
            type: "POST",
            data: {
                title: tit,
                movie: mov
            },
            cache: false,
            success: setTimeout(draw_table, 1000)
        })
    })
};

$(document).ready(function() {
    draw_table();
});

const createList = (list) => {
    const price = list.price;
    const id = list._id;

    return `
			 <tr>
			 <td><input name="${id}" type="checkBox" value=${price} id="item"/></td>
			 <td >${list.name}</td>
			 <td >${list.genre}</td>
			 <td >${list.price}</td>
			 <td >${list.duration}</td>
			 <td >${list.screen}</td>
			 <td >${list.showingTime}</td>
			 </tr>
			  `
}