let mass=[
    {
        id:1,
        name:"ITшки",
        category:"IT",
        price:1000,
        members:30,
        active:true,
    },
    {
        id:2,
        name:"Тенісери",
        category:"теніс",
        price:1500,
        members:10,
        active:true,
    },
    {
        id:3,
        name:"Футболери",
        category:"футбол",
        price:1200,
        members:15,
        active:false,
    },
    {
        id:4,
        name:"Роботехніки",
        category:"робототехніка",
        price:2000,
        members:5,
        active:false,
    },
    {
        id:5,
        name:"Круті рти",
        category:"бітбокс",
        price:1750,
        members:23,
        active:true,
    }
]
let menu=null,foundclub=null;
while(menu!==0){
    menu = +prompt("Меню:\n"+ "1 - Показати всі гуртки\n"+"2 - Знайти гурток за ID\n"+"3 - Записати учасника\n"+"4 - Змінити статус набору\n"+"5 - Додати новий гурток\n"+"6 - Показати статистику\n"+"0 - Вихід")
    if(menu===1){
        for(let club of mass){
            alert(`${club.name}: ${club.category}, ${club.price}, ${club.members}, ${club.active}`);
        }
    }
    else if(menu===2){
        found = +prompt("Напишіть id");
        foundclub = null;
        for(let club of mass){
            if (club.id === found){
                foundclub = club;
                break;
            }
        }
        if (foundclub !== null) {
            alert(`${foundclub.name}: ${foundclub.category}, ${foundclub.price}, ${foundclub.members}, ${foundclub.active}`);
        } else {
            alert("Не знайдено");
        }
    }
    else if(menu===3){
        let clubadd= +prompt("Напишіть id")
        for(let club of mass){
            if (club.id === clubadd){
                foundclub=club
                break;
            }
        }
        if (foundclub !== null && foundclub.active){
            let confirmation = confirm("Хочете додати?")
            if (confirmation) {
                foundclub.members += 1;
            }else {
                alert("Запис скасовано.");
            }
        } else if (foundclub === null) {
            alert("Не знайдено.");
        } else {
            alert("Набір до цього гуртка закрито.");
        }

    }
    else if(menu===4){
        let clubId = +prompt("Введіть ID гуртка для зміни статусу набору:");
        foundclub = null;
        for(let club of mass) {
            if (club.id === clubId) {
                foundclub = club;
                break;
            }
        }
            if (foundclub !== null){
                let confirmation =confirm("Хочете змінити статус")
                if (confirmation){
                    if (foundclub.active===true){
                        foundclub.active = false;
                    }else if(foundclub.active===false){
                        foundclub.active = true;
                    }
                }else{
                    alert("Дію скасовано");
                }
            }else{
                alert("Не знайдено.");
            }
    }else if(menu===5){
        let Name = prompt("Назва");
        let Category = prompt("Категорія");
        let Price = +prompt("Вартість");
        let Members = +prompt("Кількість учасників");
        let ID = +prompt("ID");
        for(let club of mass){
            if (ID===club.id){
                ID = +prompt("Введіть нову ID");
            }
        }
        let newClub = {
            id: ID,
            name: Name,
            category: Category,
            price: Price,
            members: Members,
            active: true
        }
        mass.push(newClub);

    }else if(menu===6) {
        if (mass.length === 0) {
            alert("Список гуртків порожній. Статистика недоступна.");
        } else {
            let totalClubs = mass.length;
            let activeClubs = 0;
            let totalMembers = 0;
            let totalPrice = 0;

            for (let club of mass) {
                if (club.active) {
                    activeClubs += 1;
                }
                totalMembers += club.members;
                totalPrice += club.price;
            }
            let averagePrice = totalPrice / totalClubs;
            alert(
                "СТАТИСТИКА\n" +
                `Загальна кількість гуртків: ${totalClubs}\n` +
                `Гуртків з відкритим набором: ${activeClubs}\n` +
                `Сумарна кількість учасників: ${totalMembers}\n` +
                `Середня вартість занять: ${averagePrice} грн`
            );
        }
    }

}