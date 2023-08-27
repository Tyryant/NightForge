const computerScreen = document.querySelector(".screen");
const interval = 5;
const computerMonitor = document.querySelector(".computerMonitor");
const tempStorage = computerScreen.innerHTML;
const hintBlock = document.getElementById("hintBlock");

function clearScreen() {
    computerScreen.innerHTML = "";
}

function generateText() {
    computerScreen.innerHTML = tempStorage;
    let content = computerScreen.innerHTML.trim();
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < content.length) {
            computerScreen.innerHTML = content.substr(0, index);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);
}

function toggleMonitorLight() {
    if (computerMonitor.classList.contains("turnOn")) {
        computerMonitor.classList.remove("turnOn");
        setTimeout(() => {
            computerMonitor.classList.add("turnOn");
        }, 1000);
    } else {
        computerMonitor.classList.add("turnOn");
        computerScreen.classList.remove("noAnimation");
    }
}

function turnScreenOn() {
    clearScreen();
    toggleMonitorLight();
    setTimeout(() => {
        generateText();
    }, 50);
}

function turnScreenOff() {
    if (computerScreen.classList.contains("noAnimation")) {
        turnScreenOn();
    } else {
        clearScreen();
        computerMonitor.classList.remove("turnOn");
        computerScreen.classList.add("noAnimation");
    }
}

function hoverHints(x) {
    if (x.id == "startOrder") {
        let hint = "Get started on a new order.";
        hintBlock.innerHTML = hint;
    } else if (x.id == "endOrder") {
        let hint = "Check out a finalized order.";
        hintBlock.innerHTML = hint;
    } else if (x.id == "reboot") {
        let hint = "Reboots the terminal. May be faster than a full shutdown.";
        hintBlock.innerHTML = hint;
    }
}

function startOrder() {
    console.log("start order");
}
function endOrder() {
    console.log("end order");
}

// Call the function to start the animation
turnScreenOn();