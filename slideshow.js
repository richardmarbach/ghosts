const gallery = document.getElementById("slideshow");
const items = gallery.querySelectorAll(".slide").length;
const width = gallery.scrollWidth / items;

let currentItem = gallery.scrollLeft / width;

const next = document.getElementById("next");
const prev = document.getElementById("prev");

gallery.focus();

function move(evt) {
  switch (evt.key) {
    case "ArrowUp":
    case "ArrowLeft":
      moveLeft();
      evt.preventDefault();
      break;
    case "ArrowDown":
    case "ArrowRight":
      moveRight();
      evt.preventDefault();
      break;
  }
}

function moveLeft() {
  currentItem -= 1;
  gallery.scrollBy({ left: -width, behavior: "smooth" });
  requestAnimationFrame(updateArrows);
}

function moveRight() {
  currentItem += 1;
  gallery.scrollBy({ left: width, behavior: "smooth" });
  requestAnimationFrame(updateArrows);
}

function updateArrows() {
  if (currentItem === 0) {
    hide(prev);
  } else {
    show(prev);
  }

  if (currentItem === items - 1) {
    hide(next);
  } else {
    show(next);
  }
}

function hide(element) {
  element.style.visibility = "hidden";
}

function show(element) {
  element.style.visibility = "visible";
}

updateArrows();

const element = document.scrollingElement || document.documentElement;

document.addEventListener("keydown", move);
prev.addEventListener("click", moveLeft);
next.addEventListener("click", moveRight);
