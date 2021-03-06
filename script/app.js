(() => {
  //sub
  console.log('fired!');

// const is short for constant = variables taht shouldnt change

const piecesBoard = document.querySelector(".puzzle-pieces"),
      puzzleBoard = document.querySelector(".puzzle-board"),
      puzzleSelectors = document.querySelectorAll("#buttonHolder img")
      dropZones = document.querySelectorAll(".drop-zone");

let draggablePieces = piecesBoard.querySelectorAll("img");

//arraws have are inexed and start at 0
const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

//debugger;

function switchImage() {
	console.log(this);
  //grab the corresponding bcg images
  //and get it from the images folder (backGround1.jog as an example)
  let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;
  //set the bcg image style
  puzzleBoard.style.backgroundImage = `url(${bgImage})`;

  //debugger;
  //GET THE PIECES BACK TO WHERE THEY BELONG
  dropZones.forEach(zone => {
    //if a zone has a child, then grab it and put it back on the left hand side.
    if (zone.childElementCount == 1) {
      piece = zone.firstElementChild;
      piecesBoard.appendChild(piece);
    }
  })
//work on switching the right-hand images so that they match the buttons at the bottom.
draggablePieces.forEach((image, index) => {
  // log the image and the currnt index
  //console.log(image, index);

  //try to change each image source
  image.src = `images/${imageNameArray[index]}${this.dataset.puzzleref}.jpg`;
  //debugger;
});
}
puzzleSelectors.forEach(thumbnail => thumbnail.addEventListener("click", switchImage));


//loop through the draggable images
//this lets us drag stuff => not that hard
draggablePieces.forEach(piece => {
	piece.addEventListener("dragstart", function(e) {
		console.log('draggin...');

	//the dataTransfer has two methods, a setter and getter
	//set data on the drag, and retreive it on the drop
			e.dataTransfer.setData("text/plain", this.id);
		});
	});

//this is the dragover and drop functionality => this is for the drop zones
dropZones.forEach(zone => {
	//allow user to drag over an element
	zone.addEventListener("dragover", function(e) {
		e.preventDefault();
		console.log("dragged sumpin over me");
});

//allow a user to drop an element
zone.addEventListener("drop", function(e) {
	e.preventDefault();
	console.log("you dropped sumpin on me");


//check to see if the element we're dropping on has any children
//(the childElementCount property).
//If it does, exit the function with a return statement (nothing below the return will run)

//  YOU CAN'T HAVE TWO PIECES ON THE SAME SPOT
  if (this.childElementCount == 1) {
    console.log('one-child family, go away!!!');
    return; }

	let draggedElement = e.dataTransfer.getData("text/plain");
	console.log('you dragged: ', draggedElement);

	//add the image to the drop zone
	e.target.appendChild(document.querySelector(`#${draggedElement}`));
	});
})



})();
