// - 두 정수 a 값 이상 , b 값 이하의 모든 홀수의 합을 리턴해주는 solution 함수를 작성하세요.
// - 정수 a , b는 모두 양수입니다.
// - 두 정수는 같은 값으로 넘겨지지 않습니다.
// - 두 정수의 대소관계는 랜덤합니다.
// - 입출력 예 :
//                  ( a : 4 , b : 15 ) → 60
//                  ( a : 10 , b : 30 ) → 200


function solution (a, b) {

  let min = a > b ? b : a;
  let max = a > b ? a : b;
  let answer = 0;

  for (let i = min; i <= max; i ++) {
    if ( i % 2 != 0 ) answer += i;
  }

  return answer;  
};