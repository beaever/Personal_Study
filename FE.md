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

---

## Netlify

_**netlify로 페이지 배포 하기**_  
[참고](https://goddino.tistory.com/190)

---

## 운영체제

_**레스토랑으로 비교해서 알아보는 운영체제라는 이름으로 운영체제에 대하여 설명한다.**_
[레스토랑으로 비교해서 알아보는 운영체제](https://yozm.wishket.com/magazine/detail/1269/%EB%B3%B4%EB%8A%94/?fbclid=IwAR1asPW4GEomwF4oKGk7XxtsXkm4ihiGvNaMMBxYMrldC6jDzoNUY0KzGeQ)

---

## 프론트엔드 UI요소

_**프론트엔드 개발자에게 꼭 필요한 32가지의 UI요소**_  
[프론트엔드 개발자라면 반드시 알아두어야 할 32가지의 UI요소](https://velog.io/@oneook/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EB%B0%98%EB%93%9C%EC%8B%9C-%EC%95%8C%EC%95%84%EB%91%90%EC%96%B4%EC%95%BC-%ED%95%A0-32%EA%B0%80%EC%A7%80%EC%9D%98-UI-%EC%9A%94%EC%86%8C-%EB%B2%88%EC%97%AD)

---

## 아코디언 UI

[아코디언 UI](http://www.gisdeveloper.co.kr/?p=5726)

---

## Snowpack

SnowPack 이란 Webpack 처럼 복잡하고 무거운 빌드 시스템의 대안으로 만들어졌으며, JavaScript 네이티브 모듈 시스템 (ESM, JavaScript Modules)을 사용해 무거운 번들링 작업을 제거하고, 프로젝트 크기와 상관없이 빠른 속도를 제공하도록 만들어졌습니다.

- 개발서버는 처음에만 의존 모듈 설치 시간이 필요로 하며, 그 다음부터 50ms 안에 실행됩니다.
- 같은 파일을 두번 빌드하지 않고, 브라우저 안에서 자바스크립트 네이비트 모듈 (ESM) 사용으로 가능합니다.
- 소스가 변경되어도 브라우저 새로고침이 필요하지 않다. React, Preact, Svelet에서 [HMR+Fast refresh](https://www.snowpack.dev/concepts/hot-module-replacement)를 지원합니다.
  - 코드가 수정되어도 컴포넌트의 상태를 유지합니다. 예를들어 React에서 `useState` 등 으로 설정된 값을 초기화 하지 않음으로서 더 빠른 refresh가 가능합니다.
- JSX, TypeScript, React, Preact, CSS 모듈을 기본 지원합니다.
- 최적화된 빌드를 지원하며 선호하는 번들러를 사용하기 위한 플러그인을 지원합니다.
- Babel, Sass, MDX 등 기능 확장을 위한 [Build Plugin](https://www.snowpack.dev/plugins)을 지원합니다.

💡 ESM을 사용하려면 `script` 요소에 `type="module"` 속성을 추가해야 합니다.
그러면 Inline Script 안에서도 `import` 구문을 사용 할 수 있게 됩니다.

💡 IE는 네이티브 모듈을 지원하지 않습니다. 하지만 Snowpack의 Webpack Plugin으로 빌드된 결과에서는 네이티브 모듈을 사용하지 않으므로 상관없습니다.
다만, IE를 반드시 지원해야 한다면 IE에서 개발 서버를 사용할 수 없으므로 디버깅에 어려움을 가질 수 있습니다.

---

## TreeShaking (트리쉐이킹)

트리쉐이킹이란 나무흔들기, 나무를 흔들어 죽은 나뭇잎을 떨어뜨리는 것처럼 필요없는 코드들을 제거해주어 번들파일의 크기나 번들링의 시간을 줄여주는 작업을 트리쉐이킹이라고 합니다.

TreeShaking 을 적용하기 위해서는 몇 가지 조건이 있습니다.

[https://helloinyong.tistory.com/305](https://helloinyong.tistory.com/305)

1. Babelrc 파일 설정
   **_”ES6 문법을 CommonJS로 변환되지 않도록 막기”_**
   Babel은 자바스크립트 문법이 브라우저에서 호환이 가능하도록 ES5 문법으로 변환하는 라이브러리 입니다. 이 작업을 우리는 polyfill 이라 부르고 이는 현재 웹 개발에 있어서 필수 요소 중 하나라고 봐도 무방합니다. 하지만 이 Babel의 역할은 TreeShaking 작업을 하는데 있어 걸림돌이 되는 요소이기도 합니다.
   Babel은 import를 `require()` 구문으로 변환을 시키는데, require은 export 하는 모든 모듈을 가져오게 됩니다. 이를 방지 하기 위해 Babelrc 파일을 아래처럼 설정합니다.

```tsx
{
  “presets”: [
    [
      “@babel/preset-env”,
      {
	    "modules": falseㅣ
      }
    ]
 ]
}
```

**_babel-preset-env에 modules를 false로 하면, import, export의 구문을 ES5의 문법으로 변환시키지 않습니다._**

1. 모듈 내 Side-Effect 발생 여부 확인
   **_Side-Effect란, 현재 모듈 외에 다른 코드에 영향을 끼치는 요소가 있으면, 이를 Side-Effect가 있다고 할 수 있다._**

```jsx
let animals = ['dog', 'cat'];

const addAnimals = (name) => {
  animals.push(name);
};
```

위의 코드는 Side-Effect가 발생하고 있는 예시이다.

실제 addAnimals() 라는 함수가 쓰이지 않아 다른 코드에 영향을 주지 않는다 해도, addAnimals() 함수 바깥의 변수를 변경하는 작업으로 인해 Side-Effect를 일으킨다고 판단하여 TreeShaking을 하지 못하게 된다.

Side-Effect를 일으키지 않는 모듈은, 바깥의 변수의 값을 변경하지 않고 모듈 내 코드로만 봤을때에 Input 파라미터 값에 의해 아웃풋 결과 값을 예측할 수 있도록 되어 있어야 TreeShaking을 하기에 안전한 모듈이다.

그럼에도 불구하고 개발자의 주관적으로 보았을때에, 해당 모듈이 Side-Effect를 발생시키지 않는다고 판단할 경우 Side-Effect가 일어나지 않는 모듈이라고 설정할 수 있다.

```tsx
{
  "name": "webpack-tree-shaking-example",
  "version": "1.0.0",
  "sideEffects": false
}
```

package.json 파일을 위와 같이 설정한다.

위와 같이 설정한다면, 모든 모듈이 Side-Effect를 발생하지 않는다고 정의하는것과 같다.

혹은 아래와 같이 설정하여 특정 파일만 Side-Effect를 발생하지 않는 모듈이라고 따로 선언 할 수 있다.

```tsx
{
  "name": "webpack-tree-shaking-example",
  "version": "1.0.0",
  "sideEffects": [
    "./src/utils/utils.js"
  ]
}
```

1. 필요한 모듈만 Import 하여 사용하기

```tsx
import { module1, module2 } from '../utilFile';
```

위 코드에서 utilFile 내에 일부의 코드만 import 하여 가져온다.

위와 같은 방식으로 대부분 최신 WebPack 환경에서 TreeShaking 조건을 갖추었기 때문에 사용하지 않는 불필요한 코드를 빌드하지 않도록 TreeShaking을 적용 사용 할 수 있다.

만약 모든 조건을 갖추었지만, 사용하려는 외부 코드 혹은 라이브러리가 TreeShaking이 이루어 지지 않는다면, import 해서 불러오려는 코드가 ES6(export)로 내보내고 있는지 확인해야한다.

만약 ES6가 아니라 CommonJS (modules.export)로 내보내고 있다면, 이는 TreeShaking을 할 수 없는 모듈이다.

위와 같은 이슈의 가장 대표적 예시로 lodash 라이브러리가 있으며, 해결방법으로는 lodash-es 모듈을 사용하면 TreeShaking이 가능하다.

---

## Storybook

UI Components를 직접 보면서 개발 할 수 있는 환경을 제공하는 툴 이며, 스토리북은 프로젝트 내에서 독립된 환경으로 실행 되기 때문에 앱의 특정한 의존성에서 벗어나서 순수 UI 개발에 집중 할 수 있도록 합니다.

또한, React 와 React Native 환경에서도 사용할 수 있으며, 스토리북을 사용할 시 팀과의 협업 구조에서도 원활한 커뮤니케이션과 반복을 통한 개발 생산성 향상의 효과를 볼 수 있습니다.

Storybook 자체 에서 Testing 기능도 제공하므로, UI Component의 개별적인 Testing도 쉽고 직관적으로 활용 할 수 있습니다.

### Install

### NPM

```tsx
npm i @stroybook/cli
getstorybook init

npm run storybook
```

### Yarn

```tsx
yarn add @storybook/cli
getstorybook init

yarn storybook
```

## CleanArchitecture

출처: [https://techblog.woowahan.com/2647/](https://techblog.woowahan.com/2647/)

### 의존성 규칙

대부분의 아키텍처는 세부적인 차이는 있어도 공통적인 목표는 계층을 분리하여 관심사의 분리하는 것이라하며, 이런 아키텍처가 동작하기 위해서는 의존성 규칙을 지켜야 합니다.

의존성 규칙은 모든 소스 코드 의존성은 반드시 외부에서 내부로, 높은 수준의 정책을 향해야 합니다.
즉, 업무 로직을 담당하는 코드들이 DB 또는 Web 같이 구체적인 세부 사항에 의존하지 않아야 합니다.
이를 통해 **_업무로직(고수준 정책)은 세부 사항들(저수준 정책)의 변경에 영향을 받지 않도록 할 수 있습니다._**

이러한 의존성 규칙을 지키이 위해서는 “What data crosses the boundaries”, “Crossing boundaries”와 같은 상황에 대해 설명합니다.

<aside>
👉 고 수준: 상위 수준의 개념, 추상화된 개념
ex) 데이터를 저장한다, 구역 배달료를 구한다.
저 수준: 추상화된 개념을 실제 어떻게 구현할지에 대한 세부적인 개념
ex) RDB에 데이터를 저장한다, 폴리곤 구역에 속한 배달건에 대해 배달료를 구한다.

</aside>

### What data crosses the boundaries

1. 경계 간의 데이터를 전달할 때 무엇을 전달해야 하는가
   **의존성 규칙을 지키이 위해서는 우리가 사용하는 단순하고, 고립된 형태의 데이터 구조를 사용하는 것을 추천합니다.**
   만약 DB 형식의 데이터 구조 또는 Framework 종속적인 데이터 구조가 사용되게 된다면, 이러한 저수준의 데이터 형식을 고수준에서 알아야 하기 때문에 의존성 규칙을 위반하게 됩니다.
   **_우아한형제들 개발팀에서는 이러한 경계 간의 데이터를 전달할 때 간단한 구조의 Data Transfer Objects(DTO)를 이용하고 있습니다._**

### DTO 간의 중복 코드

업무 로직을 구현하다 보면 클라이언트로부터 전달되는 데이터를 DTO를 통하여 받아서 처리 합니다.
일반적으로 요청은 크게 등록, 수정, 조회, 삭제 의 CRUD 형태로 오게 되는데, 요청에 따라 DTO를 어떻게 만들면 좋을지에 대한 고민을 해보았습니다.
초반에 로직을 구현하다 보면 생성과 수정 요청은 거의 비슷한 형식의 데이터, 검증 로직을 필요하게 됩니다. 때문에 이를 통합하여 중복 코드를 제거할지, 기능에 따라 분리할지에 대한 고민을 많이 하게 됩니다.

```tsx
public class CreateRequest {
	private String name;
	private LocalDate startDate;
	private LocalDate endDate;
	...
}

public class UpdateRequest {
	private String name;
	private LocalDate startDate;
	private LocalDate endDate;
	...
}
```

<클린 아키텍처> 책에서 이에 대한 좋은 내용을 언급합니다.

1. 진짜 중복

- 한 인스턴스가 변경되면, 동일한 변경을 그 인스턴스의 모든 복사본에 반드시 적용해야 한다.

2. 우발적 중복 (거짓된 중복)

- 중복으로 보이는 두 코드의 영역이 각자의 경로로 발전한다면, 즉 서로 다른 속도와 다른 이유로 변경된다면 이 두 코드는 진짜 중복이 아니다.

위 참고 블로그의 글쓴이는 저장과 수정 사이의 DTO의 중복은 우발적 중복에 속한다고 생각합니다.
초반의 코드가 비슷할지 모르지만 각 기능은 서로 다른 이유와 속도로 변경될 가능성이 높기 때문입니다.

간단한 예시로 스케줄을 저장하는 기능을 개발한다고 가정합니다.
스케줄을 처음 저장할 댸는 시작 일자가 과거 시간이 될 필요가 없기 때문에 이에 대한 유효성 검사를 진행해야합니다.

```tsx
public class CreateRequest {
	public void assertValidation() {
		if (startDate.isBefore(LocalDate.now())) {
			throw new IllegalArgumentException();
		}
	}
}
```

하지만 수정을 하는 경우 이미 해당 데이터가 과거 날짜일 수 있기 때문에 StartDate에 대한 유효성 검사가 필요 없습니다.

```tsx
public class UpdateRequest {
    public void assertValidation() {
        if(startDate.isBefore(LocalDate.now())) { ---> 불필요한 체크
            throw new IllegalArgumentException();
        }
    }
}
```

**_이렇게 서로 다른 이유와 속도로 변경이 될 수 있는 상황에서는 DTO를 분리하는 것이 좋은 방법이라고 생각합니다._**
