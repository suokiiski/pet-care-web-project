const debounce = require("lodash.debounce");

window.onscroll = debounce(scrollFunction, 250);
const myButton = document.getElementById("myBtn");

myButton.addEventListener("click", onScrollToTop);

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    myButton.style.display = "block";
    myButton.classList.add("animate__bounceInDown");
    myButton.classList.remove("animate__bounceOutUp");
  } else {
    myButton.style.display = "none";
    myButton.classList.remove("animate__bounceInDown");
  }
}

function onScrollToTop() {
  myButton.classList.add("animate__bounceOutUp");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export default onScrollToTop;
