class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }
 
  start(printTimeCallback) {
    this.intervalId = setInterval(()=> {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60 
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let formattedNumber = ("0" + value).slice(-2);
    return formattedNumber;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    // let minutes = this.getMinutes();
    // let seconds = this.getSeconds();
    // let formatMin = this.computeTwoDigitNumber(minutes);
    // let formatSec = this.computeTwoDigitNumber(seconds);
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    //return (minutes+':'+seconds)
    return `${minutes}:${seconds}`
    // return `${formatMin}:${formatSec}`
  }
}

// let clock = new Chronometer;

// let test = setTimeout(() => {
//     clock.split()
// }, 6000)

// let test2 = setTimeout(() => {
//   clock.start()
// }, 1000)

// let test3 = setTimeout(() => {
//   clock.stop()
// }, 10000)
