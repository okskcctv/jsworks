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

let show = false;
let view = document.querySelector("#view");
let detail = document.querySelector("#detail");
view.addEventListener("click", function(){
    if(!show){
        detail.style.display = "block"
        view.innerText = "상세 설명 닫기"
        show = true;
    }
    else{
        detail.style.display = "none"
        view.innerText = "상세 설명 보기"
        show = false;
    }
});

/* view.addEventListener("click", myDisplay);

function myDisplay(){
    if(!show){
        detail.style.display = "block";
        view.innerHTML = "상세 설명 닫기"
        show = true;
    }
    else{
        detail.style.display = "none";
        view.innerHTML = "상세 설명 보기"
        show = false;
    }
} */