document.addEventListener("DOMContentLoaded", function () {
    const screens = document.querySelectorAll(".screen");
    let currentScreenIndex = 0;

    document.getElementById("gotoScreen2").addEventListener("click", function () {
        screens[currentScreenIndex].style.transform = "translateX(-100%)"; // Slide out
        currentScreenIndex = 1;
        screens[currentScreenIndex].style.transform = "translateX(0)"; // Slide in
    });

    document.getElementById("gotoScreen1").addEventListener("click", function () {
        screens[currentScreenIndex].style.transform = "translateX(100%)"; // Slide out
        currentScreenIndex = 0;
        screens[currentScreenIndex].style.transform = "translateX(0)"; // Slide in
    });
});
