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