// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;

// 3. 복합 대입 연산자
// -> 산술연산자 + 대입연산자
let num7 = 10;
num7 += 20

// 4. 증강 연산자
let num8 = 10;
num8++; // 라인이 끝난뒤에야 증가가됨.
++num8; // 라인끝나기전에 바로 증가가됨

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or,and,not);

// 6. 비교 연사자
// -> 등호 두개로만 비교하면 값만 비교해서 자료형은 비교안함. 그래서 1이랑 '1'을 같다고 판단
// -> 그래서 보통 js에서는 등호 3개로 비교함.
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp1,comp2,comp3,comp4);