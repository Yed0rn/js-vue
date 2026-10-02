// function  name(аргументи){
//     код
// // }
// function showMessage() {
//     alert("Hello World!");
// }
//
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// function showInfo(){
//     console.log("В гостях")
//     console.log("Магазин працює з 8:00 до 23:00")
// }
// function showProduct(name, price,count){
//     console.log("Марійка продає:", name)
//     console.log("Ціна:", price, "грн")
//     console.log("Загальна вартість:", price*count,"грн")
// }
// showInfo()
// showProduct("Пральний порошок",800)


// function calculate(price, count){
//     return price*count;
// }
// let total=calculate(800,2)
// console.log(total)


// function discount(total) {
//     if (total>=5000){
//         return 10
//     }else{
//         return 0
//     }
// }
// let discount1=discount(1000)
// let discount2=discount(6000)
// console.log(discount1)
// console.log(discount2)

// function geyProductTotal(price,count) {
//     return price * count;
// }
// function getDiscount(total){
//     if (total >=10000){
//         return 15;
//     }else if(total >=5000){
//         return 10
//     }else if(total >=2000) {
//         return 5
//     }else{
//         return 0;
//     }
// }
// function getDiscountValue(total,percent){
//     return total * percent/100;
// }
//
// function getFinalPrice(total,discount){
//     return total - discount;
// }
//
// let productName= prompt("Enter your product");
// let price = +prompt("Enter your price");
// let productCount =+prompt("Enter your count");
// let productTotal= geyProductTotal(price,productCount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal,productDiscountPercent);
// let productFinalPrice = getFinalPrice(productTotal,productDiscountValue);
// console.log(`Товар ${productName}`);
// console.log(`Ціна ${price}`);
// console.log(`Кількість ${productCount}`);
// console.log(`Сума ${productTotal}`)
// console.log(`Знижка ${productDiscountPercent}`)
// console.log(`Сума знижки ${productDiscountValue}`)
// console.log(`Сума знижки ${productFinalPrice}`)

function calculateTickets(ticketPrice,ticketCount) {
    return ticketPrice * ticketCount;
}
function getTicketDiscount(total){
    if (total >=1500){
        return 15;
    }else if(total >=1000){
        return 10
    }else if(total >=500) {
        return 5
    }else{
        return 0;
    }
}
function calculateTicketDiscount(total,percent){
    return total * percent/100;
}

function calculateTicketFinalPrice(total,discount){
    return total - discount;
}


let  ticketPrice= +prompt("Enter your price");
let ticketCount =+prompt("Enter your count");
let productTotal= calculateTickets(ticketPrice,ticketCount);
let productDiscountPercent = getTicketDiscount(productTotal);
let productDiscountValue = calculateTicketDiscount(productTotal,productDiscountPercent);
let productFinalPrice = calculateTicketFinalPrice(productTotal,productDiscountValue);
console.log(`Ціна ${ticketPrice}`);
console.log(`Кількість ${ticketCount}`);
console.log(`Сума ${productTotal}`)
console.log(`Знижка ${productDiscountPercent}`)
console.log(`Сума знижки ${productDiscountValue}`)
console.log(`Сума до сплати ${productFinalPrice}`)