import {getNode} from "../dom/getNode.js";


function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}

const first = getNode('.first')
const second = getNode('.second')



// delay(()=> {
//   first.style.top = '-100px'
//   second.style.top = '100px'
//   delay(()=> {
//     first.style.transform = 'rotate(360deg)'
//     second.style.transform = 'rotate(-360deg)'
//     delay(()=> {
//       first.style.top = '0px'
//       second.style.top = '0px'
//     })
//   })
// })


const shouldRejected = false;

const p = new Promise((성공,실패)=>{
  if(!shouldRejected){

    성공('성공!!');

  }else{

    실패('실패!');
  }
});



function delayP(timeout = 1000){
  
  return new Promise((resolve, reject)=> {
    
    setTimeout(()=>{
      if(!shouldRejected) resolve('성공!')
      else reject('실패')
    }, timeout)
  });

}

// console.log(delayP())  // <Promise>
// delayP().PromiseState 나 delayP().PromiseResult 이렇게 프로퍼티 값 못가져옴

// 요걸 then으로 가져올 수 있음!
delayP()
  .then((res) => {
    console.log(res);
    first.style.top = '-100px';
    second.style.top = '100px';

    return delayP();
  })

  .then((res) => {
    console.log(res);
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';

    return delayP();
  })
  .then((res) => {
    first.style.top = '0px';
    second.style.top = '0px';
    console.log(res);
  });

delay(()=>{
  console.log('나도성공!')
})