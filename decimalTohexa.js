window.onload=()=>{
manush();
}

function color() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}

function manush() {
   
    const btn=document.getElementById("change-btn");
    const background=document.getElementById("main-div");
    const display=document.getElementById("output");
    
    btn.addEventListener("click",function(){
        const bg=color();
        background.style.backgroundColor= bg;
        display.value=bg;
    });
}

