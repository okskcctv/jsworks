// 내장 함수
// 인코딩, 디코딩 함수
// 인코딩(한글 -> 16진수 유니코드)
let encodeStr = "자바스크립트";
// 한글은 에러가 발생할 수 있으므로 코드생성
console.log(encodeURIComponent(encodeStr));

// 디코딩(16진수 유니코드 -> 한글)
let decodeStr = encodeURIComponent(encodeStr);
console.log(decodeURIComponent(decodeStr));

// 숫자, 유한무한 값 판별
let num1 = "숫자";
if(!isNaN(num1)){
    console.log("숫자");
}
else{
    console.log("숫자 아님");
}

// 자바스크립트 코드 변경 함수
let str1 = " var num7 = 10";
let str2 = " var num8 = 20";

// var num7 = 10
eval(str1);
// var num8 = 20
eval(str2);
console.log(num7 + num8);