




function createEmployeeRecord(arrayEle) {
  return {
    firstName: arrayEle[0],
    familyName: arrayEle[1],
    title: arrayEle[2],
    payPerHour: arrayEle[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
}

const createEmployeeRecords = (recordsArray) => {
  return recordsArray.map(rec => createEmployeeRecord(rec))
}

const createTimeInEvent = function (dateStamp) {
  const [date, hour] = dateStamp.split(" ")

  const inEvent = {
    type: "TimeIn",
    hour: parseInt(hour),
    date: date
  }
  this.timeInEvents.push(inEvent)

  return this
}



const createTimeOutEvent = function (dateStamp) {
  const [date, hour] = dateStamp.split(" ")

  const outEvent = {
    type: "TimeOut",
    hour: parseInt(hour),
    date: date
  }
  this.timeOutEvents.push(outEvent)

  return this
}calculatePayroll

const hoursWorkedOnDate = function (targetDate) {
  const inEvent = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
  const outEvents = this.timeOutEvents = this.timeOutEvents.find(oEvent => oEvent.date === targetDate)
  return (outEvents.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(targetDate) {
  return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour
}









const allWagesFor = function(){
  const eligibaleDates = this.timeInEvents.map(function (e) {
    return e.date
  })

  const payable = eligibaleDates.reduce(function(memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
  }.blind(this), 0)
   
  return payable
}
