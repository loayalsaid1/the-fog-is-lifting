document.addEventListener("DOMContentLoaded", function () {
  function closeAlert() {
    var alertContainer = document.getElementById("alert-container");
    alertContainer.style.display = "none";
  }

  function toggleContent() {
    var content = document.querySelector(".collapse-content");
    content.style.display = content.style.display === "none" ? "block" : "none";
  }
});
