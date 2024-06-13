function earth(){

  let water = true;
  let gravity = 10;

  return function  (value) {
    gravity = value
    return [water, gravity];
  }

}

const ufo = earth()


// 화살표 함수로 변경

// function earth(){
 
//   let water = true;
//   let gravity = 10;
  
//   return  (value) => {
//     gravity = value;
    
//     return [water,gravity]
//   }
// }





const button = document.querySelector('button');

/* normal function */
// function handleClick(){

//   let isClicked = false;

  
//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
  
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked;
//   }

//   return inner;
// }

// IIFE
/* arrow function */
const handleClick = (() => {

  let isClicked = false;
  
  return () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
  
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick)


function state(init){
  let value = init;

  function read(){
    return value;
  }
  function write(newValue){
    value = newValue;
  }

  return [read, write]
}


const result = state(10)
const getter = result[0]
const setter = result[1]

// 클로저가 무엇인가용?
// 함수는 자신이 태어난 환경을 기억합니다.
// 가비지 컬렉터는 함수의 실행이 끝나면 모든 메모리를 수거해 간다는 건 알고 계시죠?
// 함수의 변수를 기억하기 위해 클로저를 사용합니다.

// 클로저란? 내부 함수가 외부변수에 대한 참조를 할 수 있는 환경을 제공해주는 함수입니다.