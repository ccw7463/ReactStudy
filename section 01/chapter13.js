// 1. 객체생성자 방식
// 권장하지 않음. 오래걸림.
let person1 = new Object(); // 객체 생성자
person1.name = "changwoo";
person1.age = 29;
console.log(person1);

// 사용법이 딕셔너리랑 거의 같음.
// 2. 객체리터럴 방식
// 대부분 사용하는 방식이며 권장 (let, const 두가지 타입있음)
let person2 = {
    "name":"jonguk",
    "age":29
}
console.log(person2);

const person3 = {
    "name":"yeongjae",
    "age":28
}
console.log(person3);

// 3. 객체 프로퍼티 접근
console.log(person1['name']);
console.log(person1['age']);
console.log(person2.name);
console.log(person2.age);

// 4. 생성, 삭제, 수정
person1.job = "student";
person1.favoritefood = "삼겹살";
person1.hobby = "workout";
person1.name = "taehoon";
console.log(person1);

delete person1.favoritefood
delete person1['hobby']
console.log(person1);

// 5. 존재 유무 파악
let result1 = "hobby" in person1;
console.log(result1);

// 6. 메서드 선언

const person4 = {
    'name':'이정환',
    sayHi() {
        console.log("안녕!");
    }
}

person4.sayHi();
person4["sayHi"]();
