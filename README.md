# Personal_Study

## Personal Study repository

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

## [참고](https://developer.mozilla.org/ko/docs/Web/HTTP/Statu)

---

## SPA (Single Page Application)

SPA 란 말 그대로 한개의 페이지를 가진 어플리케이션이다.
왜 SPA로 개발하는가?

- 사용자 친화적
- 초기 렌더링 후 데이터만 받아오기 때문, 상대적으로 서버 요청이 적다.
- Virtual Dom
- Front End 와 Back End 분리로 개발업무 분업화 및 협업이 용이하다.
- 개발이 상대적으로 효율적이다.

이 정도의 이유들로 설명 가능하다고 생각한다.

기본적으로 SPA는 CSR 이지만 그렇다고 SPA === CSR은 아니다.

## SSR(Server Side Rendering)
[SSR](/img/SSR.png 'SSR의 과정')
많은 웹 사이트들은 페이지를 이동할 때마다 서버에 새로운 페이지에 대한 요청을 하는 방법을 택하여 사용하고 있다 이러한 방식이 SSR 이다.
서버에서 렌더링을 마치고, Data가 결합된 HTML 파일을 내려주는 방식이 므로, 새로운 페이지로 이동할 때마다 서버에 요청하여 페이지를 받아야 하기 때문에, 받아오는 시간동안 깜빡거리는 현상을 볼 수 있다.

## CSR(Client Side Rendering)
<img src="../img/CSR.png"></img>
[CSR](/img/CSR.png 'CSR의 과정')
CSR 방식은 최초 요청시에 HTML을 비롯해 CSS,JavaScript 등 각종 리소스를 받아온다. 이후에는 서버에 데이터만 요청하고, JavaScript View를 컨트롤 한다.
당연히 초기 요청대 SSR 보다 많은 리소스를 요청하기 때문에, 렌더링 속도는 SSR이 더 빠르다.
하지만 이후 다른 페이지로의 이동시에는 SSR 보다 빠른 페이지 전환 속도와 더 나은 사용자 경험을 제공한다.

- 만약 인터넷 속도가 심각하게 느리다면, 사용자는 웹페이지가 죽어있어 보이는 흰색 페이지 화면을 보게 될것이며, 제대로된 페이지 화면을 한참 후에나 보게 될것이다.

## SEO(Search Engine Optimization) 문제
   
React.js 혹은 Vue.js를 사용하면서, CSR을 할지 SSR을 할지 고민하게 되는 이유는 SEO 때문이라 볼 수 있다.   
물론 회사내에서만 사용하는 CMS라면 신경 쓸 필요가 없지만 공식 홈페이지와 같이 일반 사용자에게 검색되어야 하는 사이트라면 SEO 때문에 SSR에 대하여 생각하게 된다.   
   
Google은 크럴러 안에 자바스크립트 엔진이 들어있어서 크게 문제될것 없지만, Naver 와 Daum 은 자바스크립트를 해석할 수 있는 엔진이 없기때문에 빈페이지로 인식하므로 문제가 된다.   
- [참고 링크](https://hyunseob.github.io/2019/05/26/google-io-2019-day-3/)   
- [참조 블로그](https://velog.io/@ru_bryunak/SPA-%EC%82%AC%EC%9A%A9%EC%97%90%EC%84%9C%EC%9D%98-SSR%EA%B3%BC-CSR)
----

