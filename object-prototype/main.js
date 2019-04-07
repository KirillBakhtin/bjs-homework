function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let curr = new Date ();
    let now = +curr;
    let currYear = curr.getFullYear();

    let birthdayDate = new Date (birthday);
    birthday = +birthdayDate;

    let birthdayYear = birthdayDate.getFullYear();
    let diff = now - birthday;


    for (let i = birthdayYear; i <= currYear; i++) {
        if (i % 4 == 0) {
            diff -= 86400000 //количество миллисекунд в сутках, вычитаю их из каждого високосного года
        }
    }ж

    let age = diff / 31536000000; // количество миллисекунд в году
    
    if (age >= 18) {
        return age
    }
    
};

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal == "undefined") { 
        return Null
    } else {
        return sound
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    let marksCounter = 0;
    for (let mark of marks) {
        let markNumber = parseInt(mark);
        sum += markNumber;
        console.log(sum);
        marksCounter++;
    }; 
    
    let average = sum / marksCounter;
    let roundedAverage = Math.round(average);

    console.log(roundedAverage);
    return roundedAverage;

}