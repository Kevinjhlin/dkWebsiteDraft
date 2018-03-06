$(document).ready(function() {
  const dormaTitle = $("#dormaTitle");
  const kabaTitle = $("#kabaTitle");
  const titleImg = $("#titleImg");
  const titleDesc = $("#titleDesc");

  titleDesc.hide();
  dormaTitle.hide();
  kabaTitle.hide();
  titleImg.hide().fadeIn(4000);
  dormaTitle.fadeIn(2000);
  kabaTitle.fadeIn(3000, function() {
    titleDesc.slideDown(1500);
  });

  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
