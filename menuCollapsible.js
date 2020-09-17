
var coll = document.getElementsByClassName("button_collapsible");
var ct;

for (ct = 0; ct < coll.length; ct++) {
  coll[ct].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
};
