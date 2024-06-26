import { xhrPromise } from "./lib/index.js";


// async function getData(){
//   const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users');
//   console.log(data);
// }

// 화살표 함수로 바꾸기
const getData = async () => {
  
  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users');

  data.forEach((item) => {
    console.log(item.name)
  })
  console.log(data);

}

// getData();

