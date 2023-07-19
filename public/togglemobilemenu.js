function menuVisible() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "column") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
