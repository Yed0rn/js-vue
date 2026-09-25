let age=+prompt("What is the age?")
let day=+prompt("Напиши свій день:\n"+"1 — будній\n"+"2 — вихідний")
let price, coeff;
while(day!==1 && day!==2){
    alert("Помилка: неправильний тип дня")
    day = +prompt("Напиши свій день:\n"+"1 — будній\n"+"2 — вихідний")
}
if(day===1){
    price=200
}else if(day===2){
    price=250
}

if(age>=0 && age<=7){
    coeff=0
}else if(age>=8 && age<=17){
    coeff=0.5
}else if(age>=18 && age<=59){
    coeff=1
}else if(age>=60 && age<=122){
    coeff=0.6
}
alert(`Підсумкова ціна: ${price*coeff}`)