const fullName = document.getElementById("fullName");
// const warning1 = document.querySelector(".warning1");

const email = document.getElementById("email");
// const warning2 = document.querySelector(".warning2");

const password = document.getElementById("password");
// const warning3 = document.querySelector(".warning3");

const confirmPassword = document.getElementById("confirmPassword");
// const warning4 = document.querySelector(".warning4");
const warning5 = document.querySelector(".warning5");

const terms = document.getElementById("terms");
const warning6 = document.querySelector(".warning6");

function validateForm(e) {
    e.preventDefault();
    const fullName_content = fullName.value;
    const email_content = email.value;
    const password_content = password.value;
    const confirmPassword_content = confirmPassword.value;
    const terms_content = terms.checked;

    if (fullName_content === "") {
        fullName.classList.add("invalid");
    };
    fullName.addEventListener("input", () => {
    fullName.classList.remove("invalid");
    });

    if (email_content === "") {
       email.classList.add("invalid");
    };
    email.addEventListener("input", () => {
    email.classList.remove("invalid");
    });

    if (password_content === "") {
       password.classList.add("invalid");
    };
    password.addEventListener("input", () => {
    password.classList.remove("invalid");
    });
    if (confirmPassword_content === "") {
        confirmPassword.classList.add("invalid");
    };
    confirmPassword.addEventListener("input", () => {
    confirmPassword.classList.remove("invalid");
    });
    if (password_content !== confirmPassword_content) {
        warning5.style="display:block;"
    }
    else {
        warning5.style="display:none;"
    };
    if (!terms.checked) {
        warning6.style.display = "block";
        terms.style = "border-color:red;";
    } else {
        warning6.style.display = "none";
        terms.style.outline = "none";
    };
    terms.addEventListener("change", () => {
        if (terms.checked) {
            warning6.style.display = "none";
            terms.style = "border-color: grey;";
        }
    });

};

function toggleAllPasswords() {
    const passwordFields = document.querySelectorAll(".pw-field");
    const toggleLink = document.getElementById("multiToggle");
    const isPassword = passwordFields[0].type === "password";

    passwordFields.forEach(field => {
        field.type = isPassword ? "text" : "password";
    });
    toggleLink.innerText = isPassword ? "Hide Passwords" : "Show Passwords";
};





// Method without changing back to normal
// if (fullName_content === "") {
//     warning1.style = "display:block;"
//     fullName.style = "border-color:red;"
// }
// if (email_content === "") {
//     warning2.style = "display:block;"
//     email.style = "border-color:red;"
// }
// if (password_content === "") {
//     warning3.style = "display:block;"
//     password.style = "border-color:red;"
// }
// if (confirmPassword_content === "") {
//     warning4.style = "display:block;"
//     confirmPassword.style = "border-color:red;"
// }