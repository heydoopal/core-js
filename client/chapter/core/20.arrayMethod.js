/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// 배열인지 체크하는 함수
  // function isArray (data){
  //   return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  // }

// isArray(data)  // true || false



const people = [
  {
    id:0,
    name:'안재명',
    age:25,
    job:'물음표살인마🪓',
    imgSrc:'aszfkq'
  },
  {
    id:1,
    name:'황선우',
    age:51,
    job:'요식업 사장님🥼',
    imgSrc:'zvkkrq'
  },
  {
    id:2,
    name:'유진',
    job:'디스코드 봇🤖',
    age:12,
    imgSrc:'gkzqg'
  },
  {
    id:3,
    name:'김한울',
    job:'비둘기🕊',
    age:39,
    imgSrc:'glzqoe'
  }
]





/* 요소 순환 ---------------------------- */

// forEach
people.forEach(user => console.log(user.job))

const span = document.querySelectorAll('span');

span.forEach((tag) => {
  tag.addEventListener('click', function(){
    this.style.color = 'dodgerblue'
  })
})


/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join