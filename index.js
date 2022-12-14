/* Your Code Here */
// Loads Array elements into corresponding Object properties
function createEmployeeRecord(obj) {
    const filledArray = {
        firstName: obj[0],
        familyName: obj[1],
        title: obj[2],
        payPerHour: obj[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return filledArray
}

//Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array
function createEmployeeRecords(array){
    return array.map((obj) => createEmployeeRecord(obj))
}

function createTimeInEvent(timeStamp){
    const [date, hour] = timeStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(hour),
        date: date
    })
    return this
}

function createTimeOutEvent(timeStamp){
    const [date, hour] = timeStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(hour),
        date: date
    })
    return this
}

function hoursWorkedOnDate(timeStamp) {
    const timeIn = this.timeInEvents.find(event => event.date === timeStamp)

    const timeOut = this.timeOutEvents.find(event => event.date === timeStamp)

    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(hours) {
    const wages = hoursWorkedOnDate.call(this, hours)
        * this.payPerHour
    return Number(wages)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(collection, firstName) {
    return collection.find(record => record.firstName === firstName)
}

function calculatePayroll(recordsArray){
    return recordsArray.reduce((employee, record) => employee + allWagesFor.call(record), 0)

}