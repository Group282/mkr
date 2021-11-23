
const nextButton = document.getElementById("next-btn");
const previewButton = document.getElementById("prev-btn");
const resetButton = document.getElementById("reset-btn");
const counterValue = document.getElementById("value-counter");


//counter for values
let counter = 0;
const addValue =()=>{
counterValue.innerHTML=++counter;
if(counter>100){
    counterValue.innerHTML=100;
    alert("Try again, count must be between 0-100")
}
}

const decreaseValue = () =>{
counterValue.innerHTML=--counter;
if(counter<0){
    counterValue.innerHTML=0;
    alert("Try again, count must be between 0-100")
}
}

const resetValue = () =>{
    counterValue.innerHTML=0;
    counter=0;
}


nextButton.addEventListener('click', addValue);
previewButton.addEventListener('click', decreaseValue);
resetButton.addEventListener('click', resetValue);
