// 제목 애니메이션
let mainText = document.querySelector("h1");

window.addEventListener("scroll", function(){
    let value = this.window.scrollY;
    console.log(value);

    if(value > 300){
        mainText.style.animation = "slideOut 2s ease-in forwards";
    }
    else{
        mainText.style.animation = "slideIn 2s ease-out"
    }
});