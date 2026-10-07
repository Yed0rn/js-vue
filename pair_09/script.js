// let prices=[120,23,45,60,55]
// console.log(prices[1])
// prices[1]=50
// console.log(prices.length)
// let suma=0
// for (let i = 0; i<prices.length; i++){
//     console.log(prices[i]);
//     suma+=prices[i]
// }


// function getTotalPrices(prices){
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i];
//     }
//     return sum;
// }
// let prices=[120,23,45,60,55]
// let result=getTotalPrices(prices);
// console.log(result);


//-----------------------------------------------


// function getCount(prices){
//     let count = 0;
//     for (let i = 0; i < prices.length; i++) {
//          if (prices[i] > limit){
//              count++;
//          }
//     }
//     return count;
// }
// let prices=[120,23,45,60,55]
// let limit=50
// let result=getCount(prices);
// console.log(result);



//--------------------------------------------------
function Full(count){
    let mass=[]
    for (let i=1; i<=count;i++){
        let num=prompt("Enter a number");
         mass+=num
    }
    return mass;
}
function division(mass){
    let last2=[]
    for (i=0; i<=mass.length;i++){
        if (mass[i]%2===0){
            last2+=mass[i]
        }
    }
    return last2
}
let count = prompt("Enter a count");
let massive=Full(count);
let last=division(massive);
console.log(last)