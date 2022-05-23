/*
취학전 아동 1000원
초등학생 2000원
중.고등학생 2500원
일반인 3000원
*/


var age = 12;
var charge = 0; // 입장료
// 추가항목
age = Number(prompt('나이를 입력해주세요.', '00'));

if(age < 8){
    document.write("미취학 아동입니다.<br>");
    charge = 1000;
}
else if(age >= 8 && age < 14){
    document.write("초등학생입니다.<br>");
    charge = 2000;
}
else if(age >= 14 && age <20){
    document.write("중.고등학생입니다.<br>");
    charge = 2500;
}
// 추가항목
else if(age >= 65){
    document.write("노인 우대요금 대상입니다.<br>");
    charge = 1500;
}
else{
    document.write("일반인입니다.<br>");
    charge = 3000;
}
document.write("입장료는 <span class='accent'>" + charge + "원</span> 입니다.")