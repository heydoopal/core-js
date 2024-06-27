const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}


// fetch => promise

export const doopal = async (options) => {

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }
  

  const response = await fetch(url,restOptions);

  if(response.ok){
    response.data = await response.json();
  }
    return response;
}

// const result = await doopal({url:ENDPOINT})
// console.log(result)



doopal.get = (url, options) => {
  return doopal({
    url,
    ...options
  })
}

doopal.post = (url, body, options) => {
  return doopal({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}

doopal.delete = (url, options) => {
  return doopal({
    method:'DELETE',
    url,
    ...options
  })
}

doopal.put = (url, body, options) => {
  return doopal({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}

doopal.patch = (url, body, options) => {
  return doopal({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}





// IIAFE

// (async function(){






// })()