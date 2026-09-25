let count= +prompt("Кількість автомобілів: ")
let hours=0, type=0; price=0, coeff=1, electro=0,full=0,sum=0,max=-1;
while(count<=0 && count>7){
    count= +prompt("Нормальна кількість автомобілів: ")
}
let count_correct=count;
for (let i=1;i<=count;i++){
    hours= +prompt(`Скільки годин стояв автомобіль №${i}`)
    if(hours===0){
        break
    }
    type = +prompt(`Тип автомобіля №${i}\n`+"1 — звичайний\n"+"2 — електромобіль")
    if(type===1){
        price=40
    }else if(type===2){
        price=30;
        electro+=1
    }
    if (hours<0 || hours>12){
        count_correct-=1;
        continue;
    }
    if(hours>5){
        coeff=0.8
    }else if(hours<=5){
        coeff=1
    }
    full=hours*price*coeff
    if (full>max){
        max=full
    }
    sum+=full

}
alert(`Правильно прораховані: ${count_correct}`);
alert(`Електро: ${electro}`);
alert(`Сумма: ${sum}`)
alert(`Найбільше: ${max}`)

