let add = document.getElementById("increase")
let sub = document.getElementById("reduce")
let res = document.getElementById("reset")
let onum = document.getElementById("num")

function checkcolor(){
    if(onum.innerHTML < 0){
        onum.style.color = "red"
    }
    else if(onum.innerHTML > 0){
        onum.style.color = "green"
    }
    else{
        onum.style.color = "black"
    }
}

function addition(){
    onum.innerHTML = Number(onum.innerHTML) + 1;
    checkcolor();
}

function substraction(){
    onum.innerHTML = Number(onum.innerHTML) - 1;
    checkcolor();
}

function reset(){
    onum.innerHTML = 0;
    checkcolor();
}

add.addEventListener("click",addition)
sub.addEventListener("click",substraction)
res.addEventListener("click",reset)