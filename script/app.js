(() => {
  //sub
  console.log('fired!');

// const is short for constant = variables taht shouldnt change

const piecesBoard = document.querySelector(".puzzle-pieces"),
      puzzleBoard = document.querySelector(".puzzle-board"),
      puzzleSelectors = document.querySelectorAll("#buttonHolder img")
      dropZones = document.querySelectorAll(".drop-zone");

let draggablePieces = piecesBoard.querySelectorAll("img");


//debugger;

function switchImage() {
	console.log(this);
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

	let draggedElement = e.dataTransfer.getData("text/plain");
	console.log('you dragged: ', draggedElement);

	//add the image to the drop zone
	e.target.appendChild(document.querySelector(`#${draggedElement}`));
	});
})



})();
