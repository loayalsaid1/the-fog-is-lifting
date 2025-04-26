document.addEventListener("DOMContentLoaded", function () {
  function closeAlert() {
    var alertContainer = document.getElementById("alert-container");
    alertContainer.style.display = "none";
  }

  function toggleContent() {
    var content = document.querySelector(".collapse-content");
    content.style.display = content.style.display === "none" ? "block" : "none";
  }

  (function scrollNavHorizontally() {
    const nav = document.querySelector("header nav");
    nav.addEventListener("wheel", (e) => {
      e.preventDefault();
      nav.scrollLeft += e.deltaY;
    });
  })();
});
