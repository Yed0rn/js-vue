// let num=1;
// while (num<=5){
//     console.log(num);
//     num++
// }

// let userNumber = +prompt("Enter your number");
// while (userNumber < 1 || userNumber>10) {
//     userNumber = +prompt("Error. Enter your number");
// }
// console.log(userNumber);


// console.log(Number("7"))
// console.log(Number("Hello"))

// let age=+prompt("Enter your age");
// while(Number.isNan(age) || age<=0 || age>=10){
//     age = +prompt("Enter your age");
// }
// console.log(age);


// const correctPin = 1234;
// let pin = +prompt('Enter a valid pin');
// let attempt = 1;
//
// while (attempt < 3 && pin !==correctPin){
//     pin = +prompt('Enter a valid pin');
//     attempt++;
// }
// if (pin === correctPin){
//     console.log("Доступ дозволено");
// }
// else{
//     console.log("Доступ заборонено");
// }'

// let attempt =1, password=1234;
// while(attempt <= 3){
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword){
//         console.log("Доступ дозволено");
//         break
//     }
//     console.log('Неправильний пароль');
//     attempt ++;
// }



// let attempt =1, password=1234;
// while(attempt <= 3){
//     let userPassword = +prompt("Enter your password");
//     if (password === userPassword){
//         console.log("Доступ дозволено");
//         break
//     }
//     console.log('Неправильний пароль');
//     console.log(`Лишилось ${3-attempts}`);
//     attempt ++;
// }


// let menuChoice;
// do{
//     menuChoice= +prompt("Оберіть дію:\n"+
//     "1 - Профіль\n"+"2 - налаштування\n"+"0 - вихід");
//     if (menuChoice===1){
//         alert("Відкриваємо профіль")
//     }else if (menuChoice===2){
//         alert("Відкриваємо налаштування")
//     }else if (menuChoice===0){
//         alert("Вихід")
//     }else{
//         alert("Невідомий вибір")
//     }
// }
// while(menuChoice!==0);


//------------------------------------------------------------------------
// let menuChoice, text;
// do{
//     menuChoice= prompt("Оберіть дію:\n"+
//         "1 - Профіль\n"+"2 - налаштування\n"+"0 - вихід");
//     switch(menuChoice){
//         case "1":
//             text="Відкриваємо профіль";
//             break;
//         case "2":
//             text="Відкриваємо налаштування";
//             break;
//         case "0":
//             text="Вихід";
//             break;
//
//     }
//     alert(text)
// }
// while(menuChoice!=="0");
//--------------------------------------------------------------------------


// let count = 0, sum=0;
// while( count<5){
//     let currentGrade = +prompt(`Введіть оцінку № ${count+1}`);
//     if (currentGrade<1 || currentGrade>12 || Number.isNaN(currentGrade)){
//         alert("Не коректна оцінка")
//         continue;
//     }
//     sum += currentGrade;
//     count++
// }
// console.log(sum);
// console.log(sum/count);


// let questionNumber =1;
// let score=1;
// while (questionNumber <= 5){
//     let questions="", answers=""
//     switch(questionNumber){
//         case 1:
//             questions=`Як створити змінну?`;
//             answers='let';
//             break;
//         case 2:
//             questions="який оператор строгої рівності?";
//             answers="==="
//             break;
//         case 3:
//             quetions="Як позначається оператор and?"
//             answers='&&'
//             break;
//         case 4:
//             questions="Як завершити цикл?"
//             answers='break'
//             break;
//         case 5:
//             questions ="Як записати інкремент?"
//             answers='++'
//             break;
//
//     }
//     let answer = prompt(`Запитання № ${questionNumber} із 5\n ${questions}`)
//     if (answer === ""){
//         console.log("Відповідь не може бути пустою")
//         continue;
//     }
//     else if (answer===answers){
//         alert("Правильно")
//         score++
//     }
//     else{
//         alert("Неправильно")
//     }
//     questionNumber++
// }
// if (score===5){
//     alert("Відмінно")
// }
// else if(score>=3){
//     alert("Норм")
// }
// else{
//     alert("Капець")
// }





// const correctPin = 4321;
// let pin = +prompt('Enter a valid pin');
// let attempt = 1;
//
// while (attempt < 3 && pin !==correctPin){
//     pin = +prompt('Enter a valid pin');
//     attempt++;
// }
// if (pin === correctPin){
//     do{
//      menuChoice= +prompt("Оберіть дію:\n"+
//      "1 - Особистий кабінет\n"+"2 - Повідомлення\n"+"3 - Налаштування\n"+"0 - Вихід");
//      if (menuChoice===1){
//          alert("Відкриваємо Особистий кабінет")
//      }else if (menuChoice===2){
//          alert("Відкриваємо повідомлення")
//      }else if (menuChoice===3){
//          alert("Відкриваємно налаштування")
//      }else if (menuChoice===0) {
//          alert("Виходимо")
//      }else{
//          alert("Такого пункту немає")
//      }
//     }
//    while(menuChoice!==0);
// }
// else{
//     console.log("Доступ заборонено");
// }




