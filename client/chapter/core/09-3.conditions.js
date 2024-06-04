/* ---------------- */
/* Switch           */
/* ---------------- */

// let a = prompt('10~12 중 입력하셈');
// switch (+a) {
//   case 10:
//     console.log('10임');
//     break;
//   case 11:
//     console.log('11임');
//     break;
//   case 12:
//     console.log('12임');
//     break;
//   default:
//     console.log('다 아님');
// }

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LATE_NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
switch (thisTime) {
  case MORNING:
    console.log('디코 켜고 QR코드 찍기');
    break;

  case LUNCH:
    console.log('점심 념념귿');
    break;

  case DINNER:
    console.log('동네 공원 산책');
    break;

  case NIGHT:
    console.log('복습하기');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중 먹는 야식 냠냠굿');
    break;

  default:
    console.log('엥?');
}

console.clear(``);

/* switch문 → if문 변환 --------------------------------------------------- */

// 1. 변수에 담는다 > prompt를 통해 숫자 입력 받는다 (0~6)
// let num = prompt('0~6 중에 입력하셈');

// 2. switch case문 사용해서
//   switch (num) {
//     case 0: console.log('일'); break;
//     case 1: console.log('월'); break;
//     case 2: console.log('화'); break;
//     case 3: console.log('수'); break;
//     case 4: console.log('목'); break;
//     case 5: console.log('금'); break;
//     case 6: console.log('토'); break;
//     default: console.log('0~6중 숫자만 입력해랏');
// }

// 3. 0~6까지 랜덤수를 받아서

console.clear();

function weekend() {
  // getDay 실행해서 요일을 받아옴  일 ~ 월
  const today = getDay(getRandom(7));

  // if(today.includes('토') || today.includes('일')){
  //   return '주말입니다!';
  // }else{
  //   return '평일입니다.'
  // }

  // 해당 요일을 가지고 토,일 => 주말입니다.

  // if.. switch.. 삼항식

  // 평일입니다.

  // const day = today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일'
  // return day;
  return today.includes('토')
    ? '토요일'
    : today.includes('일')
      ? '일요일'
      : '평일';
}

const day = weekend();

console.log(day); // '평일'
/* switch vs. if -------------------------------------------------------- */
