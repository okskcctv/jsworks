let colN; // 열의 수 선언
let people = prompt("입장객은 몇 명인가요?"); // 입장객 수
if(people === null){
    window.close();
}
else{
    colN = prompt("한 줄에 몇 명 앉나요?"); // 열의 수
    if(colN === null){
        window.close();
    }
}
people = Number(people);
colN = Number(colN);
let rowN = parseInt(people / colN); // 행의 수
let count = 0; // 좌석 수

if(people % colN !== 0){ // 입장객 수가 열의 수로 나누어 떨어지지 않으면 행에 1을 더해줌 
    rowN += 1;
}
document.write("<table>");
for(let i=1; i<=rowN; i++){
    document.write("<tr>");
    for(let j=1; j<=colN; j++){
        count += 1;
        if(count > people) // 입장객 수 보다 좌석 수가 커지면 멈춤
            break;
        document.write("<td>좌석" + count + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");