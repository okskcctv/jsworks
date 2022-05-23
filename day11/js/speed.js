const RATE_KPH_MPH = 1.609; // 변환율
let mph, kph;

//문자로 받아들이기 때문에 Number를 통해 변환해줌 (안해줘도 계산은 되긴함)
kph = Number(prompt("당신의 구속을 입력하세요(km/h) : ", "100"));

mph = kph / RATE_KPH_MPH;

document.write(kph + 'km는 ' + mph.toFixed(3) + 'mile입니다.<br>');
// mph.toFixed 는 소숫점 둘째자리까지 보정