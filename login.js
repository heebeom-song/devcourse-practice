// vas vs let vs const
function compareVariable(){
    let num1 = 10;
    const num2 = 30;

    alert('num2 : ' + num2);
    
}

// 아이디 란에 입력된 값을 팝업창에 띄우기
function popID(){
    //id란에 입력될 값을 idValue라는 변수를 선언하여 저장함.
    let idValue = document.getElementById('txt_id').value;

    // 조건문으로 id란이 비웠을 때는 입력해달라는 문구를 띄움!
    if(!idValue){
        alert('아이디를 입력해주세요.');
    }
    else{
        alert(idValue);
    }

}

// 나만의 함수 만들고, 버튼 클릭시 함수 호출하기
function myFunction(){
    alert('1');
    alert('2');
    alert('3');
}