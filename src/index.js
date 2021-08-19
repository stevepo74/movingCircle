// KEYS
// ArrowLeft was not made up
// Switch
const circle = document.querySelector(".circle");
let xAxis = 0;
let yAxis = 0;

//function for listening out to the entire document for left arrow key being pressed
function control(event) {
  switch (event.key) {
    case "ArrowLeft":
      console.log("pressed left");
      xAxis -= 50;
      circle.style.left = xAxis + "px";
      break;
    case "ArrowRight":
      console.log("pressed right");
      xAxis += 50;
      circle.style.left = xAxis + "px";
      break;
    case "ArrowUp":
      console.log("pressed up");
      yAxis -= 50;
      circle.style.top = yAxis + "px";
      break;
    case "ArrowDown":
      console.log("pressed down");
      yAxis += 50;
      circle.style.top = yAxis + "px";
      break;
    default:
      console.log("key not recognized");
  }
}

document.addEventListener("keydown", control);
