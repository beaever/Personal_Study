# Personal_Study
Personal Study repository


## XMLHttpRequest (XHR)
서버와 상호작용을 하기 위하여 사용되며, 전체 페이지의 새로고침 없이도 URL로 부터 데이터를 받아올 수 있다.
이는 웹페이지가 사용자가 하고 있는것을 방해하지 않으면서 페이지의 일부를 업데이트 할 수 있다.
XMLHttpRequest는 ajax 프로그래밍 에서 주로 사용한다.

XMLHttpRequest의 예제 코드를 통해 사용하는 방법을 알아보고, 어떻게 동작하는지 살펴보자.

```javascript
const xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function () {
  if (xmlHttp.readyState === xmlHttp.DONE) {
    if (xmlHttp.status === 200) {
     // Do something with xmlHttp.responseText
     console.log(xmlHttp.responseText)
    } else {
      // handle errors
    }
  }
};
  xmlHttp.open('GET', 'https://beaever.com');
  xmlHttp.send(null);\
}
```
일반적인 사용방법
- XMLHttpRequest 객체 생성
- onreadystatechange 이벤트 핸들러 함수 선언
- open() 를 통해 요청할 method, url 등의 다양한 설정
- send() 를 통해 전송할 데이터와 함께 요청

onreadystatechange() 는 요청의 상태에 따라 시작부터 끝까지 발생하는 모든 이벤트들을 핸들링 할 수 있는 함수 이다.
예제 코드에서는 요청에 대한 데이터 처리가 완료되었고, 응답 코드가 200(success)인 경우에 응답 값을 콘솔에 찍도록 작성되었다.


### 상태 값
XMLHttpRequest의 상태 값에는 readyState와 status 속성 값이 있다.

#### readyState
요청의 상태를 반환한다.
미리 정의된 코드 값은 다음과 같다.

- UNSENT(0): XMLHttpRequest 객체의 생성된 상태
- OPEND(1): 예제에서도 있지만 open(~) method가 성곡적으로 실행된 상태
- HEADERS_RECEIVED(2): 모든 요청에 대한 응답이 도착한 상태
- LOADING(3): 요청했던 데이터가 처리중(processing)인 상태
- DONE(4): 데이터 처리가 완료(processed)된 상태

#### Status
요청이 완료된 후, Http 상태 코드를 반환한다.

- 200: SUCCESS
- 201: CREATED
- 404: NOT FOUND

참고: https://developer.mozilla.org/ko/docs/Web/HTTP/Statu
---------------------------------------------------------------------------------------------------------------------
