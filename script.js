

let btnUp = document.querySelector(".btnup")



// SCROLL UP

btnUp.addEventListener("click", scrollUp);

function scrollUp(){
    let currentScroll = document.documentElement.scrollTop

    if (currentScroll > 0) {
        window.scrollTo (0, 0);
    }
}


window.onscroll = function(){
   let scrool = document.documentElement.scrollTop;

   if (scrool > 250) {
        btnUp.style.transform = "scale(1)"
   } else if(scrool < 250){
        btnUp.style.transform = "scale(0)"
   }
}
 
