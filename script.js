let counterDisplay = document.querySelector('.counter-display');
let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');

let count = 0;

let counter = document.querySelector
('.counter');

updateDisplay();

increase.addEventListener("click",()=>{
    count++;
    updateDisplay();
    // if(count > 0){
    //     counter.style.color = 'red';
    // }
}) ;

decrease.addEventListener("click",()=>{
    count--;
    updateDisplay();
    // if(count < 0){
    //     counter.style.color = 'green';
    // }
});

reset.addEventListener("click", ()=>{
  count = 0;
  updateDisplay();
//   counter.style.color = 'black';
})

function updateDisplay(){
    counter.innerText = count;
    if(count > 0){
        counter.style.color = 'red';
    } else if(count < 0){
        counter.style.color = 'green';
    } else{
        counter.style.color = 'black';
    }
};

//updateDisplay();


// function changeColor(color){
//     document.increase.value.style.color = 'red';
// }
