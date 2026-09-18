let type = +prompt("Оберіть тип події:\n"+ "1 — кіно\n"+"2 — театр\n"+"3 — концерт");
let day_coeff, age, price_age, ID, free=0, full=0, disc=0, sum=0, ticks;
while (type!==1 && type!==2 && type!==3){
    type = +prompt("Оберіть тип:\n"+ "1 — кіно\n"+"2 — театр\n"+"3 — концерт");
}
let price;
switch(type){
        case 1:
            price=150;
            break;
        case 2:
            price=220;
            break;
        case 3:
            price=350;
            break;
}
console.log(price);
let day = +prompt("Оберіть тип дня:\n"+ "1 — будній\n"+"2 — вихідний\n");
while (day!==1 && day!==2){
    day = +prompt("Оберіть тип дня:\n"+ "1 — будній\n"+"2 — вихідний\n");
}
if (day===2){
    day_coeff=1.15
}else if (day===1){
    day_coeff=1
}
let count=+prompt("Напишіть кількість квитків:")
while (count<1 && count>6){
    count = +prompt("Напишіть нормальну кількість квитків:")
}
for (let i=1 ;i<=count;i++){
    age= +prompt(`Напишіть вік учасника №${i}`)
    while (age<-1 && age>122){
        age= +prompt(`Помилка: напишіть вік учасника №${i}`)
    }
    ticks=count
    if (age===-1){
        ticks=i-1
        break;
    }else if (age>=0 && age<=5){
        price_age=0
        free++
        continue
    }else if (age>=6 && age<=12){
        price_age=price*0.5
        disc++
    }else if (age>=13 && age<=17){
        price_age=price*0.8
        disc++
    }else if (age>=18 && age<=25){
        ID= confirm("Чи є у вас студентський?")
        if(ID){
            price_age=price*0.9
            disc++
        }else if(ID===false){
            price_age = price
            full++
        }
    }else if (age>=26 && age<=59){
        price_age=price
        full++
    }else if (age>=60){
        price_age=price*0.75
        disc++
    }
    sum+=price_age*day_coeff


}
if (sum>1000){
    total=sum*0.95
}else {
    total = sum
}
console.log(`Оброблені квитки: ${ticks}`)
console.log(`Безкоштовні квитки: ${free}`)
console.log(`По скидці: ${disc}`)
console.log(`За повною ціною: ${full}`)
console.log(`Повна вартість: ${total}`)


