// let add= document.querySelector("h2");
// console.dir(add.innerText);

// add.innerText += " from apna college student"

// let box=document.querySelectorAll(".box");
// console.dir(box)

// box[0].innerText="new value1"
// box[1].innerText="new value2"
// box[2].innerText="new value3"

// let newButton=document.createElement("Button");
// newButton.innerText="Click me"

// newButton.style.backgroundColor="red";
// newButton.style.color="White"

// document.querySelector("body").prepend(newButton)

// //q2

// let para=document.querySelector("p")

let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let nGameBtn= document.querySelector("#win");
let gameWin = document.querySelector(".game-win")
let msg= document.querySelector("#msg");
let turn0=true;
count=0;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
      gameWin.classList.add("hide")

}

boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerText="O";
            turn0=false
        }else{
             box.innerText="X";
            turn0=true

        }
        box.disabled=true;
         count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
        checkWinner();
        
     });
});
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        
      box.innerText=""
    }
}

const showWinner =(Winner)=>{
   msg.innerText=`congratulations, winner is ${Winner}`
   gameWin.classList.remove("hide")
disableBoxes();
}


let checkWinner=()=>{
    for(let pattern of winPattern ){
        
        let pos1=boxes[pattern[0]].innerText
        let pos2= boxes[pattern[1]].innerText
        let pos3= boxes[pattern[2]].innerText

        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                
                showWinner(pos1);
                
            }
        }
        
        
    }
}

resetbtn.addEventListener("click", resetGame);
nGameBtn.addEventListener("click", resetGame);
