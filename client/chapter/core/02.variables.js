/* ------------------ */
/* Variables          */
/* ------------------ */

// 1)
let admin;
let name;

// name을 window.name으로 인식함. - 전역 객체의 name 속성과 혼동될 수 있기 땜엥 줄 그어지는듯?
name = 'John';
admin = name;

alert('admin');

// 2)
const OUR_PLANET = 'earth';
let currentUserName;

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

/* variables ----------------------------------------------------------- */
// - 구매 제품 가격의 총 합
let productPrice;
let productQuantity = 0;
let totalProductPrice = productPrice + productQuantity;

// - 구매 결제 여부
// 결과값이 true/false 같은 boolean 값일경우에는 변수명을 is~ 라고 짓는게 관례
// 또는 has~라고 짓는것도 있음
let isPaymentCompleted = false;

// - 구매 결제 내역
let paymentHistory;
let paymentList;

// - 오늘의 운세
let todayHoroscope;


/* constant variables -------------------------------------------------- */

// - 상품 정보
// let productInfo = { name: '', price: productPrice, brand: '' };
const productInfo = { name: '', price: productPrice, brand: '' };

// - 브랜드 접두사
// let brandPrefix;
const BRAND_PREFIX = 'NIKE';

// - 1년 기준 일(day)자 수
const DAYS_IN_YEAR = 365;
const daysInYear = 365;