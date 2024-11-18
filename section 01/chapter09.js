// 1. if 조건문 (if문)
let num = 4;

if (num>=10){
    console.log(`num은 10이상입니다. num 값은 ${num}입니다.`);
} else if (num>=5) {
    console.log(`num은 5이상입니다. num 값은 ${num}입니다.`);
} else if (num>=3) {
    console.log(`num은 3이상입니다. num 값은 ${num}입니다.`);
} else {
    console.log("조건이 거짓입니다.")
}

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할때 if문보다 직관적
let animal = "owl";

switch (animal) {
    case "cat":{
        console.log("고양이");
        break; // break가 없으면 해당 case 실행된후에도 다음 case들이 실행될수도있음.
    }
    case "dog":{
        console.log("강아지");
        break;
    }
    case "bear":{
        console.log("곰");
        break
    }
    default:{ // 앞에 모든 케이스에 만족하지않을때 (else랑 같음)
        console.log("그런 동물은 전 모릅니다.")
    }
}