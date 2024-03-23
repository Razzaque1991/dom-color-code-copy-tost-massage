
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
        const copybtn=document.getElementById("copybtn");
        const tostdiv=document.getElementById("tost-div")
        
        btn.addEventListener("click",function(){
            const bg=color();
            background.style.backgroundColor= bg;
            display.value=bg;
        });
        
        copybtn.addEventListener("click", function () {
            display.select();
            navigator.clipboard.writeText(display.value);
            // Creating new div for toast message
            var tostMass = document.createElement("div");
            tostMass.classList.add("tost-class");
            tostMass.id = "tost-div";
            tostMass.innerHTML = "Copied <br> " + display.value;
            document.body.appendChild(tostMass);
            setTimeout(()=>{
                tostMass.remove();
            },2000)
        });

    }

 
    