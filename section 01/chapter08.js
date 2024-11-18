// 조금 독특한 연산자들을 알아본다.
// 1. null 병합 연산자 (??)
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2;
let var5 = var2 ?? var3;
console.log(var4); // var2는 null, undefined가 아님.
console.log(var5); // 둘다 null, undefined가 아니면 앞에값 사용

// 2. typeof
// -> 값의 타입을 문자열로 반환하는 기능

let var7 = 1;
var7 = 'hello';
let t1 = typeof(var7);
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 반환
// 조건식 ? 참일때 값 : 거짓일떄 값
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);

