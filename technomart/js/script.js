var cartlink = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");
var cartClose2 = cartPopup.querySelector(".modal-close-btn");
//
//корзина
[].forEach.call(cartlink, function (cartlink) {
    cartlink.addEventListener("click", function (event) {
        event.preventDefault();
        cartPopup.classList.add("modal-content-show");
    });
});
cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-content-show");
});
cartClose2.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-content-show");
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-content-show")) {
            cartPopup.classList.remove("modal-content-show");
        }
    }
});

var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-big-map");
if (mapPopup) {
    var mapClose = mapPopup.querySelector(".modal-close");
    mapOpen.addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");

    });
    mapClose.addEventListener("click", function (event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
    });
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (mapPopup.classList.contains("modal-content-show")) {
                mapPopup.classList.remove("modal-content-show");
            }
        }
    });
}
var asklink = document.querySelector(".btn-mail");
var askPopup = document.querySelector(".modal-ask");
if (askPopup) {
    var askClose = askPopup.querySelector(".modal-close");
    var askForm = askPopup.querySelector("form");
    var askName = askPopup.querySelector("#ask-name");
    var email = askPopup.querySelector("#ask-email");
    var text = askPopup.querySelector("#ask-text");

    asklink.addEventListener("click", function (evt) {
        evt.preventDefault();
        askPopup.classList.add("modal-content-show");
        askName.focus();
    });
    askClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        askPopup.classList.remove("modal-content-show");
    });
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (askPopup.classList.contains("modal-content-show")) {
                askPopup.classList.remove("modal-content-show");
            }
        }
    });
}


