let member = prompt("전체 응모자 수 :"); // 응모자 수
let winner = prompt("당첨자 수 :"); // 당첨자 수
let n = new Array();
// let count = 0; // 무한 반복 방지 상수

if(member == null || winner == null){
    document.write("<p>입력이 취소되었습니다.</p>");
}
else if(member < winner){
    document.write("<p>응모자 수가 당첨자 수보다 적습니다.<br>모두 당첨입니다.</p>");
}
else if(member == winner){
    document.write("<p>");
    for(let i=0; i<member; i++){
        document.write((i + 1) + "번 ");
    }
    document.write("</p>");
    document.write("<p>모두 당첨입니다.</p>");
}
else{
    document.write("<p>전체 응모자수 : " + member + "명</p>");
    document.write("<p>당첨자 : ");

    for(let i=0; i<winner; i++){
        let pickedOne = Math.floor(Math.random()*member) + 1;
        n[i] = pickedOne;
        for(let j=0; j<i; j++){
            // count++;
            if(n[j] == n[i])
                i--;
            /* if(count > 50){
                break;
            } */
        }
    }

    for(let i=0; i<n.length; i++){
        document.write(n[i] + "번 ");
    }
    document.write("</p>");
}