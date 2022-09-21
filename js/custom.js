// Dynamic font size based on outer div
flexFont = function () {
  var divs = document.getElementsByClassName("flexFont");
  for (var i = 0; i < divs.length; i++) {
    var relFontsize = divs[i].offsetWidth * 0.18;
    divs[i].style.fontSize = relFontsize + "px";
  }
};

var container = document.querySelector("#js__itemList");
var pckry = new Packery(container, {
  // Options
  itemSelector: ".item",
  gutter: 8,
  stamp: ".stamp",
});

var selectedItem = "";

// Circle Grow
function circleGrow(e) {
  if (!e.classList.contains("item")) {
    return;
  }

  if (selectedItem != e.id) {
    selectedItem = e.id;

    let widthCircle;
    let heightCircle;

    e.classList.toggle("grid-item--large");

    if (e.classList.contains("one-time-increase")) {
    } else {
      widthCircle = parseFloat(e.style.width) + 30;
      heightCircle = parseFloat(e.style.height) + 30;
      e.classList.add("one-time-increase");
    }

    e.style.width = widthCircle + "px";
    e.style.height = heightCircle + "px";

    setTimeout(() => {
      // pckry.layout();
      console.log("innn");
      flexFont();
    }, 250);
  }
}

// Circle Shrink
function circleShrink(e) {
  let widthCircle;
  let heightCircle;

  e.classList.toggle("grid-item--large");

  if (e.classList.contains("one-time-increase")) {
    widthCircle = parseFloat(e.style.width) - 30;
    heightCircle = parseFloat(e.style.height) - 30;
    e.classList.remove("one-time-increase");
  }

  e.style.width = widthCircle + "px";
  e.style.height = heightCircle + "px";

  setTimeout(() => {
    // pckry.layout();
    console.log("outttt");
    flexFont();
  }, 250);

  selectedItem = "";
}

window.onload = function (event) {
  flexFont();
};
window.onresize = function (event) {
  flexFont();
};
