let count = 0;
        let N = prompt("몇의 배수를 찾을까요?", "3");
        if(N === null){
            location.reload();
        }
        else if(Number(N) === 0){
            document.write("<h1>0의 배수가 있겠냐!!<h1>");
        }
        else if(Number(N) < 0){
            document.write("<b>양의 정수로 입력해 주세요.</b>");
        }
        else{
            N = Number(N);
            document.write("<h2>" + N + "의 배수 찾기</h2>")

            let num = prompt("몇까지 " + N + "의 배수를 찾을까요?", "100");
            if(num === null){
                location.reload();
            }
            else if(num < N){
                document.write(N + "의 배수인데 최소한 " + N + "보다는 큰 수를 입력해주세요...");
            }
            else{
                num = Number(num);
                for(let i=1; i<=num; i++){
                    if(i%N === 0){
                        document.write(i + ", ");
                        count++;
                    }
                }
                document.write("<br><br><span>" + num + "까지의 " + N + "의 배수의 개수 : " + count + "</span>");
            }
        }