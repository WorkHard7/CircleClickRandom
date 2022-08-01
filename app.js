/* SELECTORS */

const circle = document.querySelector(".circle");
let displayTimer = document.querySelector("p");
const newElemContainer = document.querySelector(".newElemContainer");
const containerCircle = document.querySelector(".container-circle");

let time = 0;

// const colors = ["gray", "green", "orange", "yellow", "blue"];

let runTimer = window.addEventListener("load", (e) => {
  // when page finishes to load, we start a timer
  displayTimer.innerHTML = setInterval(() => {
    time += 0.01; // each 10 mls the time is going up by 0.01

    displayTimer.innerHTML = time.toFixed(3); // displayTimer variable equals with time value
  }, 10);
});

/* Function for creating new element on click */

const newElem = () => {
  let newItem = document.createElement("p");
  newItem.style = "animation: animate 1s forwards";
  newItem.innerHTML = displayTimer.innerHTML; // assigning to new element "p" -> the displayTimer value

  let randomColor = Math.floor(Math.random() * 16777215).toString(16); // generating random hex colors
  circle.style.backgroundColor = "#" + `${randomColor}`; // changing div background-color on click

  newElemContainer.append(newItem);
};

/* Circle triggering */

circle.addEventListener("click", (e) => {
  time = 0; // resetting the time variable
  newElem();

  /* Generating random position of the div */

  console.log(
    (circle.style.top =
      Math.round(
        Math.random() * (containerCircle.offsetHeight - circle.offsetHeight)
      ) + "px")
  );

  console.log(
    (circle.style.left =
      Math.round(
        Math.random() * (containerCircle.offsetWidth - circle.offsetWidth)
      ) + "px")
  );
});
