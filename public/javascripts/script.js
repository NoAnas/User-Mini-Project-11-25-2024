let hovItem = document.querySelector(".hovItem");
let myHov = document.querySelector(".myHov");

myHov.addEventListener("mouseenter", function () {
  hovItem.classList.add("active");
});
myHov.addEventListener("mouseleave", function () {
  hovItem.classList.remove("active");
});
