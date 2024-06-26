const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

// fetch => promise

const doopal = async () => {

  const response = await fetch(ENDPOINT)
  // console.log(response);      // Response 객체
  // console.log(response.ok);   // true (HTTP 상태 코드가 200~299 일 때)

  // let data;

  if(response.ok){
    response.data = await response.json();
  }
    return response;
}

const result = await doopal()
console.log(result.data)
// console.log(await doopal())


// IIAFE

// (async function(){






// })()