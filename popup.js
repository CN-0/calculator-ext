document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("keypad").addEventListener('click',e=>{
        const display = document.querySelector('.result');
        if (!e.target.classList.contains("btn")) {
            return;
        }
        if(e.target.value==="equals"){
            display.innerHTML = eval(display.innerHTML)
        }else if(e.target.value==="clear"){
            display.innerHTML = 0
        }else{
            if(display.innerHTML === "0"){
            display.innerHTML = e.target.value
            }else{
            display.innerHTML = display.innerHTML + e.target.value
            }
        }
    },false)
},false)