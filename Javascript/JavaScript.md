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

### 화살표 함수와 일반 함수의 차이

우선 바인딩이란, 함수 호출과 실제 함수를 연결하는 방법이다.
함수를 호출하는 부분에서 실제 함수가 위치한 메모리를 연결하는 것도 바인딩이다.
바인딩은 정적 바인딩(static binding)과 동적 바인딩(dynamic binding)으로 구분할 수 있다.
정적 - 실행 시간 전에 일어남. 실행 시간에는 변하지 않는 상태로 유지.
동적 - 실행 시간에 이루어지거나 실행 시간에 변경됨.

1. this


    - 일반 함수
      자바스크립트에서 모든 함수는 실행될 때마다 함수 내부에 this라는 객체가 추가 된다.
      (일반 함수에서 this가 바인딩 되는 상황)
      1. 함수 실행 시에는, 전역 객체를 가르킨다.
      2. 메소드 실행 시에는 메소드를 소유하고 있는 객체를 가르킨다.
      3. 생성자 실행 시에는 새롭게 만들어진 객체를 가리킨다.

      일반 함수는 함수를 선언할 때에 `this`에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 `this`에 바인딩할 객체가 동적으로 결정된다.

    - 화살표 함수
      화살표 함수는 선언할 때 `this`에 바인딩할 객체가 정적으로 결정된다.
      화살표 함수의 `this`는 언제나 상위 스코프의 `this`를 가리킨다. (Lexical this)
      또한, call, apply, bind method를 사용하여 `this`를 변경할 수 없다.

      ```javascript
        function fun() {
          this.name = "하이";
            return {
              name: "바이",
                speak: function () {
                console.log(this.name);
              },
            };
          }

          function arrFun() {
            this.name = "하이";
              return {
                name: "바이";
                  speak: () => {
                    console.log(this.name);
                  },
              };
          }

          const fun1 = new fun();
          fun1.speak(); // 바이

          const fun2 = new arrFun();
          fun2.speak(); // 하이
      ```
      일반 함수 사용시 바이가 찍히고 화살표 함수를 사용했을때 하이가 찍힘.
      일반 함수는 자신이 종속된 객체를 `this`로 가르키고 화살표 함수는 자신이 종속된 인스턴스를 가르킨다.
