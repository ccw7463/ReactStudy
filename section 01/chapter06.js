// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 알아서 형변환 해주는것

let num1 = 10;
let str1 = "20";

const result = num1 + str1;
console.log(result);


// 2. 명시적 형 변환
// -> 내장함수등을 이용해서 직접 형변환

let str2 = "10";
let strToNum2 = Number(str2);
console.log(10+strToNum2)

let str3 = "10개";
console.log(Number(str3));
console.log(parseInt(str3));

// -> 숫자 -> 문자열
let num3 = 20;
let numToStr1 = String(num3);
console.log(numToStr1 + "입니다");