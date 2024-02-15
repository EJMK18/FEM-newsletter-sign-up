"use strict";
// ********************** //
// GLOBAL VARIABLES //
// ********************** //
const emails = { email: [] };

// ********************** //
// GLOBAL DOM VARIABLES //
// ********************** //

const inputEl = document.querySelector(`input`);
const subscribeBtn = document.querySelector(`.subscribe-btn`);
const emailValText = document.querySelector(`.validation`);
const newsletterContentEl = document.querySelector(`.newsletter-content`);
const articleEl = document.querySelector(`article`);
const userEmailEl = document.querySelector(`.user-email`);
const dismissBtn = document.querySelector(`.dismiss-btn`);

// ********************** //
// FUNCTIONS //
// ********************** //
const emailValidation = function (str) {
	const validEmail = str.includes(`@`) && str.includes(`.com`) ? true : false;

	if (validEmail) {
		if (emails.email.includes(str)) {
			emailValText.textContent = `Email already exists`;
			inputEl.style.color = `hsl(var(--primary-colour))`;
			inputEl.style.background = `hsla(var(--primary-colour), 0.1)`;
			inputEl.style.border = `0.1rem solid hsl(var(--primary-colour))`;
		} else {
			emails.email.push(str);
			newsletterContentEl.classList.add(`hide`);
			articleEl.classList.remove(`hide`);
			userEmailEl.textContent = str;
		}
	} else {
		emailValText.textContent = `Valid email required`;
		inputEl.style.color = `hsl(var(--primary-colour))`;
		inputEl.style.background = `hsla(var(--primary-colour), 0.1)`;
		inputEl.style.border = `0.1rem solid hsl(var(--primary-colour))`;
	}
};

const dismiss = function () {
	articleEl.classList.add(`hide`);
	newsletterContentEl.classList.remove(`hide`);
	emailValText.textContent = ``;
	inputEl.value = ``;
	inputEl.style.color = ``;
	inputEl.style.background = ``;
	inputEl.style.border = ``;
};

// ********************** //
// EVENT LISTENERS //
// ********************** //

// Change email input field opacity:
inputEl.addEventListener(`click`, function (e) {
	e.preventDefault();

	inputEl.style.opacity = 1;
});

// Validate email - 1) Successful email ; 2) Invalid email
subscribeBtn.addEventListener(`click`, function (e) {
	e.preventDefault();

	emailValidation(inputEl.value);
});

dismissBtn.addEventListener(`click`, dismiss);
