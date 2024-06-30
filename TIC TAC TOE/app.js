let boxes=document.querySelectorAll(".box");
let trunO=true;
let winner = document.getElementById("player");

const winningPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6] // Diagonal top-right to bottom-left
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(trunO){
            box.innerText="O";
            trunO=false;
        }
        else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;

        checkWin();
    })

});
function disabler(){
    for(let box of boxes){
        box.disabled=true;
    }
}
function checkWin(){
    for (pattern of winningPatterns){
        let pos1=boxes[pattern[0]]. innerText;        
        let pos2=boxes[pattern[1]]. innerText;        
        let pos3=boxes[pattern[2]]. innerText; 
        if( pos1!='' &&pos2!='' &&pos3!=''){
            if (pos1==pos2 && pos2==pos3){
                winner.innerText ="Winner is " + pos1;
                disabler(); 
            }
        }
    }
}

