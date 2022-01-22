# Personal_Study

_**매일 학습하고, 궁금했던 정보들을 저장하고, 정리합니다.**_

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

# SPA, SSR, CSR, SEO

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

<img src="/img/SSR.png" alt="SSR"></img>
[SSR](/img/SSR.png 'SSR의 과정')

많은 웹 사이트들은 페이지를 이동할 때마다 서버에 새로운 페이지에 대한 요청을 하는 방법을 택하여 사용하고 있다 이러한 방식이 SSR 이다.  
서버에서 렌더링을 마치고, Data가 결합된 HTML 파일을 내려주는 방식이 므로, 새로운 페이지로 이동할 때마다 서버에 요청하여 페이지를 받아야 하기 때문에, 받아오는 시간동안 깜빡거리는 현상을 볼 수 있다.

## CSR(Client Side Rendering)

[CSR](/img/CSR.png 'CSR의 과정')
CSR 방식은 최초 요청시에 HTML을 비롯해 CSS,JavaScript 등 각종 리소스를 받아온다. 이후에는 서버에 데이터만 요청하고, JavaScript View를 컨트롤 한다.  
당연히 초기 요청대 SSR 보다 많은 리소스를 요청하기 때문에, 렌더링 속도는 SSR이 더 빠르다.

<img src="/img/CSR.png" alt="CSR"></img>

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

---

React.js 혹은 Vue.js를 사용하면서, CSR을 할지 SSR을 할지 고민하게 되는 이유는 SEO 때문이라 볼 수 있다.  
물론 회사내에서만 사용하는 CMS라면 신경 쓸 필요가 없지만 공식 홈페이지와 같이 일반 사용자에게 검색되어야 하는 사이트라면 SEO 때문에 SSR에 대하여 생각하게 된다.

Google은 크럴러 안에 자바스크립트 엔진이 들어있어서 크게 문제될것 없지만, Naver 와 Daum 은 자바스크립트를 해석할 수 있는 엔진이 없기때문에 빈페이지로 인식하므로 문제가 된다.

- [참고 링크](https://hyunseob.github.io/2019/05/26/google-io-2019-day-3/)
- [참조 블로그 링크](https://velog.io/@ru_bryunak/SPA-%EC%82%AC%EC%9A%A9%EC%97%90%EC%84%9C%EC%9D%98-SSR%EA%B3%BC-CSR)

---

# 리펙토링 (Refactoring)

### 리펙토링이란?

1. 가독성, 유지보수성

- 이미 작성한 소스코드에서 구현된 일련의 행위들을 변경없이, 코드의 가독성과 유지보수성을 높이기 위해 내부구조를 변경하는 것이다.
  다시 말해 기능을 유지하되 읽기 좋고 지속적으로 관리하기 편하게 소스코드를 재작성하는 것이다.  
  혼동이 있을 수 있는데, 리펙토링은 가독성과 유지보수성을 목표로하며 성능을 최적화하는 것은 다른 문제이다.

2. 사람, 협업

- 소프트웨어 개발을 위해 프로그래밍, 소스코드를 작성할 때 대부분 여러명의 사람과 함께 작업을 하게 된다. 그리고 새로운 사람이 내가 작성하는 프로젝트에 추가로 참여하게 되며, 인수인계가 되거나 불가능한 경우도 있다.  
  같이 협업을 하는 개체가 바로 사람이 되며 사람이 이해하는 코드를 작성하는 것이 중요하다.

### 리펙토링을 왜 할까?

1. 소프트웨어 설계에서 질적 향상을 위해 리팩토링을 한다. (코드 중복을 제거하고, 수정 용이성 향상)
2. 소프트웨어 이해도를 향하하기 위해, 가독성 향상을 위해 한다. 이 프로젝트에 다른 사람, 다음 사람, 그리고 그 사람이 나일 수 도 있다.  
   _**(남이 짠 소스는 내가 고치고, 내가 짠 소스는 내가 고친다.)**_
3. 버그를 찾는데 도움이 된다.
4. 프로그램 개발 속도가 향상된다. 좋은 설계 기반에선, 개발 속도를 단축 할 가능성이 높아진다.

### 리펙토링은 언제 하나?

- The Rule Of Three: 유사한 내용이 세번 이상 반복할 때, 리펙토링을 고려 한다.
- 새로운 기능을 추가할 때
- 코드 리뷰를 할 때  
  [참조 블로그](https://ikkison.tistory.com/82)

---

# 비동기 처리

## 비동기 처리란?

특정 로직의 실행이 끝날때까지 기다리지 않고 나머지 코드를 먼저 실행하는것을 비동기 처리라고 한다.

## 비동기 처리는 왜 필요한가?

만약 사용자가 어떠한 사이트를 들어갔다고 가정하자, 그런데 시간이 지나도 사이트내에 데이터가 보여지지 않는다.  
그렇다면 사용자 입장에서는 사이트는 죽어 있다라고 생각을 하게 될 것이다.  
즉 비동기 처리는 화면에서 서버로부터 데이터를 요청했을때에 서버가 언제 요청에 대한 응답을 줄지 모르는데 서버가 요청의 응답을 해줄때 까지 기다리게 된다면 위의 말처럼 사용자 입장에서는 사이트가 죽어있다라고 판단하게 될 지도 모른다. 이러한 이유로 비동기 처리는 매우 중요하다.

_**(간단한 비동기 처리 예제)**_

```javascript
console.log('Hello');
setTimeout(function () {
  console.log('beaever 3s');
}, 3000);
consol.log('Bye');
```

만약 setTimeout() 이라는 함수를 사용하지 않았더라면, 순차적으로 코드가 출력되어 'Hello' 출력 되고 3초 후 'beaever' 출력 되고, 'Bye' 가 출력이 되었을것이라 예상했을것이다.  
하지만, setTimeout()이라는 함수를 통해 비동기 방식으로 처리되었기 때문에, 예상과 다르게 'Hello' 출력, 'Bye' 출력 3초 후 'beaever' 이 출력이 된다.

---

## UX : 무한 스크롤과 페이징

_**(무한스크롤과 페이징 각 장단점과 적용 기준)**_
[참고블로그](https://brunch.co.kr/@hyoi0303/39)

---

## jwt

[jwt](https://www.npmjs.com/package/jwt-decode)

---

## URI & URL

[URI&URL](https://velog.io/@jch9537/URI-URL)

---

## CSS

_**(style을 조금더 효율적으로 사용할 수 있게, 단축속성 등 의 여러가지 팁)**_
[Style](https://velog.io/@edie_ko/css-enabling-pattern)
