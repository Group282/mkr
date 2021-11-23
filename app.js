const next = document.getElementById('next');
const back = document.getElementById('back');
const reset = document.getElementById('reset');
const display = document.getElementById('display');
next.onclick=()=>{
   const prev =display.innerText;
    display.innerText=Number(prev)+1
};
back.onclick=()=>{
   const prev =display.innerText;
    display.innerText=Number(prev)-1
};
reset.onclick=()=>{
    display.innerText=Number(0);
};