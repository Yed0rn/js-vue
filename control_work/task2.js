let count= +prompt("Кількість учнів: ")
let result=0,sum=0,high=0,low=0,max=0;
for (let i = 1; i <= count; i++) {
    result= +prompt(`Напишіть оцінку учня #${i} (Від 1 до 12)`)
    sum+=result
    if (result>=7){
        high+=1
    }else if(result<7){
        low+=1
    }

    if (result>max){
        max=result
    }

}
console.log(`Сума: ${sum}`)
console.log(`Середня: ${sum/count}`)
console.log(`Оцінок 7 і вище: ${high}`)
console.log(`Оцінок нижче 7: ${low}`)
console.log(`Найбільша оцінка: ${max}`)