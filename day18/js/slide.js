window.onload = function(){
    let picture = ["./images/coffee-blue.jpg", "./images/coffee-gray.jpg", "./images/coffee-pink.jpg"];
    let picIdx = 0;

    showSlide();

    function showSlide(){
        let pic = document.getElementById("pic");
        pic.src = picture[picIdx];
        picIdx++
        if(picIdx === picture.length)
            picIdx = 0;
        setTimeout(showSlide, 2000); // 콜백 함수 (부모함수를 재 호출하고 호출시 괄호는 없음)
    }
}