let result;
let a = parseInt(prompt("첫번째 숫자를 입력해 주세요"));
let b = parseInt(prompt("두번째 숫자를 입력해 주세요"));

document.write("a는 " + a + ", b는" + b + " 입니다.<br>")

result = a + b;
document.write("합은 " + result + " 입니다.<br>");

if(a > b){
    result = a - b;
}
else{
    result = b - a;
}
document.write("차는 " + result + " 입니다.<br>");

result = a * b;
document.write("곱은 " + result + " 입니다.<br>");

if(a > b){
    result = a / b;
}
else{
    result = b / a;
}
document.write("큰 수를 작은 수로 나눈 몫은 " + parseInt(result) + " 입니다.<br>");

if(a > b){
    result = a % b;
}
else{
    result = b % a;
}
document.write("큰 수를 작은 수로 나눈 나머지는 " + result + " 입니다.<br>");