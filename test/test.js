const schedule = require('pofresh-scheduler');

const cronJob = function () {
    console.log('doing %s', Date.now())
}

try {
    schedule.scheduleJob("0 5 14/2 * * *", cronJob, {
        name: 'cronJobExample'
    });
} catch (e) {
    console.log(e.stack);
}