let customNum = Number(prompt("입장객은 몇 명인가요?"));
let colNum = Number(prompt("한 줄에 몇 명 앉나요?"));
let rowNum;

if(customNum % colNum === 0){
    rowNum = parseInt(customNum / colNum);
}
else{
    rowNum = parseInt(customNum / colNum) + 1;
}

document.write("<table>");
for(let i=0; i<rowNum; i++){
    document.write("<tr>");
    for(let j=1; j<=colNum; j++){
        let seatNum = i * colNum + j;
        if(seatNum > customNum)
            break;
        document.write("<td>좌석" + seatNum + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");