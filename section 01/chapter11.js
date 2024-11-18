function getArea(width, height){
    function initial(){
        console.log('[초기화] 너비와 높이값을 주시면 면적값을 출력해드립니다.');
    }

    initial();
    let area = width * height;
    return area
}

let width = 10;
let height = 20;
let area = getArea(width,height);

console.log(`너비 ${width}, 
높이 ${height}일때, 
면적값은 ${area}입니다`);