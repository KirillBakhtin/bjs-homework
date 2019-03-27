"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        console.log("Корней нет");
    } else if (D == 0) {
        let x = (-b + Math.sqrt(D)) / 2 * a;
        console.log(x);
        return x;
    } else {
        let x1 = (-b + Math.sqrt(D)) / 2 * a;
        let x2 = (-b - Math.sqrt(D)) / 2 * a;
        console.log(x1, x2);
        return [x1, x2];
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let today = new Date();
    let todaysYear = today.getFullYear();
    let yearOfBirthday = dateOfBirthday.getFullYear();
    
    if(todaysYear - yearOfBirthday >= 18) {
        let checkResult = `Не желаете ли олд-фэшн, ${name}?`;
        console.log(checkResult);
        return checkResult; 
    } else {
        let checkResult = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
        console.log(checkResult);
        return checkResult;
    }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    if (marks.length / 2 > 5) {
        console.log("Вы ввели более пяти оценок, расчет среднего балла будет производиться по первым пяти оценкам");
        marks.length = 10;
        let sum = 0;
        for (let i = 0; i < marks.length; i += 2) {
            sum += marks[i];
        };
        let averageMark = sum / (Math.ceil(marks.length / 2));
        return averageMark;
    } else {
        let sum = 0;
        for (let i = 0; i < marks.length; i += 2) {
            sum += marks[i];
        };
         let averageMark = sum / (Math.ceil(marks.length / 2));
        return averageMark;
    }
}