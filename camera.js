document.addEventListener("DOMContentLoaded", function() {
    const backgroundLinks = document.querySelectorAll(".camButton");
    const body = document.getElementById("cameraView");
  
    backgroundLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const image = this.getAttribute("data-image");
        body.style.backgroundImage = "url(" + image + ")";
  
        // Optionally, you can clear the background image if needed
        // by setting an empty string: body.style.backgroundImage = "";
      });
    });
  });