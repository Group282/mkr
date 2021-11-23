let firstname = document.querySelector('#firstname');
let regStr = /^[A-Za-z]+$/;
let list_flag = [false, false, false];
let demo = document.querySelector('#demo');
let button = document.querySelector('.main_input-submit');

firstname.addEventListener('keyup', (event) => {
  isOnly(event, firstname, regStr, 0);
});

function isOnly(event, element, reg, count) {
  if (reg.test(event.target.value)) {
    element.classList.remove("invalid");
    element.classList.add("valid");
    list_flag[count] = true;
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
    list_flag[count] = false;
  }
}

button.addEventListener('click', (event) => {
  if(list_flag[0] && list_flag[1] && list_flag[2]) demo.style.display = "inline";
  else demo.style.display = "none";
})

