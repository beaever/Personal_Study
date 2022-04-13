# TypeScript
*TypeScript의 관련된 내용을 기록 합니다.*
---
   
## enums
열거형은 TypeScript가 제공하는 기능중 하나 이다.
[참고블로그](https://www.typescriptlang.org/ko/docs/handbook/enums.html)
   
---

## 함수의 반환 값에 타입을 정의하는 방식

``` javascript typescript
function add(): number {
}
```

## d.ts
타입스크립트 선언 파일 d.ts 는 타입스크립트 코드의 타입 추론을 돕는 파일입니다.
전역 변수로 선언한 변수를 특정 파일에서 import 구문 없이 사용하는 경우 해당 변수를 인식하지 못합니다. 그럴 때 아래와 같이 해당 변수를 선언해서 에러가 나지 않게 할 수 있습니다.   
   
  
``` typeScript
declare const global = 'sth';
```
   
   
- 구현부가 아닌 선언부만을 작성하는 용도의 파일을 의미.
- JS 코드로 컴파일 되지 않습니다.
- `skipLibCheck` 프로퍼티가 `false`라면 다음 규칙들을 강제 합니다. (`true` 여도 지키는것이 좋습니다.)
    - 선언 코드만 작성 가능하며, 일반 코드는 작성 불가능합니다.
    - 최상위에 존재하는 변수, 상수, 함수, 클래스, 네임스페이스의 선언 앞에
    반드시 `declare` 혹은 `export` 가 붙어야 합니다.
- 파일에 작성되는 `declare` `namespace` 블록과 `declare` `module` 블록의 필드에는 `export` 키워드가 기본적으로 붙어야 합니다.