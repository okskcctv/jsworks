let selectMenu = document.testForm.major;

function displaySelect(){
    let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
    alert(selectedText + "가 선택되었습니다.");
    
    // select option 속성의 value로 선택
    // let selectedText = document.getElementById("major").value;
    // alert(selectedText + "가 선택되었습니다.");
}