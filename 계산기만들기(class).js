
const buttons = document.querySelectorAll('button');
const inputs = document.querySelector('input'); // 버튼과 input 태그 변수에 담기
console.log(buttons); //콘솔에 찍어서 어떻게 나오는지 확인
console.log(inputs);





class Calculator {
    constructor(result) { 
        this.result = result;
        this.appendthing = ''; //''
    };

    appendNumber(number) {
        this.appendthing += number//숫자를 연속적으로 쓰면 추가되어야하므로
    };

    appendOper(operator) {
        this.appendthing += operator
        
    };

    allclear(){
        this.appendthing = ''; //''
        this.result.value = 0;
    };

    

    estimate(){ 
        // var x = /[^0-9]/g;
        // this.result.value = this.result.value.replace(x);  
        try{
            this.appendthing = eval(this.appendthing); 
        } catch (err) {
            this.appendthing = '';
            this.result.value = 0;
            alert("수식에 맞게 입력하세요.");
        };
        
        // console.log(this.result.value);
        //자체적으로 수식으로 변환하여 계산.. 별로 좋은 함수는 아님
        // if (this.appendthing[0] == ("+","-","*","/")) {
        //     this.appendthing = '';
        //     this.result.value = 0;
        // };
    
    };
    
    
    update(){
        this.result.value = this.appendthing;
        
        console.log(this.result.value);
    };
};

// function refine(str){
//         str = Number(str.replace(/[^0-9]/g, ''));
//         return str;
//     }

// let str = "as59kjnold81";
// console.log(refine(str));
// console.log(str);
// console.log(typeof(str));


const calculator = new Calculator(inputs); //inputs를 매개변수로 새로운 인스턴스 생성



//forEach 함수 사용, 인자로 addEventListener메소드를 사용하는 함수를 받음.
//addEventListener("click", function(event){});
//인자에서 function안에 switch문 사용
buttons.forEach(function(buttons) {
     buttons.addEventListener('click', function(){
        switch(buttons.dataset.type) {
            //자바스크립트는 DOM 생성 시점에 "data-" 로 시작하는 속성들을 하나로 모아 "dataset" 맵(Map)으로 따로 모아서 관리.
        //DOM 접근 : 엘리먼트노드.dataset.데이터셋속성이름
            case 'operator':
                calculator.appendOper(buttons.innerText);//버튼요소와 그 자손노드의 렌더링된 텍스트콘텐츠
                calculator.update();
                break
            case 'ac':
                calculator.allclear();
                break
            case 'enter':
                calculator.estimate();
                calculator.update();
                break
            default:
                calculator.appendNumber(buttons.innerText); 
                calculator.update();
                break
        }
        
     })
});

// function Calculator(){
//     if (operator == '+') {
//         result.value = n1 + n2;
//         console.log(result.value);
//     } else if (operator == '-') {
//         $result.value = n1 - n2;
//         console.log(result.value);
//     } else if (operator == '*') {
//         $result.value = n1 * n2;
//         console.log(result.value);
//     } else if (operator == '/') {
//         $result.value = n1 / n2;
//         console.log(result.value);
//     }
// }
