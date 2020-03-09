const button = document.querySelector("button");
const link = document.querySelector("a");
button.onclick = function() {
  console.dir("Click");
};

// button.addEventListener("click", function(e) {
//   console.log(e);
// });

function clickHandler(e) {
  e.preventDefault();
  console.log("click");
}

link.addEventListener("click", clickHandler);

//link.removeEventListener("click", clickHandler);
