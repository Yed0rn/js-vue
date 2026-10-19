// function isHighscore(score) {
//     return score >= 0;
// }
// let scores =[7,12,8,9,10,5]
//
// let highscore=scores.filter(isHighscore)
// console.log(highscore)

// let scores = [7,12,8,9,10,5]
// let highScore=scores.filter(score=> score>=10)
//
// console.log(highScore)

// let courses=[
//     {id:1,title:"HTML",price:700,description:"HTML description",active:true},
//     {id:2,title:"JS",price:300,description:"JS description",active:true},
//     {id:3,title:"CSS",price:400,description:"CSS description",active:false},
//     {id:2,title:"Vue",price:800,description:"Vue description",active:true},
// ]
// let found=courses.find(course => course.id ===3)
// console.log(found);
// if(found!==undefined){
//     console.log(found.description);
// }else{
//     console.log("Такого немає");
// }
// let activeCourse=courses.filter(courses=> courses.active);
// let lowCost=courses.filter(courses=> courses.price<=400);
// console.log(lowCost);
// console.log(activeCourse);
//
// let title=courses.map(course => course.title)
// let setPrice=courses.map(course=>course.price*0.9)
// console.log(`Початкові дані: ${courses}`);
// console.log(`Назви курсів: ${title}`);
// console.log(`Оновлена вартість курсів: ${setPrice}`);
//
// let search = courses.filter(courses=> courses.title.includes("Script"))
// console.log(search);

function isAvailable(book){
    return book.available === true;
}
let books = [
    {id:1,title:"HTML для початківців",author:"Олена Класна", year:2024,available:true},
    {id:2,title:"JavaScript для початківців",author:"Олена Прекрасна", year:2022,available:false},
    {id:3,title:"CSS для початківців",author:"Олена Жінка", year:2022,available:true},
    {id:4,title:"HTML+JavaScript+CSS для початківців",author:"Олена Мужня", year:2024,available:false},
]
let useridBook= +prompt("Enter your book ID");
let bookID = books.fill(book => book.id===useridBook);
let availableBooks = books.filter(isAvailable);
let title = books.map(book => book.title).join(', ');
let js = books.filter(book => book.title.includes("JavaScript"));


