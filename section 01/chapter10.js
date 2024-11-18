let idx = 1
for (idx; idx<=10; idx++) {
    
    // 짝수일경우 continue
    if (idx % 2 == 0){
        continue
    }

    // 홀수만 출력
    console.log(idx) 

    // 5이상 될 경우 종료
    if (idx>=5) {
        break
    }
}