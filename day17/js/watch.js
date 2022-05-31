// 디지털 시계 구현
// setInterval(watch, 1000);

// function watch(){
//     const DATE = new Date();
//     let now = DATE.toLocaleTimeString(); // 시간 표시
//     document.getElementById("display").innerHTML = now;
// }

// 실행함수
setInterval(function watch(){
    const DATE = new Date();
    let now = DATE.toLocaleTimeString();
    document.getElementById("display").innerHTML = now;
}, 1000);