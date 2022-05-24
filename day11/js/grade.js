let score;
let grade;
let errorCheck = false;
score = Number(prompt("학점을 입력해 주세요.", "0~100"));


if(score < 0 || score > 100){
    errorCheck = true;
    document.write("잘못된 입력입니다. 점수는 0~100사이의 수 입니다.<br> 입력하신 점수는 " + score + "입니다.");
}
else if(score < 60){
    grade = 'F';
}
else if(score >= 60 && score < 70){
    grade = 'D';
}
else if(score >= 70 && score < 80){
    grade = 'C';
}
else if(score >= 80 && score < 90){
    grade = 'B';
}
else if(score >= 90 &&  score <= 100){
    grade = 'A';
}
else{
    errorCheck = true;
    document.write("숫자만을 입력하여 주시기 바랍니다.<br>");
}
if(errorCheck){
    
}
else{
    document.write("학점은 <span class='accent'>" + grade  + "</span>입니다.");
}