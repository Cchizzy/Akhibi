const screen = document.getElementById("screen");
let button = document.querySelectorAll("button");

button.forEach((btn => {
    btn.addEventListener("click", function(){
        if(btn.innerText === "="){
            screen.innerText = eval(screen.innerText);
        }else if(btn.innerText === "x"){
            screen.innerText += "*";
        }else{
        screen.innerText += btn.innerText;
        }
    })
})
)
