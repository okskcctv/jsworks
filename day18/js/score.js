// let score = [80, 70 ,50, 75, 85];

let score = [
    [80, 70],
    [90, 60],
    [70, 70],
    [100, 90],
    [80, 35]
];

let korSum = 0, mathSum = 0;
let korAvg = 0.0, mathAvg = 0.0;

// 과목별 점수 합계
for(let i=0;i<score.length;i++){
    korSum += score[i][0];
    mathSum += score[i][1];
}

// 과목별 저수 평균
korAvg = korSum / score.length;
mathAvg = mathSum / score.length;

document.write("국어 총점 : " + korSum + "<br>");
document.write("수학 총점 : " + mathSum + "<br>");
document.write("국어 평균 : " + korAvg + "<br>");
document.write("수학 평균 : " + mathAvg);