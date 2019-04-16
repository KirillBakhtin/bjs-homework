'use strict'

function compareArrays (arr1, arr2) {
    if (arr1 === undefined || arr2 === undefined) {
        return false;
    } else {
        return arr1.length === arr2.length && arr1.every((number, index) => number === arr2[index]);
    }
}

function memoize (fn, limit) {
    let results = [];

    return function (arg1, arg2) {
        const args = [arg1, arg2];

        if (results.length == 0) {
            results.push({
                args,
                result: fn (arg1, arg2),
            });
            return fn (arg1, arg2);
        } else {
            const searcher = results.find(element => compareArrays(element.args, args));

            if (searcher) {
                console.log("Данный результат берется из памяти");
                return searcher.result;
            } else {
                let result = fn (arg1, arg2);
                results.push ({
                    args,
                    result
                });

                if (results.length > limit) {
                    results.shift();
                }
                return result;
            };
        };
    };
};

const fn = (a, b) => {
    console.log("Функция вызвана не из памяти");
    return a * b;
}

const mSum = memoize( fn, 10 );




console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));    
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); 
console.log(compareArrays([1, 2, 3], [2, 3, 1])); 
console.log(compareArrays([8, 1, 2], [8, 1, 2]));


console.log(mSum(7, 4));
console.log(mSum(75683, 6));
console.log(mSum(29, 2));
console.log(mSum(45784, 9));
console.log(mSum(6, 4));
console.log(mSum(2, 5, 6));
console.log(mSum(3, 9));
console.log(mSum(9, 9));
console.log(mSum(9, 9));
console.log(mSum(9, 10));