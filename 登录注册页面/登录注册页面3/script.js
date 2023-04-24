const container = document.querySelector(".container");
const signUpLink = document.querySelector(".signup-link");
const signInLink = document.querySelector(".signin-link");

signUpLink.addEventListener("click", () => {
  container.classList.add("navigate");
});

signInLink.addEventListener("click", () => {
  container.classList.remove("navigate");
});
