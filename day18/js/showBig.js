// 큰사진 선택
let bigPic = document.querySelector("#cup");

// 작은사진 선택
let smallPic = document.querySelectorAll(".small");

// onclick 이벤트
for(let i=0;i<smallPic.length;i++){
    // smallPic[i].onclick = showBig;
    smallPic[i].addEventListener("click", showBig);
}

function showBig(){
    let newPic = this.src; // 이벤트가 일어난 대상의 속성값
    bigPic.setAttribute("src", newPic);
}