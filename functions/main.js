"use strict"

//задание №1

function getSolution (a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return {"D": D};
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        return {roots: [x1], "D": D}
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {roots: [x1, x2], "D": D}; 
    }
};

function showSolutionMessage (a, b, c) {
    let result = getSolution(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a} * x^2 + ${b} * x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log ("Уравнение не имеет вещественных корней");  
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
};

showSolutionMessage (1, 2, 3);
showSolutionMessage (7, 20, -3);
showSolutionMessage (2, 4, 2);

//задание № 2

function getPersonData (secretData) {
    
    function getName (name) {
        return (name == 0) ? "Родриго" : "Эмильо"; 
    };
    
    return secretData = {
        firstName: getName (secretData.aaa),
        lastName: getName (secretData.bbb)
    };
};

console.log(getPersonData({
    aaa: 0,
    bbb: 0,
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0,
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1,
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1,
}));

//задание № 3

function getAverageScore (data) {

    function getAverage (scores) {
        
        let sum = 0;   
        for (let i = 0; i < scores.length; i++) {
          sum += scores[i]; 
        }
        let averageMark = sum / scores.length;
        return averageMark
    };
   
    for (let prop in data) { 
        data[prop] = getAverage (data[prop])
    };
    
    let objectSum = 0;
    let objectCounter = 0;

    for (let prop in data) {
        objectSum += data[prop];
        objectCounter++;
    };

    data.average = objectSum / objectCounter;

    return data
}

console.log (getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physycs: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}))