"use strict"


const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    const message = "All fields must be filled!";

    event.preventDefault();
    const {
        elements: { email, password},
    } = event.currentTarget;
    if (email.value === "" && password.value === "") {
        alert(message);
    }
    const emailUser = email.value;
    const passwordUser = password.value;
    const login = {
        email: emailUser,
        password: passwordUser,
    };

    console.log(login);

    form.reset();
});