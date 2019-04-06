"use strict"

//Задание № 2

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let endDate = new Date(date);
    let endYear = endDate.getFullYear ();
    let endMonth = endDate.getMonth ();

    let todaysDate = new Date ();
    let todaysYear = todaysDate.getFullYear ();
    let todaysMonth = todaysDate.getMonth ();

    let contributionDate = ((endYear - todaysYear) * 12) + (endMonth - todaysMonth);
 
    let argumentsArray = {
        "percent": percent, 
        "contribution": contribution, 
        "amount": amount, 
        "date": contributionDate
    };
    
    for (let prop in argumentsArray) {
        argumentsArray[prop] = parseInt (argumentsArray[prop]);
        console.log(typeof (argumentsArray[prop]));
        if (isNaN (argumentsArray[prop]) || argumentsArray[prop] < 0) {
            return `Параметр ${prop} содержит неправильное значение ${argumentsArray[prop]}`;
        } 
    };

    let paymentWithoutComtribution = amount - contribution;
    let p = percent/100/12;
     
    let monthPayment = paymentWithoutComtribution * (p + p / (Math.pow ((1 + p), argumentsArray.date) - 1));

    let  totalAmount = monthPayment * argumentsArray.date;
    
    console.log(totalAmount.toFixed (2));
    return totalAmount.toFixed (2);
};

//Задание № 2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (Boolean(name) == false) {
        console.log (`Привет, мир! Меня зовут Аноним`);
        return `Привет, мир! Меня зовут Аноним`;
    } else {
        console.log (`Привет, мир! Меня зовут ${name}`);
        return `Привет, мир! Меня зовут ${name}`
    }
}