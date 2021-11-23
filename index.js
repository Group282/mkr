const btns=document.querySelectorAll('.couter-btn');
btns.forEach(btn=>{
    btn.addEventListener('click',
    function(){
        const direction=this.dataset.direction;
        const inp=this.parentElement.querySelector('.couter-value');
        const currentValue=+inp.value
        let newValue;
        if(direction ==='plus'){
            newValue = currentValue+1;
        }
        else if(direction === 'minus'){
              newValue = currentValue -1;
        }
        else{
            newValue=0;
        }
        inp.value = newValue;
    })
})