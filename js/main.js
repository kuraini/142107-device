var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});

var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var formName = popup.querySelector("[name=name]");
var mail = popup.querySelector("[name=email]");
var message = form.querySelector("[name=text]");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	formName.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!formName.value || !mail.value || !message.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
		if (!formName.value) {
			formName.classList.add("field-invalid");
		}
		if (!mail.value) {
			mail.classList.add("field-invalid");
		}
		if (!message.value) {
			message.classList.add("field-invalid");
		}
	}
	if (formName.value) {
		formName.classList.remove("field-invalid");
	}
	if (mail.value) {
		mail.classList.remove("field-invalid");
	}
	if (message.value) {
		message.classList.remove("field-invalid");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});