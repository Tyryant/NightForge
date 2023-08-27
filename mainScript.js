document.addEventListener("DOMContentLoaded", function() {
    const screens = document.querySelectorAll(".screen");
  
    document.getElementById("gotoScreen2").addEventListener("click", function() {
      screens[0].style.display = "none";
      screens[1].style.display = "block";
    });
  
    document.getElementById("gotoScreen1").addEventListener("click", function() {
      screens[1].style.display = "none";
      screens[0].style.display = "block";
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const screens = document.querySelectorAll(".screen");
    let currentScreenIndex = 0;
  
    document.getElementById("gotoScreen2").addEventListener("click", function() {
      screens[currentScreenIndex].style.transform = "translateX(-100%)"; // Slide out
      currentScreenIndex = 1;
      screens[currentScreenIndex].style.transform = "translateX(0)"; // Slide in
    });
  
    document.getElementById("gotoScreen1").addEventListener("click", function() {
      screens[currentScreenIndex].style.transform = "translateX(100%)"; // Slide out
      currentScreenIndex = 0;
      screens[currentScreenIndex].style.transform = "translateX(0)"; // Slide in
    });
  });
  