document.addEventListener("DOMContentLoaded", function() {
  var accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function(item) {
    item.addEventListener("click", function() {
      this.classList.toggle("active");

      var body = this.querySelector(".accordion-body");
      body.classList.toggle("show");
    });
  });
});
