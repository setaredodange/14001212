const increaseBtn = document.querySelector(".increase")
const count = document.querySelector (".count");
const decreaseBtn = document.querySelector (".decrease");

increaseBtn.addEventListener("click", () => {
    count.innerHTML = parseInt(count.innerHTML ) +1;
    changeColorBaseoncount();
 
})

decreaseBtn.addEventListener("click", () => {
    count.innerHTML = parseInt(count.innerHTML ) -1;
    changeColorBaseoncount();
})

function     changeColorBaseoncount() {
    if(count.innerHTML >= 5) {
        document.body.style.backgroundColor= "green";

    } else if (count.innerHTML <= -5) {
        document.body.style.backgroundColor= "red";
  
    }
    else {
        document.body.style.backgroundColor= "yellow";
    }
}






