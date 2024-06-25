const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  => 성공을 의미하는 건 아님, 그냥 통신이 완료 되었다는걸 알려줄 뿐임 (실패일수도 있음)

const user = {
  name: 'doopal',
  age: 20,
  gender: 'female',
};

// 객체 합성

function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        성공(data); // ???
      } else {
        실패('실패!');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면? ✅

// xhr({
//   성공(data) {
//     console.log(data);
//   },
//   실패() {},
//   url: ENDPOINT,
// });

xhr.get = (url, 성공, 실패) => {
  xhr({ url, 성공, 실패 });
};

xhr.post = (url, body, 성공, 실패) => {
  xhr({
    method: 'POST',
    body,
    url,
    성공,
    실패,
  });
};

xhr.put = (url, body, 성공, 실패) => {
  xhr({
    method: 'PUT',
    body,
    url,
    성공,
    실패,
  });
};

xhr.delete = (url, 성공, 실패) => {
  xhr({
    method: 'DELETE',
    url,
    성공,
    실패,
  });
};

xhr.post(
  ENDPOINT,
  user,
  (data) => console.log(data),
  (err) => console.log(err)
);

// 자바스크립트의 함수는 객체다...
