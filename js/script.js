//Add a new item to the list of items
const newItem = () => {
    let inputValue = $('#input').val();
    let li = $(`<li>${inputValue}</li>`);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let list = $('#list');
        list.append(li);
    }

    //Crossing out item from the list of items
    function crossOut() {
        li.toggleClass('strike');
    };

    li.on('dblclick', crossOut);

    //Add the delete button "X"
    let crossButton = $('<button>X</button>');
    crossButton.addClass('btn-delete');
    li.append(crossButton);

    crossButton.on('click', deleteListItem);

    //Delete item from the list (Add class 'delete')
    function deleteListItem() {
        li.addClass('delete');
    };

    //Reordering the items
    $('#list').sortable();
};
