/* --------- */
/* Object    */
/* --------- */

/* global isObject */ // eslint 설정!
console.log(isObject);

const html = /* html */`
  <h1>Welcome</h1>
  <div class="first">할로할로</div>
`


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex : 10000,
  top : '50%',
  left : '50%',
  width : '60vw',
  maxWidth : 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid : 'user-id-dkfj@39*@',
  name : 'doopal',
  email : 'zidoopal2@gmail.com' ,
  isSignIn: false,
  permission: 'paid'  // paid, free
}


// 객체는 접근할 수 있는 방법이 2가지 있다!

// 객체의 어떤 값을 얻는 getter 

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.name = 'zidoopal');
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);

// 객체에게 값을 주는 setter 
console.log(authUser['permission']='free');


console.clear()

Object.prototype.nickName = '두팔'

// 객체 안에 키가 있는지 확인하는 방법
// (1-1) in 문
// 내가 갖고 있는게 아니라 내 조상꺼까지 확인해쥼
console.log('uid' in authUser)  // true

// (1-2) for..in
for(let key in authUser){
  console.log(key)
/* uid
name
email
isSignIn
permission
nickName */
}

console.clear()

for (let key in authUser){
  if({}.hasOwnProperty.call(authUser,key)){
    console.log(authUser[key])
    }
    }
    
    
    console.clear()
// 객체의 key 만을 모아서 배열을 반환하는 메서드
// Object.keys()
const keyList = Object.keys(authUser)
console.log(keyList);

// 객체의 value 만을 모아서 배열을 반환하는 메서드
// Object.values() 
const valueList = Object.values(authUser)
console.log(valueList);


function getPropertiesList(obj){

  let result = [];

  for(let key in obj){
    if({}.hasOwnProperty.call(obj, key)){
      result.push(key)
    }
  }
  return result
}
console.log(getPropertiesList({name:'doopal', age:20}))

function getValueList(obj){

  let result = [];

  for(let key in obj){
    if({}.hasOwnProperty.call(obj, key)){
      result.push(obj[key])
    }
  }
  return result
}

console.log(getValueList({name:'doopal', age:20}))
getPropertiesList(authUser) 






// 프로퍼티 제거(remove) or 삭제(delete)
//         비워두기         메모리 날림

function removeProperty(){

}
removeProperty(authUser,'name') // authUser.name = null;



function deleteProperty(){

}

deleteProperty(authUser,'name') // undefined







// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 순서(order)를 바꿀 수 없음!
// 변수명을 마음대로 지을 수 있음!

const arr = [10, 100, 1000, 10_000];

const [a0, ...rest] = arr

// const a0 = arr[0]
// const a1 = arr[1]
// const a2 = arr[2]
// const a3 = arr[3]


for(let keyValues of Object.entries(authUser)){
  console.log(keyValues)
}
console.log(Object.entries(authUser))


for(let [key, value] of Object.entries(authUser)){
  console.log(key, value)
}

console.clear()

// const spanList = do cument.querySelectorAll('span')

// const first = spanList[0]
// const second = spanList[1]

const [first, second] = document.querySelectorAll('span')



/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

// 순서를 고려하지 않음. key와 변수명이 동일해야 함. => 변수명 o 
// 기본 값 사용 가능 
const salaries = {
  함정민:95,
  지유진:110,
  이진용:15,
  한상학:300
}


const {함정민:함 = 100,지유진:지,한상학:한,이진용:리,장주원:장 = 500} = salaries;


// const 함 = salaries.함
// const 이진용 = salaries.이진용;
// const 지유진 = salaries.지유진;


function sum(a){

  return 1 + a
}

sum()



function createUserObject({
  name = '철수',
  age,
  gender,
  job:j = '홈프로텍터'
} = {}){

  
  
  // const {name,age,gender,job} = obj;


  return { name, age, gender, job:j }

}


const data = {
  name:'beom',
  age:40,
  gender:'male',
  job:'developer',
  address:'서울시 중랑구',
  tel:'010-716....'
} 

const person = createUserObject(data);




const { 
  userName, 
  age, 
  gender, 
  job, 
  address = '서울시 중랑구', 
  tel
 } = {
  userName:'beom',
  age:40,
  gender:'male',
  job:'developer',
  address:'서울시 중랑구',
  tel:'010-716....'
}

// const {acos} = Math;

// const acos = Math.acos;