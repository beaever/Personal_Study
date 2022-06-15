# JavaScript

_**JavaScript 공부하면서 궁금한것들이나 정보들을 저장합니다.**_

---

## JavaScript 띄어쓰기 삭제

[참고블로그](https://dpdpwl.tistory.com/113)

---

## JavaScript 정규식 표헌

[참고블로그](https://roundfigure.tistory.com/20)
[영문만](https://joalog.tistory.com/32)

---

## event target 과 currentTarget

currentTarget은 이벤트 핸들러가 부착된것을 가르킨다.  
즉, event.target은 부모로 부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식요소를 반환한다.  
반면, currentTarget은 이벤트가 부착된 부모의 위치를 반환한다는 차이점이 있다.

```javascript
<li>
  <button onClick={onLogin}>
    <span>Thebeaever</span>
  </button>
</li>
```

_Thebeaever을 클릭했을 때 정확히 어떤 것이 반환되는지 알기 위해 콘솔을 찍어둔다._

```javascript
const onLogin = (e) => {
  console.log(e.target); // <span>Thebeaever</span>
  console.log(e.currentTarget); // <button><span>Thebeaever</span></button>
};
```

e.target은 자식 요소인 span을 리턴하고, e.currentTarget은 부모 요소인 button을 반환한다.  
[참고블로그](https://velog.io/@edie_ko/JavaScript-event-target%EA%B3%BC-currentTarget%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)

---

## Event Loop

[EVNET-LOOP](/img/event-loop.gif 'EVENT-LOOP 과정')  
<img src="/img/event-loop.gif" alt="event-loop"></img>

---

## TEXT Highlight

```javascript
getSelection(); // 드래그시 드래그 한 내용 받아오기
```

자세한 코드는 text-highlight.js 안 코드 확인

---

## Intersection Observer API

[링크](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)

---

## Closure(함수 클로저)

- 클로저란?  
   클로저는 일급 객체 함수의 개념을 이용하여 유효범위(scope)에 묶인 변수를 바인딩 하기 위한 일종의 기술이다. 기능상으로, 클로저는 함수를 저장한 레코드(recode)이며, 스코프(scope)의 인수  
   들은 클로저가 만들어질 때 정의 되며, 스코프 내의 영역이 소멸 되었어도 그에 대한 접근은 독립된 복사본인 클로저를 통해 이루어 질 수 있다.  
   즉, 독립적인 변수를 참조하는 함수이다. 이 함수들은 생성될 당시의 환경을 기억한다.  
   위 방식으로 종료된 함수 내 특정 지역변수를 사용할 수 있다.
  ```javascript
  function plus() {
    let a = 0;
    return function () {
      return ++a;
    };
  }

  let p = plus();
  console.log(p()); // 1
  console.log(p()); // 2
  console.log(p()); // 3
  ```
  함수 plus 는 변수 p에 할당되며 실행이 종료 되었지만, p를 실행하면 plus 함수 내에 선언된 변수 a를 사용할 수 있다.  


[참조](https://heropy.blog/2017/11/10/closure/)

---

## 일반 함수와 화살표 함수의 차이

- 화살표 함수 (Arrow Function)  
  화살표 함수는 ES6에서 새로 추가되었다. 기존 함수 표현식과 비교하면 간단하게 사용 가능하다.
  화살표 함수는 익명 함수로, 이름이 없는 함수, 즉시 실행이 필요할 경우 사용하는 함수이다.

  ```javascript
      function fun() { // 일반함수
        ...
      }

      const arrFun = () => { // 화살표 함수
        ...
      };
  ```
