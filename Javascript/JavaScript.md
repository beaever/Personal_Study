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
``` javascript
getSelection() // 드래그시 드래그 한 내용 받아오기
```
자세한 코드는 text-highlight.js 안 코드 확인
   
---
## Intersection Observer API
[링크](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)