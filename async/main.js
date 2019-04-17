function setDailyRhytm (wakeUpTime, bedTime) {
    const currentTime = new Date();
    const currentHMTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

    const wakeUpChecker = setAlarm (wakeUpTime, goodMorning);
    const bedTimeChecker = setAlarm (bedTime, goodNight);

    wakeUpChecker (currentHMTime);
    bedTimeChecker (currentHMTime);

};

function setAlarm (time, callback) {
    return systemTime => {
        if (systemTime === time) {
            callback();
        }; 
    };
};

const goodMorning = () => alert ('Доброе утро!');
const goodNight = () => alert ('Доброй ночи!');

setInterval (setDailyRhytm, 1000, '21:48', '21:40');

console.log(new Date());