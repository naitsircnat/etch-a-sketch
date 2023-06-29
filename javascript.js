function createGrids(numberOfGrids) {

const containerElement=document.getElementById('gridsContainer');

for (let i=0; i<numberOfGrids; i++) {
    
    const grid=document.createElement('div');

    grid.style.border='1px solid black';

    grid.style.width= (800/Math.sqrt(numberOfGrids)) + "px";

    containerElement.appendChild(grid);

    grid.classList.add("grid");

    grid.addEventListener('mouseover', function handleMouseOver(){
        grid.style.backgroundColor='black';
    });

}
}

createGrids(256);

function removeElements() {
   const grids=document.querySelectorAll('.grid');
   grids.forEach(grid=> {
    grid.remove();
   })
}

const button=document.getElementById("question");

button.addEventListener("click", function() {
    var userInput=prompt ("How many squares per side?", 16)
    var userInputInteger=parseInt(userInput);
    if (userInputInteger > 100) {
        userInputInteger=100;
    }
    numberOfGrids=userInputInteger*userInputInteger;
    removeElements();
    createGrids(numberOfGrids);
}) 
















