const ratingForm = document.querySelector("#js-rating-form");
const radios = document.querySelectorAll("input[type='radio']");
var content = null;

radios.forEach(
  (radio) =>
    (radio.onclick = () => (content = radio.nextElementSibling.textContent))
);

ratingForm.onsubmit = (e) => {
  if (content === null) {
    e.preventDefault();
    window.alert("Please choose a rating!");
  } else {
    window.localStorage.setItem("rating", content);
  }
};
