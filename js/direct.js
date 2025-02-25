// Get the elements with class="column"
var elements = document.getElementsByClassName( "column");
// Declare a loop variable
var i;
var j;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.color = "transparent";
    elements[i].style.outline = "transparent";
    elements[i].style.visibility = "hidden";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.color = "black";
    elements[i].style.outline = "solid 2px black";
    elements[i].style.visibility = "visible";
  }
}

// White View
function whiteView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.color = "white";
    elements[i].style.outline = "solid 2px white";
    elements[i].style.visibility = "visible";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}