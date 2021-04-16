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