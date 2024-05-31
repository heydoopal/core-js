/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(String(YEAR))  // '2024'
console.log(YEAR+'')  // '2024'
console.log(typeof YEAR+'')  // 'number' (string)
console.log(typeof (YEAR+''))  // string
// undefined, null


// boolean


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

// null

// boolean
let isMarried = false;
let isMarried2 = true
console.log(Number(isMarried));  // 0
console.log(Number(isMarried2));  // 1


// string
let num = '100'
console.log(Number(num));
console.log(num * 1);
console.log(+num);
console.log(typeof +num);

// numeric string
const width = '120.5px'
console.log(width);


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 