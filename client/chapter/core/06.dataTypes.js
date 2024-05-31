/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty); //object - 문법상 오류..

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef); //undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 백틱)
const doubleQuote = 'hello';
const singleQuote = 'hello';
const backtick = `hello ${doubleQuote + singleQuote}`;
console.log(backtick); //hello hellohello

// 4. 정수, 부동 소수점 숫자(길이 제약)
const intNum = 150;
const floatNum = 1.234;

console.log(typeof intNum); //number
console.log(typeof floatNum); //number
console.log(typeof NaN); //number

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 1334n;

console.log(bigInt); // 1334n
console.log(typeof bigInt); //bigint

const b = BigInt(111);
console.log(b); // 111n
console.log(typeof b); // bigint

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;
console.log(typeof isActive); //boolean

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const person = {
  name: 'doopal',
  cute: true,
};
console.log(typeof person); //object

const object = new Object({ name: 'doopal' });
console.log(typeof object); //object

const fruits = ['사과', '복숭아', '자두'];
console.log(typeof fruits); //object

// 8. 고유한 식별자(unique identifier)
const uniqueId = Symbol('uuid');
const uniqueId2 = Symbol('uuid');
console.log(uniqueId); //Symbol(uuid)
console.log(typeof uniqueId); //symbol
console.log(uniqueId == uniqueId2); //false
console.log(uniqueId === uniqueId2); //false

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

const user = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {
    return a + b;
  },

  sayHi: function () {
    // 1 normal function
    return 'hello';
  },

  sayHi2: () => {
    // 2 arrow function
    return this;
  },

  sayHi3() {
    // 3 concise method
    return this;
  },
};

// Array

const newArray = new Array(2);

const arr = [
  10,
  100,
  1000,
  null,
  undefined,
  'hello',
  { name: 'tiger' },
  function () {},
];

// function

function 붕어빵틀(재료) {
  return `따끈 따끈 맛있는 ${재료} 맛 붕어빵`;
}

const 팥붕 = 붕어빵틀('팥');
const 슈붕 = 붕어빵틀('슈크림');
const 와붕 = 붕어빵틀('와사비');

// console.log(팥붕);
// console.log(슈붕);
// console.log(와붕);

// this
