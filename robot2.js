const robot = require("robotjs");

// Function to simulate mouse left click and press ENTER
function clickAndEnter() {
    robot.mouseClick();
    robot.keyTap("enter");
}

// Loop to repeat the process until the program is closed
while (true) {
    clickAndEnter();
}
