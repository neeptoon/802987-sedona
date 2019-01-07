var formActive = document.querySelector(".form-active-button");
var formSection = document.querySelector(".modal");
var focusInput = formSection.querySelector("[name=arrival-field]");
var form = formSection.querySelector(".search-form");
var arrival = form.querySelector("[name=arrival-field]");
var depardue = form.querySelector("[name=depardue-field]");

formActive.addEventListener("click", function (evt) {
	evt.preventDefault();
	formSection.classList.toggle("modal-show");
	focusInput.focus();
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !depardue.value) {
		evt.preventDefault();
	}
});
