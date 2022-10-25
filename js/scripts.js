function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
    alert("You must write something!");
    } else {
    $('#list').append(li);
    }

    /*function crossOut(){
    li.addClass("strike");
    }
    li.on("dblclick", crossOut);*/

    // dblclick = double click vs click just ones
    li.on("dblclick", function() {
        li.addClass("strike");
      });

    $('#list').sortable();

    let crossOutButton = $ ('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    function deleteListItem(){
        li.addClass('delete');
    }
}
