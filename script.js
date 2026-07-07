document.querySelector("#current-year").textContent = new Date().getFullYear();
const loginBtn = document.getElementById("loginBtn");
const loginDialog = document.getElementById("loginDialog");

const signupDialog = document.getElementById("signupDialog");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});

loginBtn.addEventListener("click", () => {
    loginDialog.showModal();
});

showSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginDialog.close();
    signupDialog.showModal();
});

showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupDialog.close();
    loginDialog.showModal();
});

document.getElementById("closeLogin").onclick = () => {
    loginDialog.close();
};

document.getElementById("closeSignup").onclick = () => {
    signupDialog.close();
};

