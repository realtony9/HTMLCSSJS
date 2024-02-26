let removeCartItemButtons = document.getElementsByClassName("btn-danger")
let buttonClicked;
for (let i = 0; i < removeCartItemButtons.length; i++){
    let button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
    })
}

