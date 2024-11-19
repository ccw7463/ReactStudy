// 1. 함수 선언식
// 호이스팅 됨.
// 이름 필요 O
let varHello = sayHello;
varHello();
function sayHello() {
    console.log("Hello~");
}

// 2. 함수 표현식
// 호이스팅 안됨
// 이름 필요 X
// varHi() // Reference Error 발생
let varHi = function() {
    console.log('Hi~');
}
varHi()


// 3. 화살표 함수
let func = (value) => { 
    console.log(value);
    return value + 1;
};

func(11)

// 매개변수가 여러 개일 때는 괄호 필수
let multiply = (value1,value2) => {
    return value1*value2;
}
console.log(multiply(2,3));
console.log(`-`.repeat(30));

// 3. 콜백함수
function repeat(count, callback) {  // callback은 매개변수로 받은 함수
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);  // 전달받은 함수를 실행
    }
}

repeat(5, (idx) => {   // 화살표 함수를 콜백으로 전달함.
    console.log(idx);
});