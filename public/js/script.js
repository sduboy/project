//log-reg functions
function popuplog(){
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    document.querySelector(".popuplog").style.display = "flex";
    $(".popuplog").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";
}

function close_popuplog(){
    $(".popuplog").animate({opacity: "0"}, "slow");
    document.querySelector(".popuplog").style.display = "none";
    document.body.style.opacity="1";
    document.body.style.overflow = "scroll";
}

function popupsign(){
    // $('html, body').animate({ scrollTop: 0 }, 'fast');
    document.querySelector(".popupsign").style.display = "flex";
    $(".popupsign").animate({opacity: "1"}, "slow");
    document.body.style.overflow = "hidden";
}

function close_popupsign(){
    $(".popupsign").animate({opacity: "0"}, "slow");
    document.querySelector(".popupsign").style.display = "none";
    document.body.style.opacity="1";
    document.body.style.overflow = "scroll";
}

function popupcontact(){
  $('html, body').animate({ scrollTop: 0 }, 'fast');
  document.querySelector(".popupcontact").style.display = "flex";
  $(".popupcontact").animate({opacity: "1"}, "slow");
  document.body.style.overflow = "hidden";
}

function close_popupcontact(){
  $(".popupcontact").animate({opacity: "0"}, "slow");
  document.querySelector(".popupcontact").style.display = "none";
  document.body.style.opacity="1";
  document.body.style.overflow = "scroll";
}

var loggedIn = false
var signedUp = false

function login(){
    if(document.getElementById('username').value==''){
      alert("Input your username")
    }else if(document.getElementById('pass').value==''){
      alert("Input your password")
    }else{
      document.getElementById("login").remove()
      document.getElementById("signup").remove()
      document.querySelector(".logregbuttons").innerHTML = document.getElementById("username").value
      loggedIn=true
      close_popuplog()
    }
}
function signup(){
  if(document.getElementById('choose-username').value==''){
    alert("Input your username")
  }else if(document.getElementById('email').value==''){
    alert("Input your email")
  }else if(document.getElementById('choose-pass').value==''){
    alert("Create password")
  }else if(document.getElementById('check-pass').value==''){
    alert("Input password again")
  }else if(document.getElementById('choose-pass').value!==document.getElementById('check-pass').value){
    alert("Passwords are different")
  }else{
    document.getElementById("login").remove()
    document.getElementById("signup").remove()
    document.querySelector("#name_of_user").innerHTML = document.getElementById("choose-username").value;
    document.querySelector("#profile_img").style.display = 'flex';
    signedUp=true;
    close_popupsign();
  }
}

function readURL(input) {
  if (input.files && input.files[0] ) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#profile_img').attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
  }
}


//cart fucntions
function popupcart(){
  if(loggedIn==true||signedUp==true){
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    document.querySelector(".popupcart").style.display = "flex";
    document.body.style.overflow = "hidden";
  }else{
    alert("You need to Log in or Sign up to access your cart")
  }
}
function close_popupcart(){
  document.querySelector(".popupcart").style.display = "none";
  document.body.style.overflow = "scroll";
}

  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var addToCartButtons = document.getElementsByClassName('addtocard')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


function purchaseClicked() {
  var allrButtons = document.querySelectorAll('.btn-danger')
  for(var i = 0;i<allrButtons.length;i++){
    allrButtons[i].click()
  }
  alert('Thank you for your purchase')
  updateCartTotal()
  document.querySelector(".popupcart").style.display = "none";
  document.body.style.overflow = "scroll";
}

function removeCartItem(event) {
  var buttonClicked = event.target  
  buttonClicked.parentElement.parentElement.remove()
  var titleName = buttonClicked.parentElement.parentElement.querySelector(".cart-item-title").innerText
  var cardNames = document.getElementsByTagName("H4")
  for(var i = 0;i<cardNames.length;i++){
    if(cardNames[i].innerText==titleName){
      cardNames[i].parentElement.querySelector(".addtocard").innerText="Add to card"
      cardNames[i].parentElement.querySelector(".addtocard").style.backgroundColor="red"
      cardNames[i].parentElement.querySelector(".addtocard").style.color="white"
    }
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  if(loggedIn==true||signedUp==true){
  var button = event.target
  button.style.backgroundColor="white"
  button.style.color="black"
  button.innerText="Added"
  var shopItem = button.parentElement
  var title = shopItem.getElementsByTagName("H4")[0].innerText
  var price = shopItem.getElementsByClassName('current-price')[0].innerText
  var imageSrc = shopItem.getElementsByTagName("IMG")[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
  }else{
    alert("You need to Log in or Sign up to add courses to your cart")
    return
  }
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title")
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="80">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-column">
          <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      total = total + price
  }
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


//push-up button
$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        $('#up').css({
          "opacity":"1", "pointer-events":"auto" 
        });
      }else{
        $('#up').css({
          "opacity":"0", "pointer-events":"none"
        });
      }
    });
    $('#up').click(function(){
      $('html').animate({scrollTop:0}, 500);
    });
  });
  
  //nav functions
  $(document).ready(function(){
    $('#Home').click(function(){
      $('html').animate({scrollTop:0}, 300);
    });
    $('#About-us').click(function(){
      $('html').animate({scrollTop:650}, 300);
    });
    $('#Courses').click(function(){
      $('html').animate({scrollTop:1250}, 300);
    });
    $('#Contacts').click(function(){
      $('html').animate({scrollTop:3500}, 100);
    });
  });