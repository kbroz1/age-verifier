//this code checks to make sure that our code is loaded before we try to access the different parts of it 
if(document.readyState == 'loading') {
    //this event will fire as soon as the page is done loading
    document.addEventListener('DOMContentLoaded', ready)
} else {
    //if page is done loading, we want to run the ready function no matter what
    ready()
}

//defines the ready function that is called above
function ready() {
//selects all of the buttons with btn-danger class
var removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons)
//loop thru all of the different items in the cart:
for (var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    //the event listener allows you to add functionality to a button
    button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        //allows page to update with the change in quantity by user input
        input.addEventListener('change', quantityChanged)
}

var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

//creates/defines function for purchase button called above:
function purchaseClicked () {
    alert("Thank you for your purchase!")
    //delete all items inside the card:
    var cartItems = document.getElementsByClassName('cart-items')[0]
    //while loop (similar to for loop) continually loops through all of our rows until it is empty
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}


//function that says what we want to do once the quantity of the item has been changed:
function quantityChanged(event) {
    var input = event.target
    //isNaN = is not a number 
    //this function will check to make sure that quantity is a number and is not negative or less than 0 
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    //function that updates the value of the cart:
    updateCartTotal()
}

//defines function that was called above 
function removeCartItem() {
    //checks your function by consoling out how many times the button has been clicked:
    console.log('clicked')
    //.target = the button that was clicked 
    //the button we click = is the event.target
    var buttonClicked = event.target
    //targets the cart row you want to remove which is the parent of the button object and then the parent of that parent
//removes items from the cart
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

//called in ready function above, function adds items to cart when clicked:
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title,price,imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    //creates new div 
    var cartRow = document.createElement('div')
    //adds the class list "cart-row" to cart so that is has the same styling as the other cart items
    cartRow.classList.add('cart-row')
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title) {
            alert('This item has already been added to the cart')
            return //exits you out of the function and stops excuting anything below
        }
        }
    //adds content (from HTML) for the empty div we just created 
    var cartRowContents = `
            <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents
    //adds cart row to end of cart items, to the end of cart items
    cartItems.append(cartRow)
    //you need to add this so that the remove button works for the newly added items
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    //this adds the quantity changed function to the newly added items to the cart 
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener
    ('change', quantityChanged)
}
//updates cart total after removing items:
function updateCartTotal() {
    //target the div container with the class name cart-items that includes all of the items
    var cartItemContainer = document.getElementsByClassName('cart-items')[0] //add the 0 to only select first item inside cart item container
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
   //sets the total to 0 to start
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow= cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        //removes the dollar sign $ from the string:
        //parseFloat method turns any string into a float which is a number with decimal points after it 
        var price = parseFloat(priceElement.innerText.replace('$', " "))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    //this makes the total round to .00 only two decimal points
    total = Math.round(total  * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

