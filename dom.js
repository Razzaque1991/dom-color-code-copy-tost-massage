 

window.onload=()=>{
manush();
}


function color() {
    const red= Math.floor(Math.random()*255);
    const green= Math.floor(Math.random()*255); 
    const blue= Math.floor(Math.random()*255);
return `rgb(${red},${green},${blue})`
}



function manush() {
   
    const btn=document.getElementById("change-btn");
    const background=document.getElementById("main-div");
    btn.addEventListener("click",function(){
        const bg=color();
        background.style.backgroundColor= bg;
    });
}









 
//  window.onload=()=>{
//     main();
//  }

// function generateRGBcolor(){
//     const red =  Math.floor(Math.random()*255)
//     const green = Math.floor(Math.random()*255)
//     const blue =  Math.floor(Math.random()*255)

//     return 'rgb(${red},${green},${blue})'
// }

// function main(){
//      const man = document.getElementsByClassName("main-div");
//      const button = document.getElementsByClassName("btn");
//       man.style.backgroundColor=generateRGBcolor();
// }