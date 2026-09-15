// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }
// for (let i = 10; i >= 1; i -= 2) {
//     console.log(i)
// }

// let sum = 0;
// for (let i = 0; i < 30; i++) {
//     sum += i;
//     console.log(sum);
// }
//----------------------------------------------------------------//
// let sum = 0;
// for(let i = 0; i <= 50; i+=2) {
//     sum += i;
// }
// ----------------------------------------//
// let count = 0;
// for (let i=1;i<=100;i++) {
//     if (i%3===0){
//         count++;
//     }
// }
// console.log(count);

// for (let i=1;i<=100;i++){
//     if(i>20 && i%4===0 && i%6===0){
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1;i<=30;i++){
//     if (i%5===0){
//         continue;
//     }
//     console.log(i);
// }

//-----------------------------------------------------------------------------------
// let student_count = +prompt("Enter student count:");
// if (student_count > 0) {
//     let  maxlevel=0,low=0, max=0, min=101, first_100=0, medium=0;
//     for( let i=1;i<=student_count;i++){
//         let grade= +prompt("Enter your student grade:");
//         if (!(grade>=1 && grade<=100)){
//             alert("Error");
//             i--;
//             continue;
//         }
//         if(grade>=90 && grade<=100){
//             maxlevel+=1;
//         }
//         else if(grade<=89 && grade>=60){
//             medium+=1
//         }
//         else{
//             low+=1
//         }
//         if(grade>max){
//             max=grade
//         }
//         if (grade<min){
//             min=grade
//         }
//         if(grade===100){
//             first_100=i
//         }
//
//     }
//     console.log(maxlevel);
//     console.log(medium);
//     console.log(low);
//     console.log(max);
//     console.log(min);
//     console.log(first_100);
// }
//---------------------------------------------------------------


