# TypeScript
*TypeScript의 관련된 내용을 기록 합니다.*
---
   
## Generics
### 제네릭 (Generics)의 사전적 정의

<aside>
💡 제네릭은 C#m Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 떄 자주 활용되는 특징입니다. 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용됩니다.
</aside>   

## Static
### 스테틱 메서드 (Static method)
`class`를 통한 별도의 인스턴스나 객체를 생성하지 않고도, 바로 `class` 내부의 함수 및 인자를 사용할 수 있는방법.

```typeScript
Object_from_class = new Class;
// class를 통한 객체를 생성하거나, 내부 인자에 접근하기 위해선 반드시 class를 생성한 이후 진행 가능하였습니다.
```

```typeScript
class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockhash = (index:number, previousHash:string, timestamp:number, data:string) => {
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString()
    }


// Static method
Block.calculateBlockhash
```

## enums
열거형은 TypeScript가 제공하는 기능중 하나 이다.
[참고블로그](https://www.typescriptlang.org/ko/docs/handbook/enums.html)
   
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

## export = & import = require()
- Commons.js와 AMD 라는 모듈 시스템에서는 `export` 객체라는 개념이 존재합니다.
- `exports` 는 모듈로부터 내보내지는 데이터들을 담고 있는 하나의 객체입니다.
- `exports` 객체를 또 다른 커스텀 객체로 대체하는 것도 지원합니다.
- `export default` 가 이 동작을 지원하기 위하여 등장한것이지만, 이 둘의 호환성은 좋지 않습니다.
- TypeScript는 Common.js와 AMD에서 `exports` 객체를 또 다른 커스텀 객체로 대체하는 동작을 유사하게 따라할 수 있도록 `export=` 문법을 지원하고 있습니다.
- `export=` 문법은 모듈로부터 내보내질 하나의 객체를 지정합니ㅏㄷ.
그것은 클래스일 수도 있고, 인터페이스일 수도 있고, 네임스페이스일 수도 있으며, 열거형 일 수도 있습니다.
- `export=` 문법은 객체를 내보낸 모듈의 경우 반드시 `import module = require("module")` 문법으로만 불러와야 합니다.
단, module 프로퍼티가 esnext이면 이 문법을 사용할 수 없다며 에러가 발생합니다.
하지만 d.ts파일에서는 에러가 발생하지 않습니다.